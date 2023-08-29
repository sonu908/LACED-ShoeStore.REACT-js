import axios from "axios";
import { useState } from "react";

function Register() {
  const [username, Setusername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://localhost:4000/";

  const handleUsernameChange = (e) => {
    Setusername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    SetEmail(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    console.log(username, email, password);

    try {
      const response = await axios.post(`${url}details/register`, {
        username,
        email,
        password,
      });
      console.log(response, "success");
      alert("registered successfully, please login !!");
    } catch (e) {
      console.log("Couldn't register", e.response.data.message);
      alert(e.response.data.message);
    }
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-8 p-16 border border-gray-600 hover:shadow-[3px_2px_0px_2px_#2d3748] transition-all ease-in-out  hover:rounded-xl"
        >
          <input
            id="username"
            type="text"
            onChange={handleUsernameChange}
            color="white"
            value={username}
            placeholder="ghgh"
            className=" h-8 w-72 bg-black p-5 text-white"
          />
          <input
            id="email"
            type="text"
            onChange={handleEmailChange}
            placeholder="ghgh"
            value={email}
            className=" h-8 w-72 bg-black p-5 text-white"
          />
          <input
            id="passsword"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="ghgh"
            className=" h-8 w-72 bg-black p-5 text-white"
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

export default Register;
