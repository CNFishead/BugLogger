import React from "react";
import { Badge, Button } from "react-bootstrap";
import Moment from "react-moment";

const LogItem = ({ log: { _id, priority, text, user, createdAt } }) => {
  const setVariant = () => {
    switch (priority) {
      case "high":
        return "danger";
      case "moderate":
        return "warning";
      case "low":
        return "success";
      default:
        return "secondary";
    }
  };

  return (
    <tr>
      <td>{user}</td>
      <td>{text}</td>
      <td>
        <Badge className="p-2 w-100" bg={setVariant()}>
          {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </Badge>
      </td>
      <td>
        <Moment format="MMMM Do YYYY, h:mm:ss a">{new Date(createdAt)}</Moment>
      </td>
      <td>
        <Button variant="danger" size="sm">
          X
        </Button>
      </td>
    </tr>
  );
};

export default LogItem;
