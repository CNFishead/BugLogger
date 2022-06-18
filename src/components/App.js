import React, { useState } from "react";
import { Container, Table, Alert } from "react-bootstrap";
import LogItem from "./LogItem";
import AddLogItem from "./AddLogItem";

const App = () => {
  const [alert, setAlert] = useState({
    show: false,
    variant: "",
    message: "",
  });

  const [logs, setLogs] = useState([
    {
      _id: 1,
      user: "John Doe",
      text: "This is a log message",
      priority: "high",
      createdAt: new Date().toString(),
    },
    {
      _id: 2,
      user: "Jane Doe",
      text: "This is a log message",
      priority: "high",
      createdAt: new Date().toString(),
    },
    {
      _id: 3,
      user: "John Smith",
      text: "This is a log message",
      priority: "moderate",
      createdAt: new Date().toString(),
    },
    {
      _id: 4,
      user: "Jane Smith",
      text: "This is a log message",
      priority: "low",
      createdAt: new Date().toString(),
    },
  ]);
  const addItem = (item) => {
    if (
      item.text.trim() === "" ||
      item.user.trim() === "" ||
      item.priority.trim() === ""
    ) {
      showAlert("danger", "Please fill in all fields");
      return;
    } else {
      setLogs([...logs, item]);
      showAlert("success", "Log added successfully");
    }
  };

  function showAlert(variant, message, timeout = 3000) {
    setAlert({
      show: true,
      variant,
      message,
    });
    setTimeout(() => {
      setAlert({
        show: false,
        variant: "",
        message: "",
      });
    }, timeout);
  }
  const deleteItem = (id) => {
    setLogs(logs.filter((item) => item._id !== id));
    showAlert("danger", "Log deleted successfully");
  };
  return (
    <Container>
      <AddLogItem addItem={addItem} />
      <hr />
      {alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Text</th>
            <th>Priority</th>
            <th>Created At</th>
            <th></th>
          </tr>
          {logs &&
            logs.map((log) => (
              <LogItem key={log._id} log={log} deleteHandler={deleteItem} />
            ))}
        </thead>
      </Table>
    </Container>
  );
};

export default App;
