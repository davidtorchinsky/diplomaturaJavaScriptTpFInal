import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, TextField } from "@material-ui/core";
//import { GoogleLogin } from "react-google-login";
import { UserContext } from "../UserContext";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CreateAccountModal({ abierto }) {
  const classes = useStyles();
  const [usrName, setUsrName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const { user, setUser } = useContext(UserContext);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [showAccCreation, setshowAccCreation] = useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(abierto);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    console.log("password");
  };

  /*  const submit = () => {
    handleClose();
    console.log("falta implementar");
  }; */
  const submit = () => {
    handleClose();
    let datosUsuario = {
      mail: email,
      logo: null,
      psw: password,
      usr: usrName,
    };
    fetch("http://localhost:4000/usuario/register", datosUsuario).then(
      function (response) {
        setUser(response);
      }
    );
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <img
          src={require("../assets/images/Capture.PNG")}
          alt="There should be an image here"
          align="left"
        />
      </div>
      <div align="center">
        <h2>Sing up</h2>
        <TextField
          required
          id="usr"
          value={usrName}
          onChange={(event) => {
            setUsrName(event.target.value);
          }}
          label="Usuario"
          className={classes.TextField}
        />
        <br />
        <TextField
          required
          value={password}
          type="password"
          id="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          label="Contraseña"
          className={classes.TextField}
        />
        <br />
        <br />
        <TextField
          required
          value={email}
          type="password"
          id="password"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          label="Contraseña"
          className={classes.TextField}
        />

        <br />
        <br />
        <Button type="submit" onClick={() => submit()}>
          Submit
        </Button>
        <br />
        <br />
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      {showAccCreation && <CreateAccountModal abierto={true} />}
    </div>
  );
}

/**<div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div> */
