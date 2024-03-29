import { Forms as FormLottie } from '../components/Lotties';
import { PropsWithChildren } from 'react';
import { styled } from '@mui/material';

const FormPage = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full">
      <div className="w-[85%] h-screen md:flex-all-center hidden">
        <CircleDetail className="w-[18rem] h-[18rem] top-[-5%] left-[-5%] animate-fade">
          <CircleDetail
            className="w-[16rem] h-[16rem] top-[-3%] left-[-3%] animate-fade"
            color="secondary"
          ></CircleDetail>
        </CircleDetail>

        <div className="w-[90%] h-[90%] flex-all-center">
          <FormLottie />
        </div>
      </div>

      <div className="w-full max-md:h-screen">{children}</div>
    </div>
  );
};

const CircleDetail = styled('div')(({ theme, color }) => ({
  backgroundColor:
    theme.palette[(color as 'primary' | 'secondary') || 'primary']?.main,
  borderRadius: '50%',
  position: 'absolute',
  display: 'flex',
}));

export default FormPage;
