import {
  FavoriteBorderRounded,
  Feed,
  History,
  LayersRounded,
} from '@mui/icons-material';
import { Image } from '@/components';
import { Button } from '@mui/material';

export const CaseLastProject = () => {
  return (
    <div
      className="
      w-full rounded-xl shadow-xl from-bittersweet-700
      flex flex-col items-center bg-gradient-to-br to-maize-600"
    >
      <div className="flex w-full items-center">
        <div className="h-full w-[25%] center-flex flex-shrink-0">
          <Image src="" className="object-cover w-full h-full">
            <LayersRounded sx={{ fontSize: '5rem' }} />
          </Image>
        </div>
        <div className="p-4 text-start flex flex-col w-full gap-2">
          <div>
            <p className="text-2xl font-Montserrat font-bold leading-tight">
              Your last project
            </p>
            <p className="text-lg font-Quicksand line-clamp-1 leading-tight ">
              Description
            </p>
          </div>

          <div className="flex items-center gap-2 justify-between w-full">
            <div className="p-2 flex items-center">
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Feed />}
              >
                View
              </Button>
            </div>

            <div className="center-flex flex-col">
              <span className="text-xl font-Quicksand font-bold">1500,0Ar</span>
              <div className="center-flex gap-2">
                <FavoriteBorderRounded fontSize="small" />
                <span className="text-lg font-Lato">Funds</span>
              </div>
            </div>

            <div className="center-flex flex-col">
              <span className="text-xl font-Quicksand font-bold">2 Days</span>
              <div className="center-flex gap-2">
                <History fontSize="small" />
                <span className="text-lg font-Lato">Left</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
