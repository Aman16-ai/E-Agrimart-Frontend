import SideNavBar from "@/Components/farmerDashboard/SideNavBar"
import TopNavBar from "@/Components/farmerDashboard/TopNavBar"
import { Alert } from "@mui/material"

export default function Layout({children}) {
    return (
        <div className="w-screen h-screen flex flex-col">
        <div className="w-auto h-auto">
            <TopNavBar/>
        </div>
        <div className="w-full h-[90%] flex">
          <div className="w-auto h-auto border-t-2">
            <SideNavBar/>
          </div>
          <div className="w-full h-full p-5 overflow-y-scroll">
            {children}
            <div className="w-auto h-auto absolute right-0 bottom-2 mr-2 fixed">
              {false ? <Alert variant={"filled"} severity={"success"}>
                  {"this alert"}
                </Alert>:null}
            </div>
          </div>
        </div>
      </div>
    )
}