import { useState } from "react";

const DashboardControl = () => {
    const [led1, setled1] = useState(false);
    const [led2, setled2] = useState(false);

    return ( <div>
          <h2 className="text-lg">Control</h2>
      <div className="bg-white p-5 border border-borderColor py-5 rounded-md mt-5">
         <div className="flex justify-between p-5 border border-borderColor rounded-md">
            <h1>LED 1</h1>
            <div className="flex space-x-2 items-center">
            <input checked={led1} onChange={(e)=>{
                setled1(e.target.checked)
            }} type="checkbox"/>
            <p>{led1?"On":"Off"}</p>
            </div>
         </div>
         <div className="flex justify-between p-5 mt-2 border border-borderColor rounded-md">
            <h1>LED 2</h1>
            <div className="flex space-x-2 items-center">
            <input onChange={(e)=>{
                setled2(e.target.checked)
            }} checked={led2} type="checkbox"/>
            <p>{led2?"On":"Off"}</p>
            </div>
         </div>
      </div>
    </div> );
}
 
export default DashboardControl;