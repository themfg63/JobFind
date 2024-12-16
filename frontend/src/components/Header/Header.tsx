import {  Indicator } from "@mantine/core";
import { CgSearchFound } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
    const location = useLocation();

    return location.pathname!=="/signup" && location.pathname !== "/login"?<div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center font-['poppins']">
        <div className="flex gap-1 items-center text-bright-sun-400">
            <CgSearchFound className="h-10 w-10" />
            <div className="text-3xl font-semibold">JobFind</div>
        </div>
        {NavLinks()}
        <div className="flex gap-3 items-center">
            <ProfileMenu />
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <IoSettingsOutline />
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <Indicator color="red" offset={4} size={8} processing>
                    <FaBell />
                </Indicator>
            </div>
        </div>
    </div>:<></>
}
export default Header;