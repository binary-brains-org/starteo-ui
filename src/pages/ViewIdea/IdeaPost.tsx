import { Avatar, Paper, Typography } from '@mui/material';
import Image from '@/components/Image';
import InputComment from '@/pages/ViewIdea/InputComment';

const IdeaPost = () => {
  return (
    <div className="flex justify-center gap-5">
      <Paper elevation={5} sx={{ borderRadius: '1rem' }}>
        <div className="flex items-center gap-2 p-3">
          <Avatar>U</Avatar>
          <div className="flex flex-col">
            <span className="leading-tight font-bold">Username</span>
            <span className="leading-tight">email@gmail.com</span>
          </div>
        </div>
        <div className="w-[25rem] flex bg-zinc-300 h-[25rem]">
          <Image src="">
            <div className="w-full bg-zinc-300"></div>
          </Image>
        </div>
      </Paper>

      <div className="p-4 max-w-[30%] flex gap-3 flex-col relative">
        <div>
          <Typography variant="h3" fontWeight="bold">
            Idea name
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            a long idea description describing what the user try to do
          </Typography>
        </div>

        <Paper
          elevation={5}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          <span className="text-zinc-400">Comments go here</span>
          <div className="h-full"></div>
          <InputComment />
        </Paper>
      </div>
    </div>
  );
};

export default IdeaPost;
