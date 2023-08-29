import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const url = "http://localhost:4000";

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await axios.post(`${url}/details/login`, {
        // Use the correct login endpoint
        email,
        password,
      });

      navigate("/LoginSuccess");
    } catch (e) {
      alert(e.response.data.error);
    }
  };

  return (
    <>
      <div className="h-[380px]">
        <form
          onSubmit={handleLogin}
          className="flex h-full flex-col gap-8 p-16 border border-gray-600 hover:shadow-[3px_2px_0px_2px_#2d3748] transition-all ease-in-out hover:rounded-xl"
        >
          <input
            type="text"
            id="email" // Match this ID with the one used in handleLogin (handleUsernameChange -> setEmail)
            placeholder="email"
            className="h-8 w-72 bg-black p-5 text-white"
            value={email}
            onChange={handleUsernameChange}
          />

          <input
            type="password"
            id="password" // Match this ID with the one used in handleLogin (handlePasswordChange -> setPassword)
            placeholder="password"
            className="h-8 w-72 bg-black p-5 text-white"
            value={password}
            onChange={handlePasswordChange}
          />

          <div>
            <button
              type="submit"
              className="p-1 w-[100px] text-white bg-black border hover:bg-white hover:text-black hover:border-black transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>{" "}
    </>
  );
}

export default Login;
