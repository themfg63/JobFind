import Marquee from "react-fast-marquee";
import { companies } from "../../data/Data";

const Companies = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold mb-10 text-mine-shaft-100"><span className="text-bright-sun-400">1000</span>'den Fazla Şirket Tarafından Önerilen</div>
        <Marquee pauseOnHover={true}>
            {
                companies.map((company,index) => <div key={index} className="mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer">
                    <img className="h-14" src={`/photos/Companies/${company}.png`} alt={company} />
                </div>)
            }
        </Marquee>
    </div>
}

export default Companies;