import {  Button, Indicator } from "@mantine/core";
import { IconBell, IconZoomReplace } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";

const Header = () => {
    const location = useLocation();
    const user = useSelector((state:any) => state.user);

    return location.pathname != "/signup" && location.pathname != "/login"?<div className="w-full bg-mine-shaft-950 px-6 text-white h-28 flex justify-between items-center font-['poppins']">
        <div className="flex gap-1 items-center text-bright-sun-400">
            <IconZoomReplace className="h-8 w-8"/>
            <div className="text-3xl font-semibold"> JobFind</div>
        </div>
        {NavLinks()}
        <div className="flex gap-3 items-center">
            {user ? <ProfileMenu /> : <Link to="/login">
                <Button variant="subtle" color="brightSun.4">Giriş Yap</Button>
            </Link>}
            {/*
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <IconSettings stroke={1.5} />
            </div>
            */}
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <Indicator color="brightSun.4" size={9} processing>
                    <IconBell stroke={1.5} />
                </Indicator>
            </div>
        </div>
    </div>:<></>
}

export default Header;