import { LinearProgress } from '@mui/material';
import AppLogo from '../components/AppLogo';

const PageLoading = () => {
  return (
    <div className="full-screen flex-all-center">
      <div className="flex-all-center flex-col gap-8">
        <AppLogo />
        <div className="lg:min-w-[30rem]">
          <LinearProgress />
        </div>
        <div>
          <span className="font-Quicksand text-lg">Please wait a minute</span>
        </div>
      </div>
    </div>
  );
};

export default PageLoading;
