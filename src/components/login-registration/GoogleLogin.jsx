
import googleIcon from "../../assets/images/googleIcon.jpg";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
    const {googleLogin} = useAuth();
    const handleGoogleSignin=()=>{
        googleLogin()
    }
    return (
        <div>
        <button onClick={handleGoogleSignin} className="btn w-full bg-white-500 text-blue-500">
            <div className="flex items-center gap-2">
                <img className="w-4" src={googleIcon} alt="" />
                <p className="font-bold">Google</p>
            </div>
        </button>
    </div>
    );
};

export default GoogleLogin;