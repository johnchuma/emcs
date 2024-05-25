const DashboardAlert = () => {
    return ( <div>
        <h2 className="text-lg">Alerts</h2>
      <div className="bg-white p-5 border border-borderColor py-5 rounded-md mt-5">
      <table className=" w-full">
            <thead className="px-5 font-normal">
              <tr className="border-b border-borderColor border-opacity-70">
                <th className="text-start text-sm font-normal text-muted pb-2">
                 Reported at
                </th>
                <th className="text-start text-sm font-normal text-muted pb-2">
                 Message
                </th>
              
              </tr>
            </thead>
            <tbody className="mt-3">
              {["Tempature is above normal level","Humidity is above avarages"]
                .map((item) => (
                  <tr className="">
                   
                    <td className="py-2 text-sm">2 min ago</td>
                    <td className="py-2 text-sm">{item}</td>

                    
                  </tr>
                ))}
            </tbody>
          </table>
</div>
     
    </div> );
}
 
export default DashboardAlert;