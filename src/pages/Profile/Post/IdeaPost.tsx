import { Avatar, Button, Divider, Paper } from "@mui/material";
import Image from '@/components/Image';
import { Comment } from "@mui/icons-material";

const IdeaPost = () => {
  return (
    <div className="flex justify-center gap-5 ">
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
        <Divider />
        <div className="center-flex">
          <Button startIcon={<Comment />}>Comment</Button>
        </div>
      </Paper>
    </div>
  );
};

export default IdeaPost;
