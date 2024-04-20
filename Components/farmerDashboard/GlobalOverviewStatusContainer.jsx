import StatusCard from "../Bid/Add&ExploreDashBoard/StatusCard";

export default function GlobalStatusOverviewContainer() {
    return (
        <div className='w-auto h-auto flex flex-col mt-3 p-5 shadow-2xl rounded-md'>
      <div className='w-full h-auto flex justify-between items-center z-10'>
      <h3 className='ml-4 font-semibold text-lg'>Overview</h3>
      {/* <DateRangeFilter startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={(setEndDate)} onApplyClick={onApplyClick} onDefaultClick={onDefaultClick}/> */}
      </div>
      <div className='w-full h-[25%] grid gap-4 md:grid-cols-2 mt-2 lg:grid-cols-4'>
        <StatusCard title={"Crops listed"} value={5}/>
        <StatusCard title={"Orders"} value={2}/>
        <StatusCard title={"Locked bids"} value={8}/>
        <StatusCard title={"Revenue"} value={1000}/>
        
         
    </div>
    {/* <div className='w-[98%] ml-3 h-[55px] flex items-center'>
        <p className='text-lg ml-2'>{getReportDate()}</p>
        <p className='text-lg ml-3'>Total : {getTotal().count}</p>
    </div> */}
    </div>
    );
}