import { IdeaType } from '@/api/Ideas';
import Card from './Card';
import { Typography } from '@mui/material';

const Grid = ({Ideas, user_id} : {Ideas:[IdeaType] | null, user_id:string}) => {
  return (
    <div className="p-4 flex flex-col gap-5">
      <Typography variant="h4" paddingX="2rem">
        All idea
      </Typography>
      <div className="flex px-4 flex-wrap justify-center gap-8">
        {Ideas !== null && Ideas.map((idea) => {
          return <Card idea={idea} user_id={user_id} />
        })}
      </div>
    </div>
  );
};

export default Grid;
