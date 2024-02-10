import { Box, Button } from '@mui/material';

interface ItemData {
  date: Date;
  price: number;
  description: string;
  user: string;
}

interface Props {
  item: ItemData;
}

const CardProfil = ({ item: { description, user } }: Props) => {
  return (
    <Box className="w-[200px] flex flex-col gap-1 rounded-2xl">
      <Box className="h-[200px] bg-gray-700 rounded-xl"></Box>
      <Box className="flex flex-col gap-16">
        <Box className="flex flex-row justify-between">
          <Box className="flex flex-col">
            <span className="text-l font-bold">{user}</span>
            <span className="text-xl font-bold">{description}</span>
            <span className="text-xs text-gray-700">ID: 23432252</span>
          </Box>
        </Box>
        <Box className="gap-1 flex flex-row justify-between">
          <Button
            className="justify-center w-100"
            variant="contained"
            color="secondary"
          >
            View more
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export { type ItemData };
export default CardProfil;
