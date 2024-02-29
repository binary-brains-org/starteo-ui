import { LensBlur } from '@mui/icons-material';
import { Stylesheet } from '@/utils';
import { Link } from 'react-router-dom';
import pageRoutes from '@/pageRoutes';

export const AppLogo = () => {
  return (
    <Link to={pageRoutes.home} className="flex items-center">
      <LensBlur sx={styles.icon} />
      <span className="text-2xl font-bold font-Quicksand">START-EO</span>
    </Link>
  );
};

const styles = Stylesheet({
  icon: {
    fontSize: '2.5rem',
  },
});
