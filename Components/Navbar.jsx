"use client";
import Image from "next/image";
import logo from "../public/assets/E-Agrimart-logos.jpeg";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useSelector,useDispatch } from "react-redux";
import { selectIsAuthenticated,selectUserData } from "@/store/slices/UserSlice";
import { setIsAuthenticated } from "@/store/slices/UserSlice";
import { useEffect } from "react";
import { userDetailsThunk } from "@/store/slices/UserSlice";
export default function Navbar() {
  const pathname = usePathname();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  useEffect(() => {
    const token = localStorage.getItem("e-auth-token");
    if (
      token === undefined ||
      token === null ||
      token === "" ||
      token === " " ||
      token === "null"
    ) {
      dispatch(setIsAuthenticated(false));
    } else {
      dispatch(userDetailsThunk());
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      console.log("user data -----------> ", userData);
    }
  }, [isAuthenticated]);
  return (
      <nav
        className={`${
          pathname === "/"
            ? "absolute"
            : pathname === "/sellerRegistration" || pathname === '/login'
            ? "hidden"
            : "relative shadow-xl"
        } z-10 w-screen h-[100px] flex`}
      >
        <div className="w-[60%] h-[80px] ml-[28px] flex items-center">
          <Image width={90} className="h-[60px] rounded ml-[20%]" src={logo} />
          <h3 className="text-2xl font-semibold text-white ml-[3%]"><Link href={"/bids"}>Bids</Link></h3>
          <h3 className="text-2xl font-semibold text-white ml-[3%]">Orders</h3>
        </div>
        <div className="w-[40%] h-[80px] mr-[130px]  flex items-center">
          <h3 className="text-2xl font-semibold text-white mr-7">
            <Link href={"/sellerRegistration"}>Become a seller</Link>
          </h3>
          {!isAuthenticated ? (
            <>
              <button className="w-[120px] h-[50px] text-white text-xl rounded-xl ml-[2%] font-semibold bg-btn-primary">
                <Link href={"/login"}>Login</Link>
              </button>
              <button className="w-[120px] h-[50px] text-white text-xl rounded-xl ml-3  font-semibold bg-btn-primary">
                Register
              </button>
            </>
          ) : (
            <div
              className="w-[auto] h-[55px] 
            border-slate-50
            text-white
            text-xl
            border-2
            p-2
            rounded-full font-semibold
            flex justify-center items-center
            "
            >
              <Image
                className="mr-3 rounded-full h-[45px]"
                src={"/assets/profilePic.jpg"}
                width={50}
                height={20}
              />
              <p className="cursor-pointer">{userData?.user.first_name + " " + userData?.user.last_name}</p>
            </div>
          )}
        </div>
      </nav>

  );
}
