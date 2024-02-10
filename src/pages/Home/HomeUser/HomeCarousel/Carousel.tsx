import { Box } from '@mui/material';
import CardProfil, { ItemData } from './CardProfil';
import { FC } from 'react';

type HomeProps = {
  data: ItemData[];
};

const Carousel: FC<HomeProps> = ({ data }) => {
  return (
    <Box className="flex justify-center flex-wrap ">
      {data.map((x) => (
        <CardProfil item={x as ItemData} />
      ))}
    </Box>
  );
};

export default Carousel;
