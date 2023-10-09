'use client'
import Image from "next/image";
import logo from "../public/assets/E-Agrimart-logos.jpeg"
import { useRouter,usePathname } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectUserState } from "@/store/slices/userSlice";
export default function Navbar() {
    const pathname = usePathname()
    const {token,isAuthenticated} = useSelector(selectUserState)
  return (
    <>
      <nav className={`${pathname==='/'? 'absolute': pathname==='/sellerRegistration'? 'hidden' : 'relative bg-btn-secondary'} z-10 w-screen h-[100px] flex`}>
        <div className="w-[60%] h-[80px] ml-[28px] flex items-center">
            <Image width={90} className="h-[60px] rounded ml-[20%]" src={logo} />
            <h3 className="text-2xl font-semibold text-white ml-[3%]">Bids</h3>
            <h3 className="text-2xl font-semibold text-white ml-[3%]">Orders</h3>
        </div>
        <div className="w-[40%] h-[80px] mr-[130px]  flex items-center">
            <h3 className="text-2xl font-semibold text-white mr-7"><Link href={"/sellerRegistration"}>Become a seller</Link></h3>
            {!localStorage.getItem("e-auth-token") ? <><button className="w-[120px] h-[50px] text-white text-xl rounded-xl ml-[2%] font-semibold bg-btn-primary">Login</button>
            <button className="w-[120px] h-[50px] text-white text-xl rounded-xl ml-3  font-semibold bg-btn-primary">Register</button></> : <div className="w-[250px] h-[55px] 
            border-slate-50
            text-white
            text-xl
            border-2
            rounded-full font-semibold
            flex justify-center items-center
            "
            >
              <Image className="mr-3 rounded-full h-[45px]" src={"/assets/profilePic.jpg"} width={50} height={20}/>
              <p className="cursor-pointer">Aman Saxena</p>
              </div>}
        </div>
      </nav>
    </>
  );
}
