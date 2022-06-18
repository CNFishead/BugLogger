import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const AddLogItem = ({ addItem }) => {
  const [text, setText] = useState("");
  const [user, setUser] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text, user, priority);
    addItem({ text, user, priority });
    // reset form
    setText("");
    setUser("");
    setPriority("");
  };

  return (
    <Card className="mt-5 mb-3">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-3" as={Row} controlId="formPlaintext">
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter log"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group className="my-3" as={Row} controlId="formPlainuser">
            <Col>
              <Form.Control
                type="text"
                placeholder="User"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group className="my-3" as={Row} controlId="formPlainuser">
            <Col>
              <Form.Select
                placeholder="User"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option>Select Value</option>
                <option value="low">Low</option>
                <option value="moderate">moderate</option>
                <option value="high">High</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Row className="my-3">
            <Col>
              <Button type="submit" variant="secondary">
                Add Log
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddLogItem;
