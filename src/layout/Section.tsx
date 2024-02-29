import {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react';
import { Box, styled, Typography } from '@mui/material';
import { SxProps } from '@mui/system/styleFunctionSx';

interface Props {
  title: string;
  containerSx?: SxProps;
  action?: ReactNode;
}

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Section = ({
  title,
  children,
  containerSx: sx,
  action,
  ...rest
}: PropsWithChildren<Props & DivProps>) => {
  return (
    <Sct>
      <div className="flex items-center justify-between">
        <Typography variant="h5">{title}</Typography>
        <div className="flex items-center">{action}</div>
      </div>
      <Box sx={sx}>
        <div {...rest}>{children}</div>
      </Box>
    </Sct>
  );
};

const Sct = styled('section')({
  paddingX: '.4rem',
});

export { Section };
