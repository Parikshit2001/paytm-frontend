import axios from "axios";
import { useEffect } from "react";

function Appbar() {

  useEffect(() => {
    
  }, [])

  return (
    <>
      <div className="flex justify-between bg-blue-200">
        <div className="px-4 py-3">
          <p className="text-3xl font-bold">Paytm App</p>
        </div>
        <div className="px-4 py-3 flex justify-center items-center">
          <div className="mr-2">
            <p className="text-lg">Hello User</p>
          </div>
          <div className="h-12 w-12 flex justify-center rounded-full bg-slate-200">
            <div className="justify-center flex flex-col">
              <p>U</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Appbar;
