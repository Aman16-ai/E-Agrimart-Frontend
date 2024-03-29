import BidModal from "@/Components/Bid/Add&ExploreDashBoard/BidModal";
import HorizontalProductList from "@/Components/HorizontalProductList";
export default function Home() {
  return (
    <>
      <div className="w-[75%] h-[80px] absolute z-20 mt-[33%] ml-[13%] rounded-md bg-[#FCBF49] flex items-center">
        <input className="w-[19rem] h-[4rem] ml-2 p-2 focus:outline-none text-black placeholder:text-black font-semibold rounded-md" placeholder="Which crop are you looking?"/>

        <input className="w-[19rem] h-[4rem] ml-2 p-2 focus:outline-none text-black placeholder:text-black font-semibold rounded-md" placeholder="Choose Season"/>

        <input className="w-[19rem] h-[4rem] ml-2 p-2 focus:outline-none text-black placeholder:text-black font-semibold rounded-md" placeholder="Pick Up Farmer Location"/>

        <button className="w-[10rem] h-[4rem] bg-btn-secondary text-white font-semibold ml-3 rounded-xl mr-2">Search</button>

      </div>
      <div className="relative w-screen h-[500px] bg-hero-pattern bg-cover bg-center text-white justify-center align-middle">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-primary flex flex-col items-center justify-center">
          <div className="w-3/4">
            <h1 className="text-6xl font-bold">E-Agrimart</h1>
            <h1 className="text-xl font-bold m-[8px]">
              Right place of your choice
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full h-auto mt-20">
        <h4 className="text-[1.5rem] font-bold mt-5 ml-5">Top Deals</h4>
        <HorizontalProductList/>
      </div>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const allProducts = await getAllProducts()
//   return {
//     props : {
//       allProducts
//     }
//   }
// }