import { useLocation, useNavigate } from "react-router-dom";
import { getUser } from "../controllers/authController";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    user && (
      <div>
        <div className="px-4">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="text-xl font-bold pl-2 mt-2 text-white cursor-pointer"
          >
            EMCS
          </div>
        </div>
        <div className="mt-11 text-sm">
          {[
            {
              title: "Sensors Details",
              path: "/",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              

              )
            },
            {
              title: "Control",
              path: "/control",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
              </svg>
              
              )
            },
            {
              title: "Alerts",
              path: "/alerts",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
              </svg>
              
              )
            }
          ].map(
            (item, index) =>
             
                <div
                  onClick={() => {
                    navigate(item.path);
                  }}
                  className={`${
                    pathname == item.path
                      ? "bg-primary hover:bg-opacity-90 rounded-lg text-sm text-white"
                      : " text-white  opacity-70 text-sm hover:bg-[#393D3D] rounded-lg"
                  }  flex space-x-2 px-5 py-2 items-center cursor-pointer transition-all `}
                >
                  {item.icon}
                  <h1 className="text-base">{item.title}</h1>
                </div>
              
          )}
        </div>
      </div>
    )
  );
};

export default Sidebar;
