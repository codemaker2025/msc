import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="bg-dark p-4 rounded shadow-lg w-50 mx-auto"
    >
      <Form.Group controlId="formBasicUsername" className="mb-3">
        <Form.Label className="text-white">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-secondary text-white"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword" className="mb-3">
        <Form.Label className="text-white">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-secondary text-white"
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
