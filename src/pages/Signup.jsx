import { useState } from "react";
import {
  Heading,
  SubHeading,
  Button,
  BottomWarning,
  InputBox,
} from "../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    const postData = {
      firstName,
      lastName,
      username,
      password,
    };
    const response = await axios.post("http://localhost:3000/api/v1/user/signup", postData);
    localStorage.setItem("token", response.data.token)
    navigate("/dashboard")
  };

  return (
    <div className="bg-neutral-500 h-screen flex justify-center">
      <div className="flex flex-col mt-36">
        <div className="w-80 text-center p-2 px-4 bg-white rounded-lg">
          <Heading label="SignUp" />
          <SubHeading label="Enter your information to create an account" />
          <InputBox
            label="First-Name"
            value={firstName}
            placeholder="John"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputBox
            label="Last-Name"
            value={lastName}
            placeholder="Doe"
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputBox
            label="Username"
            value={username}
            placeholder="jd123"
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Button onClick={handleClick} label="Sign Up" />
          <BottomWarning
            label="Already have an account?"
            buttonText="Sign-in"
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
