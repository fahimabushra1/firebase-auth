
// import { useState } from "react";
import SingleUser from "../components/dashboard/SingleUser";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {
  const {user}= useAuth();
  // const [users,setUsers] = useState();
 
  console.log(user)

    return (
        <>
            <h1 className="text-5xl text-center text-blue-500 my-8 font-bold">My Dashboard</h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Mail Address</th>
                    <th>Last Login Time</th>
                    <th>Access Token</th>
                  </tr>
                </thead>
            <tbody>
               {
               <SingleUser key={user?.id} user={user} />
               }
            </tbody>
            </table>
          </div>
        </>
    );
};

export default Dashboard;