import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconSettings, IconZoomReplace } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header = () => {
    return <div className="w-full bg-mine-shaft-950 px-6 text-white h-28 flex justify-between items-center">
        <div className="flex gap-2 items-center text-bright-sun-400">
            <IconZoomReplace className="h-8 w-8"/>
            <div className="text-3xl font-semibold"> JobFind</div>
        </div>
        {NavLinks()}
        <div className="flex gap-3 items-center">
            <div className="flex items-center gap-2">
                <div>Furkan</div>
                <Avatar src="avatar-png.webp" alt="it's me" />
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <IconSettings stroke={1.5} />
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <Indicator color="brightSun.4" size={9} processing>
                    <IconBell stroke={1.5} />
                </Indicator>
            </div>
        </div>
    </div>
}

export default Header;