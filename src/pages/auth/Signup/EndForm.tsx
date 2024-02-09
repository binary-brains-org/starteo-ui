import { ChangeEvent, useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Avatar, Button, Typography } from '@mui/material';
import { ClearRounded, UploadFile } from '@mui/icons-material';
import { SignupInput } from '@/types';

interface Props {
  onPrevious(): void;
  form: UseFormReturn<SignupInput>;
}

const EndForm = ({ form, onPrevious }: Props) => {
  const firstname: string = (form?.getValues('firstname') as string) || '';
  const lastname: string = (form?.getValues('lastname') as string) || 'U';
  const nameLetter: string = lastname.charAt(0).toUpperCase();

  const [firstRender, setFirstRender] = useState(true);
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      const files: FileList | undefined = form.getValues('image');
      if (files && files?.length > 0) {
        const file = files?.item(0) as File;
        loadImage(file);
      }
    }
  });

  const cleanImage = () => {
    setImageData('');
    form.resetField('image');
  };

  const loadImage = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageData(reader.result as string);
    };
  };

  const handleChangeImageInput = (ev: ChangeEvent<HTMLInputElement>): void => {
    const file: File | undefined | null = ev.currentTarget?.files?.item(0);
    if (file !== undefined && file !== null) {
      loadImage(file);
    }
  };

  return (
    <>
      <div className="gap-5 flex flex-col">
        <div
          className={`flex-all-center flex-col text-center ${imageData === '' ? '' : 'opacity-0 max-w-0 max-h-0 overflow-x-hidden transition'}`}
        >
          <h1 className="text-2xl font-Montserrat">
            Before ending your subscription
          </h1>
          <Typography>Do you want to add a profile picture ?</Typography>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <div className="flex-all-center gap-3 border-2 rounded-2xl px-8 p-2">
            <Avatar
              src={imageData}
              alt="Profile"
              sx={{
                transition: '.4s',
                height: imageData === '' ? '5rem' : '10rem',
                width: imageData === '' ? '5rem' : '10rem',
                fontSize: '2.5rem',
              }}
            >
              {nameLetter}
            </Avatar>
            <div>
              <p
                className={`font-Montserrat font-bold ${imageData === '' ? 'text-lg' : 'text-3xl'}`}
              >
                {lastname}
              </p>
              <p
                className={`font-Quicksand font-semibold ${imageData === '' ? 'text-md' : 'text-xl'}`}
              >
                {firstname}
              </p>
            </div>
          </div>

          <input
            hidden
            type="file"
            accept="image/*"
            id="image-profile"
            {...form.register('image', {
              onChange: handleChangeImageInput,
            })}
          />

          <div className="flex-all-center gap-2">
            <Button
              startIcon={<UploadFile />}
              variant="outlined"
              component="label"
              htmlFor="image-profile"
            >
              Upload an image
            </Button>

            {imageData ? (
              <Button
                startIcon={<ClearRounded />}
                variant="outlined"
                onClick={cleanImage}
              >
                Reset image
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button type="button" variant="contained" onClick={onPrevious}>
          Previous
        </Button>

        <Button type="submit" variant="outlined">
          Done
        </Button>
      </div>
    </>
  );
};

export default EndForm;
