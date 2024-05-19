import { useState } from "react";

const DashboardHome = () => {
    const [led1, setled1] = useState(false);
    const [led2, setled2] = useState(false);
    return ( <div>
              <h2 className="text-lg">Sensor Readings</h2>
      <div className="bg-white p-5 border grid grid-cols-2 gap-6 border-borderColor py-5 rounded-md mt-5">
         <div className="p-5 border border-borderColor rounded-md">
            <h1 className="text-2xl">NN Celcius</h1>
            <h1 className="text-muted">Temperature</h1>
         </div>
         <div className=" p-5 border border-borderColor rounded-md">
         <h1 className="text-2xl">NN %</h1>
            <h1 className="text-muted">Humidity</h1>
         </div>
         <div className=" p-5 border border-borderColor rounded-md">
         <h1 className="text-2xl text-red-400">HIGH</h1>
            <h1 className="text-muted">Water sensor readings</h1>
         </div>
         <div className=" p-5 border border-borderColor rounded-md">
         <h1 className="text-2xl text-green-400">LOW</h1>
            <h1 className="text-muted">Smoke sensor readings</h1>
         </div>
      </div>
    </div> );
}
 
export default DashboardHome;