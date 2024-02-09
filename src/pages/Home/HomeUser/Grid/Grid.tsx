import Card from './Card';
import { Typography } from '@mui/material';

const Grid = () => {
  return (
    <div className="p-4 flex flex-col gap-5">
      <Typography variant="h4" paddingX="2rem">
        All idea
      </Typography>
      <div className="flex px-4 flex-wrap justify-center gap-8">
        {Array(10).fill(<Card />)}
      </div>
    </div>
  );
};

export default Grid;
