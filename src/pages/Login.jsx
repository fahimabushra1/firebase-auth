import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/login-registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";


const Login = () => {
  const {signIn, user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
console.log(user.email)
  const from = location?.state?.from?.pathname || '/home'
  const handleSubmit= async(e)=>{
    e.preventDefault();

    const form = e.target;
 const email = form.email.value;
 const password = form.password.value;
 console.log(email, password);
  await signIn(email,password);
 }  

useEffect(()=>{
  if(user){
    navigate(from,{replace:true})
  }
},[user,navigate,from])


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">We are the world’s largest toy company.We inspire and develop the builders of tomorrow.We shape your imagination.Here you can be anything.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="mt-6">
         <GoogleLogin/>
        </div>
        <div>
          <p>
            New here?<Link to='/register'className="text-red-500" > Register</Link>
          </p>
        </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;