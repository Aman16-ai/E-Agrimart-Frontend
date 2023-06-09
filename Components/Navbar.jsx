'use client'
import Image from "next/image";
import logo from "../public/assets/E-Agrimart-logos.jpeg"
import { useRouter,usePathname } from "next/navigation";
export default function Navbar() {
    const pathname = usePathname()
  return (
    <>
      <nav className={`${pathname==='/'? 'absolute':'relative bg-btn-secondary'} z-10 w-screen h-[100px] flex`}>
        <div className="w-[60%] h-[80px] flex items-center">
            <Image width={90} className="h-[60px] rounded ml-[20%]" src={logo} />
            <h3 className="text-2xl font-semibold text-white ml-[3%]">Bids</h3>
            <h3 className="text-2xl font-semibold text-white ml-[3%]">Orders</h3>
        </div>
        <div class="w-[40%] h-[80px]  flex items-center">
            <button className="w-[120px] h-[50px] text-white text-xl rounded-xl ml-[20%] font-semibold bg-btn-primary">Login</button>
            <button className="w-[120px] h-[50px] text-white text-xl rounded-xl ml-3 font-semibold bg-btn-primary">Register</button>
        </div>
      </nav>
    </>
  );
}
