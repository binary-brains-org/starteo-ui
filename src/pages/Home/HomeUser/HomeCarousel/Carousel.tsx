import { Box, Typography } from '@mui/material';
import CardProfil, { ItemData } from './CardProfil';
import { FC } from 'react';

type HomeProps = {
  data: ItemData[];
};

const Carousel: FC<HomeProps> = ({ data }) => {
  return (
    <div className="full-view">
      <Box marginTop="1rem" padding="1rem">
        <Box className="flex justify-center flex-wrap gap-14">
          {data.map((x) => (
            <CardProfil item={x as ItemData} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Carousel;
