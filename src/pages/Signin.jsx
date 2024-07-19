import axios from "axios";
import {
  BottomWarning,
  Button,
  Heading,
  InputBox,
  SubHeading,
} from "../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../constants/constants";

function Signin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    const postData = {
      username,
      password,
    };
    setUsername("");
    setPassword("");
    console.log(postData);
    const response = await axios.post(`${URL}/api/v1/user/signin`, postData);
    localStorage.setItem("token", response.data.token);
    navigate("/dashboard");
  };

  return (
    <div className="bg-neutral-500 h-screen flex justify-center">
      <div className="flex flex-col mt-36">
        <div className="w-80 text-center p-2 px-4 bg-white rounded-lg">
          <Heading label="SignIn" />
          <SubHeading label="Enter your information to SignIn" />
          <InputBox
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Button onClick={handleClick} label="Sign In" />
          <BottomWarning
            label="New to Paytm?"
            buttonText="Sign-Up"
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
