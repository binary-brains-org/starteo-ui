import { SxProps } from '@mui/material';

interface Styling {
  [key: string]: SxProps;
}

const Stylesheet = <Styles extends Styling>(value: Styles): Styles => {
  return value;
};

export default Stylesheet;
