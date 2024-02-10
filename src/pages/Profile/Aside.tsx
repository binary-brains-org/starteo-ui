import { Button, List, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";
import Stylesheet from "@/utils/Stylesheet";
import { Edit, Logout, MoneySharp, PlusOne } from "@mui/icons-material";

const Aside = () => {
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
                <Button variant="contained" sx={{width: '100%'}}>
                  <ListItemIcon>
                    <PlusOne />
                  </ListItemIcon>
                  <ListItemText>Add Idea</ListItemText>
                </Button>
              </ListItem>

              <ListItem>
                <Button variant="contained">
                  <ListItemIcon>
                    <Edit />
                  </ListItemIcon>
                  <ListItemText sx={{textWrap: 'nowrap'}}>Edit profile</ListItemText>
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