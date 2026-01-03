"use client";
import Image from "next/image";
import logo from "../public/assets/E-Agrimart-logos.jpeg";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthenticated, selectUserData, setIsAuthenticated } from "@/store/slices/UserSlice";
import { useEffect, useState } from "react";
import { userDetailsThunk } from "@/store/slices/UserSlice";
import { capitalize } from "@/utils/stringUtils";
import { User, Settings, LogOut } from 'lucide-react';

const ProfileDropdown = ({ isOpen, userData, onLogout }) => {
  return (
    <div className={`
      absolute right-4 top-15 w-56
      bg-white rounded-lg shadow-lg 
      transform transition-all duration-200 ease-in-out
      ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
    `}>
      <div className="p-3">
        <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
          <User size={20} className="text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-700">
              {capitalize(userData?.user.first_name)} {capitalize(userData?.user.last_name)}
            </p>
            <p className="text-xs text-gray-500">{userData?.user.email}</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-100">
        <div className="p-2">
          <Link href="/settings">
            <button className="flex items-center space-x-3 w-full p-2 text-sm text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
              <Settings size={18} className="text-gray-500" />
              <span>Settings</span>
            </button>
          </Link>
          
          <button 
            onClick={onLogout}
            className="flex items-center space-x-3 w-full p-2 mt-1 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();

  const isHiddenOnPath = pathname.startsWith('/farmerDashboard');
  const isTransparent = pathname === "/";
  const isHiddenAuth = pathname === "/sellerRegistration" || pathname === '/login';

  useEffect(() => {
    const token = localStorage.getItem("e-auth-token");
    const isValidToken = token && token !== "null" && token.trim() !== "";
    
    if (!isValidToken) {
      dispatch(setIsAuthenticated(false));
    } else {
      dispatch(userDetailsThunk());
    }
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("e-auth-token");
    dispatch(setIsAuthenticated(false));
    router.push("/login");
  };

  if (isHiddenOnPath) return null;

  return (
    <nav className={`
      ${isTransparent ? "absolute" : isHiddenAuth ? "hidden" : "relative bg-[#003B95]"}
      z-10 w-screen
      ${!isHiddenAuth ? "h-[90px]" : "h-[100px]"}
      flex
    `}>
      <div className="w-[60%] h-[80px] ml-[28px] flex items-center">
        <Image 
          width={90} 
          height={60}
          className="h-[60px] rounded ml-[20%] cursor-pointer" 
          src={logo} 
          alt="E-Agrimart Logo"
          onClick={() => router.push("/")} 
        />
        <Link href="/farmerDashboard">
          <h3 className="text-xl font-semibold text-white ml-[3%]">Bids</h3>
        </Link>
        <h3 className="text-xl font-semibold text-white ml-[3%]">Orders</h3>
      </div>

      <div className="w-[40%] h-[80px] mr-[130px] flex items-center">
        <Link href="/sellerRegistration">
          <h3 className="text-xl font-semibold text-white mr-7">
            Become a seller
          </h3>
        </Link>

        {!isAuthenticated ? (
          <div className="flex space-x-3">
            <Link href="/login">
              <button className="w-[120px] h-[50px] text-white text-xl rounded-xl font-semibold bg-btn-primary">
                Login
              </button>
            </Link>
            <button className="w-[120px] h-[50px] text-white text-xl rounded-xl font-semibold bg-btn-primary">
              Register
            </button>
          </div>
        ) : (
          <div className="relative">
            <div
              className="flex items-center space-x-2 px-4 py-2 border-2 border-slate-200 rounded-full cursor-pointer"
              onMouseEnter={() => setIsProfileOpen(true)}
              onMouseLeave={() => setIsProfileOpen(false)}
            >
              <Image
                className="rounded-full h-[45px] w-[45px]"
                src="/assets/profilePic.jpg"
                width={45}
                height={45}
                alt="Profile picture"
              />
              <p className="text-white text-xl font-semibold">
                {capitalize(userData?.user.first_name)} {capitalize(userData?.user.last_name)}
              </p>
            </div>

            <ProfileDropdown 
              isOpen={isProfileOpen}
              userData={userData}
              onLogout={handleLogout}
            />
          </div>
        )}
      </div>
    </nav>
  );
}