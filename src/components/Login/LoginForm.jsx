import { useState } from "react";

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 rounded bg-gray-700 text-white focus:outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 rounded bg-gray-700 text-white focus:outline-none"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
