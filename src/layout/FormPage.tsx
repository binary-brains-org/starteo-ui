import { PropsWithChildren } from 'react';
import { styled } from '@mui/material';
import BusinessMan from '../assets/business_man.svg';

const FormPage = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full bg-gradient-to-r from-blue-500 ">
      <div className="w-[85%] h-screen md:flex-all-center hidden">
        <CircleDetail className="w-[18rem] h-[18rem] top-[50%] left-[25%] animate-fade">
        </CircleDetail>
        <CircleDetail
            className="w-[16rem] h-[16rem] top-[-3%] left-[-2%] animate-fade"
            color="secondary"
          ></CircleDetail>

        <div className="w-[90%] h-[90%] flex-all-center">
          <img src={BusinessMan} alt="" />
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
