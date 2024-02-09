import {
  SpeedDial as Dial,
  SpeedDialAction,
  SpeedDialIcon,
} from '@mui/material';

interface DialOption {
  name: string;
  icon: string;
}

const SpeedDial = ({ options }: { options: DialOption[] }) => {
  return (
    <Dial ariaLabel={crypto.randomUUID()} icon={<SpeedDialIcon />}>
      {options.map((v) => (
        <SpeedDialAction key={v.name} tooltipTitle={v.name} icon={v.icon} />
      ))}
    </Dial>
  );
};

export default SpeedDial;
