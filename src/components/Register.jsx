import { useState } from "react";
import { register } from "../plugins/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      alert("Account created successfully!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 mb-4 w-full"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 mb-4 w-full"
        required
      />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button type="submit" className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors">Register</button>
    </form>
  );
};

export default Register;
