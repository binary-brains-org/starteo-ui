import { Button, Input, List, ListItem, ListItemIcon, ListItemText, Paper, TextField } from "@mui/material";
import Stylesheet from "@/utils/Stylesheet";
import { Edit, Logout, MoneySharp, PlusOne } from "@mui/icons-material";
import BasicModal from "@/components/modal/Modals";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { IdeasProvider, createIdeaType } from "@/api/Ideas";

const Aside = ({founder:string}) => {
  const { register, handleSubmit } = useForm<createIdeaType>({
    defaultValues: {
      image: null,
      description: "",
      status:"OPEN",
      founder:founder, 
      name: ""
    }
  });
  const file = useRef(null);
  const handleClick = (data: createIdeaType) => {
    IdeasProvider.createIdea(data).then((value) => {
      console.log(value);
    }).catch((e) => {
      throw e;
    })
  }
  return (
    <div className="p-2 h-full">
      <Paper elevation={4} sx={styles.paper}>
        <div>
          <div className="p-3 center-flex gap-3">
            <MoneySharp />
            <span className="text-nowrap text-xl">
              Your funds:
            </span>
            &nbsp;
            <span className="text-nowrap font-bold">
              2.00$
            </span>
          </div>

          <div>
            <List>
              <ListItem>
                <Button variant="contained" sx={{ width: '100%' }}>
                  <ListItemIcon>
                    <PlusOne />
                  </ListItemIcon>
                  <BasicModal>
                    <form onSubmit={handleSubmit(handleClick)} >
                      <div className="flex flex-col gap-3 w-[400px] h-[400px]">
                        <h4>Create your own Idea</h4>
                        <TextField {...register("name")} label="name" variant="outlined" />
                        <textarea {...register("description")} className="border-2 border-gray-300" maxLength={50}>
                        </textarea>
                        <div>
                          <label htmlFor="ideaphoto">
                            <Button variant="contained" onClick={() => {
                              if (file.current) {
                                file.current.click();
                              }
                            }}>upload your photo</Button>
                          </label>
                          <input accept="image/jpg" {...register("image")} type="file" ref={file} hidden id="ideaphoto"></input>
                        </div>
                        <Button variant="contained" type="submit">Create</Button>
                      </div>
                    </form>
                  </BasicModal>
                </Button>
              </ListItem>

              <ListItem>
                <Button variant="contained">
                  <ListItemIcon>
                    <Edit />
                  </ListItemIcon>
                  <ListItemText sx={{ textWrap: 'nowrap' }}>Edit profile</ListItemText>
                </Button>
              </ListItem>
            </List>
          </div>
        </div>

        <div className="center-flex py-4">
          <Button startIcon={<Logout />} variant="outlined">Logout</Button>
        </div>
      </Paper>
    </div>
  );
}

const styles = Stylesheet({
  paper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})

export default Aside;