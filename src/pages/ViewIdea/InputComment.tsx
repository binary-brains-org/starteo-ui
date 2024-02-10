import { Button, TextField } from '@mui/material';
import Stylesheet from '@/utils/Stylesheet';
import { Send } from '@mui/icons-material';

const InputComment = () => {
  return (
    <form>
      <div className="center-flex gap-2">
        <TextField fullWidth placeholder="Comment" variant="standard" />
        <Button sx={styles.button}>
          <Send />
        </Button>
      </div>
    </form>
  );
};

const styles = Stylesheet({
  button: {
    minWidth: 0,
  },
});

export default InputComment;
