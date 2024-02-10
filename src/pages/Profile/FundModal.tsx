import React, { useEffect, useState } from "react";
import { Button, MenuItem, Modal, Paper, Select, TextField } from "@mui/material";
import { IdeasProvider, IdeaType } from "@/api/Ideas";
import { useForm } from "react-hook-form";
import Funds from "@/api/Funds";
import auth from "@/services/auth";
import { useErrorPopup } from "@/hooks";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FundModal = ({open, setOpen}: Props) => {
  const [errorNode, setErrorNode] = useErrorPopup();
  const [ideas, setIdeas] = useState<IdeaType[]>([]);

  useEffect(() => {
    if(!ideas){
      IdeasProvider.getIdeas(0, 10000)
        .then(setIdeas)
        .catch(setErrorNode);
    }
  }, []);


  const handleData = ({ideaId, value}: {ideaId: string, value: string}) => {
    auth.getCurrentUser()
      .then((v) => {
        return Funds.put(ideaId, {value: (+value), userId: v.id});
      })
      .then(() => {
        setOpen(false);
      })
      .catch(setErrorNode);
  }

  const {handleSubmit, register} = useForm<{ideaId: string, value: string}>();
  return (
    <>
      <Modal
        open={open}
        keepMounted
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <form onSubmit={handleSubmit(handleData)}>
          <Paper>
            <Select {...register('ideaId')}>
              {
                ideas.map(v => (
                  <MenuItem value={v.id}>{v.name}</MenuItem>
                ))
              }
            </Select>
            <TextField type="number" {...register('value')} />
            <div>
              <Button>Submit</Button>
            </div>
            {errorNode}
          </Paper>
        </form>
      </Modal>
    </>
  )
}

export default FundModal;