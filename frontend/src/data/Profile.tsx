import { FaBriefcase } from "react-icons/fa";
import { RiMapPin2Line } from "react-icons/ri";


const fields=[
    {
        label:"İş Başlığı",
        placeholder:"İş Başlığı Girin", 
        options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'], 
        value:"Software Engineer", 
        leftSection: FaBriefcase
    },
    {
        label:"Firma",
        placeholder:"Firma Adı Girin", 
        options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'],
        value:"Google", 
        leftSection: FaBriefcase
    },
    {
        label:"Konum",
        placeholder:"Konum Girin", 
        options:['İstanbul','Ankara','İzmir','Kocaeli','Sakarya','Bolu','Eskişehir','Şanlıurfa','Gaziantep','Konya','Kayseri','Aydın','Çanakkale'], 
        value:"Ankara, Türkiye",
        leftSection: RiMapPin2Line
    }
]
export default fields;