import { useNavigate } from "react-router-dom";
import { Button } from "./";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../constants/constants";
function Users() {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/api/v1/user/bulk?filter=${filter}`).then((response) => {
      setUsers(response.data.user);
    });
  }, [filter]);

  return (
    <div className="bg-blue-50 pl-4 pr-2 py-4">
      <div className="py-2">
        <p className="text-2xl font-bold">Users</p>
      </div>
      <div className="py-2">
        <input
          className="w-full py-2 rounded-lg px-2"
          placeholder="Search users..."
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      {users.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
}

function User({ user }) {
  const navigate = useNavigate();

  const handleClick = (user) => {
    navigate("/send?id=" + user._id + "&name=" + user.firstName);
  };

  return (
    <div className="flex justify-between py-1 my-1 px-3 rounded-xl bg-white hover:bg-green-100">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-slate-200 flex justify-center items-center mr-2">
          <p className="font-bold">{user.firstName[0].toUpperCase()}</p>
        </div>
        <div>
          <p className="text-xl font-medium">{user.firstName}</p>
        </div>
      </div>
      <div className="self-center">
        <Button onClick={() => handleClick(user)} label={"Send Money"} />
      </div>
    </div>
  );
}

export default Users;
