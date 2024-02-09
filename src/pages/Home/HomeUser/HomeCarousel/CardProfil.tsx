import { Box } from '@mui/material';
import Information from './Information';

interface ItemData {
  date: Date;
  price: number;
  description: string;
}

interface Props {
  item: ItemData;
}

const CardProfil = ({ item: { description } }: Props) => {
  return (
    <Box className="w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
      <Box className="h-48 bg-gray-700 rounded-xl"></Box>
      <Box className="flex flex-col gap-4">
        <Box className="flex flex-row justify-between">
          <Box className="flex flex-col">
            <span className="text-xl font-bold">{description}</span>
            <span className="text-xs text-gray-700">ID: 23432252</span>
          </Box>
          <span className="font-bold  text-red-600">$25.99</span>
        </Box>
        <Box className="gap-1 flex flex-row justify-between">
          <Information />
        </Box>
      </Box>
    </Box>
  );
};
export { type ItemData };
export default CardProfil;
