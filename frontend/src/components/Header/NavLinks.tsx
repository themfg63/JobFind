import { url } from "inspector";
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const links = [
        {name: "İş Bul", url: "find-jobs"},
        {name: "Yetenek Bul", url: "find-talent"},
        {name: "İlan Oluştur", url: "upload-job"},
        {nam: "Hakkımızda", url: "about"}
    ]

    const location = useLocation();

    return <div className="flex gap-5 text-mine-shaft-300 h-full items-center">
        {
            links.map((link,index) => <div className={`${location.pathname==="/"+url?"border-bright-sun-400 text-bright-sun-400":"border-transparent"} border-t-[3px] h-full flex items-center`}>
                <Link key={index} to={link.url}>{link.name}</Link>
            </div>)
        }
    </div>
}

export default NavLinks;