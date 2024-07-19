import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "../constants/constants";

function Balance() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const configBody = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios.get(`${URL}/api/v1/account/balance`, configBody).then((response) => {
      setBalance(response.data.balance);
    });
  }, []);
  return (
    <div className="py-12 p-4 bg-blue-100">
      <p className="text-2xl font-medium">
        Your Balance is{" "}
        <span className="font-bold">${Math.floor(balance)}</span>
      </p>
    </div>
  );
}

export default Balance;
