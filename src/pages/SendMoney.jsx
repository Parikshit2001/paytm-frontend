import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { URL } from "../constants/constants";

function SendMoney() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState("");

  const handeClick = async () => {
    const requestBody = {
      to: id,
      amount: amount,
    };
    const requestConfig = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    const response = await axios.post(
      `${URL}/api/v1/account/transfer`,
      requestBody,
      requestConfig
    );
    console.log(response.data);
    setAmount(0);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50">
      <div
        className={`shadow-lg rounded-lg p-10 bg-white flex flex-col justify-between w-[520px]`}
      >
        <div className="self-center pb-10">
          <p className="text-3xl font-bold pb-10">Send Money</p>
        </div>
        <div>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex justify-center items-center mr-2">
              <p className="text-white text-xl">{name[0].toUpperCase()}</p>
            </div>
            <div>
              <p className="text-xl font-bold">{name}</p>
            </div>
          </div>
          <div className="py-1">
            <p className="text-sm font-bold">Amount (in Rs)</p>
          </div>
          <div className="py-2">
            <input
              type="text"
              placeholder="Enter amount"
              className="border w-full rounded-lg px-2 py-1.5"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <div className="border bg-green-500 rounded-lg py-2">
              <button onClick={handeClick} className="w-full text-white">
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMoney;
