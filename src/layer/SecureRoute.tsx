import { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import auth from '@/services/auth';
import pageRoutes from '@/pages/@pageRoutes';
import PageLoading from '@/layout/PageLoading';
import useErrorPopup from '@/hooks/useErrorPopup';

/**
 * A user should be authenticated or/and authorized following the auth method
 * @param Component
 * @param authorizedRole
 * @constructor
 */
const SecureRoute = (
  Component: null | (() => JSX.Element),
  authorizedRole?: AvailableRoles[],
) => {
  const SecureComponent = () => {
    const nav: NavigateFunction = useNavigate();
    const [isLoading, setLoading] = useState(true);
    const [errorNode, setError] = useErrorPopup();

    const CannotAccess = () => {
      nav(pageRoutes.login);
    };

    const tryToAccess = () => {
      auth
        .AuthenticationMethod()
        .then(async (authenticated) => {
          if (authenticated) {
            if (authorizedRole !== undefined && authorizedRole.length > 0) {
              const passedAuthorization: boolean =
                await auth.AuthorizationMethod(authorizedRole);
              if (passedAuthorization && authenticated) {
                setLoading(false);
              } else {
                CannotAccess();
              }
            } else {
              setLoading(false);
            }
          } else {
            CannotAccess();
          }
          return authenticated;
        })
        .catch(setError);
    };

    const [firstRender, setFirstRender] = useState(true);
    useEffect(() => {
      if (isLoading && firstRender) {
        setFirstRender(false);
        tryToAccess();
      }
    }, [isLoading, firstRender]);

    return (
      <>
        {isLoading ? (
          <PageLoading />
        ) : Component === null ? null : (
          <Component />
        )}
        {errorNode}
      </>
    );
  };

  return () => <SecureComponent />;
};

export default SecureRoute;
