import { useState } from "react";
import { login, resetPassword } from "../plugins/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Logged in successfully!");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    try {
      await resetPassword(email);
      alert("Password reset email sent!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
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
      <button type="submit" className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors">Login</button>
      <button type="button" onClick={handleResetPassword} className="text-pink-500 mt-4 block">Forgot Password?</button>
    </form>
  );
};

export default Login;
