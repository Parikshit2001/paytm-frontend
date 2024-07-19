import Appbar from "../components/Appbar"
import Balance from "../components/Balance"
import Users from "../components/Users"

function Dashboard() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Appbar />
      <div>
        <Balance />
        <Users />
      </div>
    </div>
  )
}

export default Dashboard