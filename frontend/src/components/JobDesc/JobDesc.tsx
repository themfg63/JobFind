
import { ActionIcon, Button, Divider } from "@mantine/core";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../../data/JobDescData";
//@ts-ignore
import  DOMPurify  from "dompurify";

const JobDesc = () => {
    const data = DOMPurify.sanitize(desc);

    return <div  className="w-2/3">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className="h-14" src={`/photos/Icons/Google.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">Software Engineer III </div>
                    <div className="text-lg text-mine-shaft-300">Google &bull; 3 Gün Önce &bull; 48 Başvuru</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <Link to="/apply-job">
                    <Button color="brightSun.4" size="sm" variant="light">Başvur</Button>
                </Link>
                <FaRegBookmark className="cursor-pointer text-bright-sun-400" stroke="1.5" />
            </div>
        </div>
        <Divider my="xl" />
        <div className="flex justify-between">
            {
                card.map((item:any, index: number) => <div key={index} className="flex flex-col items-center gap-1">
                    <ActionIcon color="brightSun.4" className="!h-12 !w-12" variant="light" radius="xl" aria-label="Settings">
                        <item.icon className="h-4/5 w-4/5" />
                    </ActionIcon>
                    <div className="text-sm text-mine-shaft-300">{item.name}</div>
                    <div className="font-semibold">{item.value}</div>
                    </div>)
            }
        </div>
        <Divider  my="xl" />
        <div>
            <div className="text-xl font-semibold mb-5">İstenilen Beceriler</div>
            <div className="flex flex-wrap gap-2">
                {
                    skills.map((item,index) => <ActionIcon key={index} color="brightSun.4" className="!h-fit font-medium !text-sm !w-fit" variant="light" p="xs" radius="xl" aria-label="Settings">
                        {item}
                    </ActionIcon>)
                }
            </div>
        </div>
        <Divider my="xl" />
        <div className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold
        [&_h4]:text-mine-shaft-200 [&_p]:text-justify" dangerouslySetInnerHTML={{__html:data}}>
        
        </div>
        <Divider my="xl" />
        <div>
            <div className="text-xl font-semibold mb-5">Firma Hakkında</div>
            <div className="flex justify-between mb-3">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="h-8" src={`/photos/Icons/Google.png`} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <div className="font-medium text-lg">Google</div>
                        <div className="text-mine-shaft-300">10K+ Çalışan</div>
                    </div>
                </div>
                <Link to="">
                    <Button color="brightSun.4" variant="light">Firma Sayfası</Button>
                </Link>
            </div>
            <div className="text-mine-shaft-300 text-justify">
            Google, internet araması, çevrimiçi bilgi dağıtımı, reklam teknolojileri ve arama motorları için yatırımlar yapan çok uluslu 
            Amerikan şirketidir. Şirket İnternet tabanlı hizmet ve ürünler geliştirmektedir. Kârının büyük bir kısmını Google Ads 
            (eski adı ile AdWords) hizmeti üzerinden elde etmektedir. Şirket, Larry Page ve Sergey Brin tarafından, 
            Stanford Üniversitesi'nde doktora öğrencisi oldukları dönemde kurulmuştur. İkili, "Google Guys" olarak anılmaktadır. Google, 
            ilk olarak, 4 Eylül 1998 tarihinde özel bir şirket olarak kuruldu ve 19 Ağustos 2004 tarihinde halka arz edildi. Halka arzın 
            gerçekleştiği dönemde, Larry Page, Sergey Brin ve Eric Schmidt, takip eden yirmi yıl boyunca, yani 2024 yılına kadar Google'da 
            birlikte çalışmak üzere anlaştılar. Kuruluşundan bu yana misyonu "dünyadaki bilgiyi organize etmek ve bunu evrensel olarak 
            erişilebilir ve kullanılabilir hale getirmektir. Gayri resmî sloganı ise, Google mühendisi Amit Patel tarafından bulunan ve 
            Paul Buchheit tarafından desteklenen "Don't be evil" (Kötü olma) dır. Şirket merkezi 2006 yılında, hâlâ aktif olan Mountain View, 
            Kaliforniya'ya taşınmıştır. Şirketin merkezine, Googleplex adı verilmektedir.
            </div>
        </div>
    </div>
}

export default JobDesc;