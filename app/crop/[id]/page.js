export default function Page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#FCFCFD] overflow-y-scroll">
      <div className="w-[80%] h-full flex-col mt-20">
        <div className="w-full h-auto p-5 flex justify-between items-center">
        <p className="text-xl text-black font-semibold">Top quality wheat grains</p>
        <div className="w-auto h-auto flex justify-center items-center">
          <div className="w-auot h-auto flex flex-col">
            <p>Bids</p>
            <h3 className="text-2xl text-black font-bold flex justify-center items-center">105 <div className="w-[5px] h-[5px] bg-black rounded-full ml-2"></div></h3>
          </div>
          
          <div className="w-auot h-auto flex flex-col ml-2">
            <p>Average Bid</p>
            <h3 className="text-2xl text-black font-bold">$457 USD</h3>
          </div>
        </div>
        </div>
        <hr className="w-full h-[1px] bg-black mb-5" />
        <div className="w-full h-full flex">
        <div className="w-[70%] h-full bg-white border-2"></div>
        <div className="w-[30%] h-full bg-white ml-4 border-2"></div>
        </div>
      </div>
    </div>
  );
}
