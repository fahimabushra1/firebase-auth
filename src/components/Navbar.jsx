
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Navbar = () => {
  const {logout, user}= useAuth();

  const handleLogout = async ()=>{
    await logout()
  }
    
        return (
       <div className="relative">
        <div className="navbar bg-[#e0f2fe] fixed top-0 z-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
             {
              !user && (
               <div>
                 <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Sign Up</Link></li>
               </div>
              )
             }
             {
              user && (
                <div>
                      <li><Link to='/dashboard'>Dashboard</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
                </div>
              )
             }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-red-500 font-extrabold">ToyStore</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-blue-500">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Sign Up</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div><button onClick={handleLogout} className="btn text-blue-500 font-bold">Logout</button></div>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://tse2.mm.bing.net/th?id=OIP.eCrcK2BiqwBGE1naWwK3UwHaHa&pid=Api&P=0&h=220" />
        </div>
      </div>
        </div>
      </div>
       </div>
    );
};

export default Navbar;