import {
  Avatar,
  Button,
  Card as C,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import Image from '@/components/Image';
import { Money } from '@mui/icons-material';
import Stylesheet from '@/utils/Stylesheet';
import pageRoutes from '@/pages/@pageRoutes';
import { Link } from 'react-router-dom';
import { IdeaType } from '@/api/Ideas';

const Card = ({idea}:{idea:IdeaType}) => {
  console.log(idea);
  return (
    <C elevation={5}>
      <CardContent sx={styles.cardContent}>
        <div className="flex gap-2">
          <Avatar>A</Avatar>
          <div className="flex flex-col">
            <span className="leading-tight font-Montserrat font-bold">
              username
            </span>
            <span className="leading-tight text-sm font-Quicksand">
              {idea.founder}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-full h-[14rem] bg-zinc-100 center-flex">
            <Image src="" className="p-2 full-view">
              <Money />
              <span>Funding</span>
            </Image>
          </div>
          <Typography variant="h6" lineHeight={0.8}>
            {idea.name}
          </Typography>
          <Typography variant="subtitle1" lineHeight={0.8}>
            {idea.description}
          </Typography>
        </div>

        <CardActions sx={styles.cardActions}>
          <Link
            to={pageRoutes.viewIdea
              .replace(':user_id', 'dsds')
              .replace(':idea_id', 'dsds')}
          >
            <Button variant="outlined">View More</Button>
          </Link>

          <span>5 days ago</span>
        </CardActions>
      </CardContent>
    </C>
  );
};

const styles = Stylesheet({
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  cardActions: {
    gap: '2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default Card;
