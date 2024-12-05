import { Avatar } from "@mantine/core";
import { CgSearchFound } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";



const Header = () => {
    return <div className="w-full bg-black px-6 text-white h-28 flex justify-between items-center">
        <div className="flex gap-3 items-center">
            <CgSearchFound className="h-10 w-10" />
            <div className="text-3xl font-semibold">JobFind</div>
        </div>
        <div className="flex gap-3">
            <a href="">İş Bul</a>
            <a href="">Yetenek Bul</a>
            <a href="">İş İlanı Oluştur</a>
            <a href="">Hakkımızda</a>
        </div>
        <div className="flex gap-5 items-center">
            <div className="flex items-center gap-3">
                <div>Muhammed Furkan</div>
                <Avatar src="avatar.png" alt="its me" />
            </div>
            <FaBell />
            <IoSettingsOutline />
        </div>
    </div>
}
export default Header;