
import SingleUser from "../components/dashboard/SingleUser";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {
  const {user}= useAuth();
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
                  </tr>
                </thead>
            <tbody>
               {
                user?.map((c)=>
                  (<SingleUser key={c?.id} c={c} />))
               }
            </tbody>
            </table>
          </div>
        </>
    );
};

export default Dashboard;