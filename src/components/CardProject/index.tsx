import { Avatar, Chip } from '@mui/material';
import { Image } from '@/components';
import { Stylesheet } from '@/utils';

export const CardProject = () => {
  return (
    <div className="rounded-xl flex flex-col gap-2 w-fit shadow-lg">
      <div className="w-[18rem] rounded-xl overflow-hidden h-[10rem] bg-gunmetal relative">
        <Image
          src=""
          className="object-cover w-full h-full"
        ></Image>

        <Chip sx={styles.chips} color="primary" label="Active" />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex flex-col">
          <span className="text-lg font-bold font-Montserrat leading-tight">Name</span>
          <span className="font-Quicksand line-clamp-2 leading-tight">Description</span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <Avatar sx={styles.avatar} src="">U</Avatar>
            <div className="flex flex-col">
              <span className="font-Lato leading-tight font-bold text-[1rem]">Username</span>
              <span className="font-Quicksand text-sm leading-tight">email@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-Quicksand font-bold text-center leading-tight">2</span>
            <span className="font-Montserrat text-xs font-semibold text-center leading-tight">Days left</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = Stylesheet({
  avatar: {
    width: '2.4rem',
    height: '2.4rem'
  },
  chips: {
    right: '.4rem',
    bottom: '.4rem',
    fontWeight: 'bold',
    position: 'absolute',
    fontFamily: 'quicksand'
  }
})