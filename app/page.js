import BidModal from "@/Components/Bid/Add&ExploreDashBoard/BidModal";
import HorizontalProductList from "@/Components/HorizontalProductList";
import Link from "next/link";
export default function Home() {
  return (
    <>
      {/* <div className="w-[75%] h-[80px] absolute z-20 mt-[33%] ml-[13%] rounded-md bg-[#FCBF49] flex items-center">
        <input className="w-[19rem] h-[4rem] ml-2 p-2 focus:outline-none text-black placeholder:text-black font-semibold rounded-md" placeholder="Which crop are you looking?"/>

        <input className="w-[19rem] h-[4rem] ml-2 p-2 focus:outline-none text-black placeholder:text-black font-semibold rounded-md" placeholder="Choose Season"/>

        <input className="w-[19rem] h-[4rem] ml-2 p-2 focus:outline-none text-black placeholder:text-black font-semibold rounded-md" placeholder="Pick Up Farmer Location"/>

        <button className="w-[10rem] h-[4rem] bg-btn-secondary text-white font-semibold ml-3 rounded-xl mr-2">Search</button>

      </div> */}

      <div className="absolute z-20 mt-[30.5%] ml-[24%] w-[50%]">
  <div className="flex items-center bg-white rounded-2xl px-5 py-4
                  shadow-[0_12px_35px_rgba(252,191,73,0.6)]">
    
    {/* Search Icon */}
    <svg
      className="w-5 h-5 text-gray-500 mr-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
      />
    </svg>

    {/* Search Input */}
    <input
      type="text"
      placeholder="Search crop (e.g. Wheat, Rice, Maize)"
      className="w-full bg-transparent focus:outline-none text-gray-800 placeholder-gray-400 font-medium"
    />

    {/* Search Button */}
    <Link href="/search">
        <button className="ml-4 px-6 py-2 bg-[#FCBF49] text-black font-semibold rounded-2xl hover:opacity-90 transition">
      Search
    </button>
    </Link>
  </div>
</div>

      <div className="relative w-screen h-[500px] bg-hero-pattern bg-fixed  bg-cover bg-center text-white justify-center align-middle">
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
        <HorizontalProductList />
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
