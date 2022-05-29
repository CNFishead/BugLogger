import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import LogItem from "./LogItem";

const App = () => {
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
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Text</th>
            <th>Priority</th>
            <th>Created At</th>
            <th></th>
          </tr>
          {logs && logs.map((log) => <LogItem key={log._id} log={log} />)}
        </thead>
      </Table>
    </Container>
  );
};

export default App;
