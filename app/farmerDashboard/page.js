import BidTable from "@/Components/farmerDashboard/Bid/BidTable";
import GlobalStatusOverviewContainer from "@/Components/farmerDashboard/GlobalOverviewStatusContainer";

export default function FarmerDashboard() {
    return (
        <div className="w-[99%] h-full flex flex-col">
        <GlobalStatusOverviewContainer/>
        {/* <div className="w-full flex h-auto shadow-2xl p-5 mt-10 bg-white rounded-md">
          <div className="w-[50%] h-auto flex-col">
            <h4 className="text-xl font-semibold ml-10">Status vs Count</h4>
            
          </div>
          <div className="w-[50%] h-auto">
            <h4 className="text-xl font-semibold ml-10">Year vs Maintenace</h4>
           
          </div>
        </div> */}
        <div className="w-full h-auto flex flex-col shadow-2xl p-5 mt-10 bg-white rounded-md">
          <div className="w-full h-auto flex justify-between">
          <h4 className="text-xl font-semibold mb-5">
            Recent Crops
          </h4>
          </div>
          <BidTable/>

        </div>
      </div>
    )
}