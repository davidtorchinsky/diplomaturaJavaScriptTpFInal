import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, TextField } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { UserContext } from "../UserContext";
import CreateAccountModal from "./CreateAccountModal";

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

export default function SimpleModal({ abierto }) {
  const classes = useStyles();
  const [usrName, setUsrName] = useState();
  const [password, setPassword] = useState();
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

  const responseGoogle = (response) => {
    let atributes = {
      usrName: response.profileObj.givenName,
      usrSurName: response.profileObj.familyName,
      usrEmail: response.profileObj.email,
    };
    //console.log(response);
    handleClose();
    setUser(atributes);
  };

  const handleAccountCreation = () => {
    handleClose();
    setshowAccCreation(!showAccCreation);
  };

  /* const handleClick = () => {
    console.log(password);
    let datosUsuario= {
      usr:usrName,
      psw:password
    }
    fetch('http://example.com/movies.json', datosUsuario)
    .then(function(response){
      setUser(response);
    })
  }; */

  /*async const handleClick = () => {
    console.log(password);
    let datosUsuario= {
      usr:usrName,
      psw:password
    }
    const user = await fetch('http://example.com/movies.json', datosUsuario);
    setUser(user);
    })
  }; */

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
        <h2>Login</h2>
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
            console.log("a ver: ", password);
          }}
          label="Contraseña"
          className={classes.TextField}
        />
        <br />
        <br />
        <Button type="submit" onClick={handleClick}>
          Log In
        </Button>
        <br />
        <br />
        <GoogleLogin
          clientId="943399630223-b57ctuqusfj911u63n802eupdr34alei.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <br />
        <br />
        <br />
        Does not have an account?
        <br />
        <Button type="button" onClick={() => handleAccountCreation()}>
          Creat one here and start having fun!
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
