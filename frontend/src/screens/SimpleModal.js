import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, TextField } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { UserContext } from "../UserContext";
import CreateAccountModal from "./CreateAccountModal";
import { BounceLoader } from "react-spinners";

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
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /* const handleClick = () => {
    console.log("password");
  }; */

  /* const responseGoogle = (response) => {
    let atributes = {
      usr: response.profileObj.givenName,
      usrSurName: response.profileObj.familyName,
      usrEmail: response.profileObj.email,
      jwt: response.accessToken,
    };
    //console.log(response);
    fetch("localhost:4000/usuario/login", atributes).then(function (
      response
    ) {
      !response ? fetch("localhost:4000/usuario/register", atributes)
    });
    
    handleClose();
    setUser(atributes);
    localStorage.setItem("jwt", JSON.stringify(response.accessToken));
  }; */
  const responseGoogle = (response) => {
    //console.log(response);
    setLoading(true);
    fetch("http://localhost:4000/auth/google/").then(function (response) {
      setUser(response.data);
      localStorage.setItem("jwt", JSON.stringify(response.data.token));
    });
    setLoading(false);
    handleClose();
  };

  const handleAccountCreation = () => {
    handleClose();
    setshowAccCreation(!showAccCreation);
  };

  const handleClick = () => {
    console.log(password);
    let datosUsuario = {
      usr: usrName,
      psw: password,
    };
    setLoading(true);
    fetch("http://localhost:4000/usuario/login", datosUsuario).then(function (
      response
    ) {
      setUser(response);
      localStorage.setItem("jwt", JSON.stringify(response));
    });
    setLoading(false);
  };
  /* const handleClick = () => {
    setLoading(true);
  }; */

  /*  const handleClick = async () => {
  try {
    let datosUsuario = {
      usr: usrName,
      psw: password,
    };
    const user = await fetch("localhost:4000/usuario/login", datosUsuario)
    .then()
  } catch (e) {
    
  }
  };  */

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
          label="Email"
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
        {/*  <GoogleLogin
          clientId="943399630223-b57ctuqusfj911u63n802eupdr34alei.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        /> */}
        <Button type="submit" onClick={responseGoogle}>
          GoogleLogin
        </Button>
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
    <div className={loading ? "loadingEffect" : ""}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      {showAccCreation && <CreateAccountModal abierto={true} />}
      {loading && <BounceLoader size={24} color="red " />}
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
