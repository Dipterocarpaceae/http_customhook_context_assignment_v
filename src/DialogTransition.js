import * as React from "react";
import { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import DialogContext from "./context/DialogProvider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UserContext from "./context/UserProvider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogTransition() {
  // const [open, setOpen] = React.useState(false);
  const dialogCtx = useContext(DialogContext);
  const userCtx = useContext(UserContext);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    dialogCtx.setDialog((prev) => !prev);
    userCtx.setUserData(null);
    console.log("Unset user data from dialog");
  };

  return (
    <div>
      <Dialog open={dialogCtx.dialog} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"User Data"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TableContainer component={Paper} sx={{ marginTop: 5 }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Username</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Address</TableCell>
                    <TableCell align="center">Company Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userCtx.userData &&
                    userCtx.userData.map((item) => (
                      <TableRow key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {item.name}
                        </TableCell>
                        <TableCell>{item.username}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.address.street}</TableCell>
                        <TableCell>{item.company.name}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
