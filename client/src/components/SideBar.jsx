import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import PopupContact from "./PopupContact";
import PopupButton from "./PopupButton";
import AddContact from "./AddContact";
import UserRequestItem from "./UserRequestItem";
import Alert from "react-bootstrap/Alert";
import HomeLandingUsers from "./HomeLandingUsers";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function SideBar(props) {
  const [active, setActive] = useState("one");
  return (
    <>
      <div className="sidenav">
<<<<<<< HEAD
        
 
=======
        <img
          className="picture"
          src="data:image/jpeg;base64,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"
          alt="new"
        />
        <a href="#" onClick={() => setActive("one")}>
          Home
        </a>
>>>>>>> master
        <a>
          <PopupButton sessionID={props.sessionID} />
        </a>
        <a>
          <PopupContact sessionID={props.sessionID} />
        </a>
        <a href="#" onClick={() => setActive("two")}>
          Past Request
        </a>
        <a href="#" onClick={() => setActive("three")}>
          Add a new Contact
        </a>
      </div>
      <>
        {active === "one" && <HomeLandingUsers sessionID={props.sessionID}
        headerName={props.headerName}/>}
        {active === "two" && <UserRequestItem sessionID={props.sessionID} />}
        {active === "three" && (
          <AddContact sessionID={props.sessionID} setActive={setActive} />
        )}
      </>
    </>
  );
}
