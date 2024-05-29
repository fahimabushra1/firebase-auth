
import { useState } from "react";
import SingleUser from "../components/dashboard/SingleUser";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {
  const {user}= useAuth();
  const [users,setUsers] = useState();
  
 const showUsers =()=>{
  return setUsers(user);
 } 
    
  
  console.log(user,users)

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
                  </tr>
                </thead>
            <tbody>
               {
                users?.map((u)=>
                  (<SingleUser key={u?.id} u={u} />))
               }
            </tbody>
            </table>
          </div>
        </>
    );
};

export default Dashboard;