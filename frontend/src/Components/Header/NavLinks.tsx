import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const links=[
        {name: "İş Bul", url:"find-jobs"},
        {name: "Yetenek Bul", url:"find-talent"},
        {name: "İlan Oluştur", url:"post-job"},
        {name: "Yayınlanan İlanlar", url:"posted-job"},
        {name: "İş Geçmişi", url:"job-history"},
        {name: "Kayıt Ol", url: "signup"},
    ]

    const location = useLocation();
    return <div className="flex gap-10 text-mine-shaft-300 h-full items-center">
        {
            links.map((link,index) => 
            <div className={`${location.pathname=="/"+link.url?"border-bright-sun-400 text-bright-sun-400": "border-transparent"}
            border-t-[3px] h-full flex items-center`}>
                <Link key={index} to={link.url}>{link.name}</Link> </div>)
        }
    </div>
}
export default NavLinks;