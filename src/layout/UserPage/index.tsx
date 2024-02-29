import { Aside, Header } from './components';
import { PropsWithChildren } from 'react';
import { Box } from '@mui/material';

export const UserPage = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col bg-zinc-50">
      <Header />
      <Box marginTop="4rem" minHeight="calc(100vh - 4rem)" display="flex">
        <Aside />
        <div className="w-full px-3 py-4 overflow-x-hidden">{children}</div>
      </Box>
    </div>
  );
};
