import { Button } from '@mui/material';
import { Layers } from '@mui/icons-material';

export const CaseAddProject = () => {
  return (
    <div className="
      flex flex-col w-full text-end items-end text-white
      p-4 bg-gradient-to-bl from-african_violet-500
      to-gunmetal-700 rounded-xl shadow-xl"
    >
      <span className="text-2xl font-Montserrat font-bold">
        Do you have a new project ?
      </span>
      <span className="text-lg font-semibold pb-2">And you need funding ?</span>
      <Button
        color="secondary"
        variant="contained"
        startIcon={<Layers fontSize="large" />}
      >
        New Project
      </Button>
    </div>
  );
};
