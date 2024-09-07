import { Avatar } from "@mantine/core";
import { IconBell, IconSettings, IconZoomReplace } from "@tabler/icons-react";

const Header = () => {
    return <div className="w-full bg-black px-6 text-white h-28 flex justify-between items-center">
        <div className="flex gap-2 items-center">
            <IconZoomReplace className="h-8 w-8"/>
            <div className="text-2xl font-semibold"> JobFind</div>
        </div>
        <div className="flex gap-10">
            <a href="">İş Bul</a>
            <a href="">Yetenek Bul</a>
            <a href="">İş İlanı Ekle</a>
            <a href="">Hakkımızda</a>
        </div>
        <div className="flex gap-5 items-center">
            <IconBell />
            <div className="flex items-center gap-3">
                <div>Muhammed</div>
                <Avatar src="avatar.png" alt="it's me" />
            </div>
            <IconSettings />
        </div>
    </div>
}

export default Header;