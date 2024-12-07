import { CgSearchFound } from "react-icons/cg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { footerLinks } from "../../data/Data";

const Footer = () => {
    return <div className="pt-20 pb-5 flex gap-5 justify-around bg-mine-shaft-950 font-['poppins']">
        <div className="w-1/4 flex flex-col gap-4">
            <div className="flex gap-1 items-center text-bright-sun-400">
                <CgSearchFound className="h-10 w-10" />
                <div className="text-3xl font-semibold">JobFind</div>
            </div>
            <div className="text-sm text-mine-shaft-300">kullanıcı profilleri, beceri güncellemeleri, sertifikalar, iş deneyimleri ve yönetici iş ilanları içeren iş portalı</div>
            <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-600">
                <div><FaFacebookSquare /></div>
                <div><FaInstagram /></div>
                <div><FaSquareXTwitter /></div>
            </div>
        </div>
        {
            footerLinks.map((item,index) => <div key={index}>
                <div className="text-lg font-semibold mb-4 text-bright-sun-400">{item.title}</div>
                {
                    item.link.map((links,index) => <div key={index} className="text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out">{links}</div>)
                }</div>)
        }
    </div>
}

export default Footer;