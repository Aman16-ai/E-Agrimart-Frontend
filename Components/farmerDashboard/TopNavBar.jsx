import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/assets/E-Agrimart-logos.jpeg"
export default function TopNavBar() {
    return (
        <div className='w-screen bg-white h-16 shadow-lg flex justify-evenly items-center'>
        <div className='w-auto flex items-center h-full cursor-pointer'>
        <Image src={logo} className='w-[65px] h-[50px] ml-5' />
        <h4 className='w-[250px]  font-semibold ml-2'>E-Agrimart Dashboard</h4>
        </div>
        <input className='w-[350px] h-12 bg-slate-100 rounded-xl p-5 focus:outline-none' type="text" name="" placeholder='search' id="" />
        <div className='w-[400px] h-full  border-black flex items-center justify-evenly'>
            <div>
            <Link className='mr-1' href={"/farmerDashboard"}><HomeOutlinedIcon sx={{ stroke: "#ffffff", strokeWidth: 0.7 }} fontSize='large'/></Link>
            <Link className="ml-2" href={"/notifications"}><NotificationsActiveOutlinedIcon sx={{ stroke: "#ffffff", strokeWidth: 0.7 }} fontSize='large'/></Link>
            </div>
            <div className="w-[200px] h-[55px] 
            border-slate-200
            text-black
            text-lg
            border-2
            rounded-full font-semibold
            flex items-center
            "
            >
              <Image className="w-[48px] ml-1 border-2 border-slate-200 rounded-full h-[48px]" src={logo}/>
              <p className="border-black ml-2 text-black cursor-pointer">Aman saxena</p>
              </div>
        </div>
    </div>
    );
}