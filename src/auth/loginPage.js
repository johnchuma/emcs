import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { getUser } from "../controllers/authController";
import Spinner from "../components/spinner";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <div className=" bg-dark h-screen py-16 font-aeonik text-textColor ">
      <Toaster position="top-right" />
      <div className="grid grid-cols-12 w-7/12 mx-auto bg-white rounded-lg shadow-2xl">
        <div className=" col-span-5 overflow-hidden bg-slate-900 rounded-l-lg">
          <img
            className="w-full h-full object-cover"
            src="https://img.freepik.com/free-photo/3d-workstation-with-computer-peripheral-devices_23-2150713961.jpg?t=st=1716111813~exp=1716115413~hmac=b6d0441b6ec3f178f6f09aa50e3817ce2192600a45e38f809070cbf53a16c092&w=740"
          />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            const data = {
              email: e.target.email.value,
              password: e.target.password.value
            };
           
              try {
                
                signInWithEmailAndPassword(
                  auth,
                  data.email,
                  data.password
                ).then(() => {
                  navigate("/");
                }).catch((e)=>{
                  toast.error('Wrong email/password')
                });
              } catch (error) {
                toast.error('Wrong email/password')
                
              }
                
           
          }}
          className=" col-span-7  py-16 justify-center flex flex-col w-8/12 mx-auto items-center  text-center "
        >
        
          <div className="w-full text-textColor text-sm">
            <h1 className="font-bold text-2xl text-start">Login to continue</h1>
            <p className="text-start text-sm text-muted">
              To access your dashboard you have to login
            </p>
          </div>
          <div className=" text-start space-y-1 w-full text-sm mt-6 ">
            <h1>Email address</h1>
            <input
              required
              name="email"
              className="w-full border-borderColor   placeholder:text-sm focus:border-primary focus:ring-primary rounded-lg"
              placeholder="Enter email address"
            />
          </div>
          <div className=" text-start space-y-1 w-full text-sm mt-4">
            <h1>Password</h1>
            <input
              type="password"
              required
              name="password"
              className="w-full placeholder:text-sm  border-borderColor rounded-md focus:ring-primary focus:border-primary"
              placeholder="Enter your password"
            />
          </div>
          {/* <div className=" flex justify-end w-full cursor-pointer text-sm text-muted">
            <p>Forget password ?</p>
          </div> */}
          <button
            type="submit"
            className="w-full py-3 mt-8 text-white font-bold justify-center flex bg-primary rounded-lg"
          >
            {loading ? <Spinner /> : "Login"}
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
