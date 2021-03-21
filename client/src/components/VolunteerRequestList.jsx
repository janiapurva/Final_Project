import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

function RequestTablei(props) {
  console.log("props VolDispList ", props);

  const [successfulForm, setSuccessfulForm] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("inside accept request");

    let updateOfStatus = "accepted";

      

    const geti = () => {
      
      let returnObj = {}  
      for (let i in props) {
        console.log("props.listItem[]iiiiiiiiiiiiii", props);


         returnObj = {

          // posted_by: props.posted_by,
          // date_of_request: props.date_of_request,
          // task_description: props.task_description,
          // task_postal_code: props.task_postal_code,
          // date_posted: props.date_posted,
          fullilled_by_volunter: props.sessionIDTOUSE, //sessionIDTOUSE // START HERE
          status: updateOfStatus,
          requestID: props.requestID,
        };

        // const returnObj = {
        //   requestID: i.id,
        //   userIDFromReq: i.posted_by,
        //   date_of_request: i.date_of_request,
        //   task_description: i.task_description,
        //   task_postal_code: i.task_postal_code,
        //   date_posted: i.date_posted,
        //   status: "Accepted",
        // };
      }
      console.log('returnObj',returnObj)
      return returnObj;

    };

    let updateRequestObjVolunteerAccept = geti();

    // OLD WAY
    // const volIdFromState = props.sessionID;
    // const requestID = props.listItem[0].id
    // const userIDFromReq = props.listItem[0].posted_by;
    // console.log("----voleIDFromReq---", volIdFromState);
    // const date_of_request = props.listItem[0].date_of_request;
    // const task_description = props.listItem[0].task_description;
    // const task_postal_code = props.listItem[0].task_postal_code;
    // const date_posted = props.listItem[0].date_posted;
    // const status = "accepted";

    // const updateRequestObjVolunteerAccept = {
    //   requestID:requestID,
    //   posted_by: userIDFromReq, //user_id we need from auth response
    //   date_of_request: date_of_request, // from form
    //   task_description: task_description, //
    //   task_postal_code: task_postal_code,
    //   date_posted: date_posted,
    //   fullilled_by_volunter: volIdFromState,
    //   status: status,
    // };

    console.log(
      "update object to send back to db",
      updateRequestObjVolunteerAccept
    );

    // useEffect((),[])

    axios
      .post("http://localhost:8000/updateRequest", {
        updateRequestObjVolunteerAccept,
      })
      .then((res) => {
        console.log("inside .then success update ");

        setSuccessfulForm(true);
      })
      .catch((err) => {
        console.log("Error ReqBox 54", err);
      });
  };

  return (
    <tbody>
      <tr>
        <td>{props.requestID}</td>
        <td>{props.posted_by}</td>
        <td>{props.date_of_request}</td>
        <td>{props.task_description}</td>
        <td>{props.task_postal_code}</td>
        <td>{props.date_posted}</td>
        <td>{props.fullilled_by_volunter}</td>
        <td>{props.status}</td>
        <Button onClick={handleSubmit} variant="success" type="submit">
          Accept
        </Button>{" "}
      </tr>
    </tbody>
  );
}

export default function VolunteerRequestList(props) {
  return (
    // <Form onSubmit={handleSubmit} className="volunteerPendingRequests">
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Request #</th>
          <th>Posted by</th>
          <th>Date Requested</th>
          <th>Description</th>
          <th>Postal Code</th>
          <th>Date Posted</th>
          <th>Volunteer ID</th>
          <th>Status</th>
          <th>Accept Request</th>
        </tr>
      </thead>

      {props.listItem.map((response) => (
        <RequestTablei
          key={response.id}
          requestID={response.id}
          posted_by={response.posted_by}
          date_of_request={response.date_of_request}
          task_description={response.task_description}
          task_postal_code={response.task_postal_code}
          date_posted={response.date_posted}
          fullilled_by_volunter={response.fullilled_by_volunter}
          status={response.status}
          sessionIDTOUSE={props.sessionID}
        />
      ))}
    </Table>
    // </Form>
  );
}
