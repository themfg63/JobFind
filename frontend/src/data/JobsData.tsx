import { CgSearchFound } from "react-icons/cg";
import { LuMapPin } from "react-icons/lu";
import { FaBriefcase } from "react-icons/fa";
import { TbRecharging } from "react-icons/tb";

export const dropdownData = [
    {
        title: "İş Başlığı",
        icon: CgSearchFound,
        options: ['Designer','Developer','Product Manager','Marketing Specialist','Data Analyst','Sales Executive','Content Writer','Customer Support']
    },
    {
        title: "Konum",
        icon: LuMapPin,
        options: ['İstanbul','Ankara','İzmir','Kocaeli','Sakarya','Bolu','Eskişehir','Şanlıurfa','Gaziantep','Konya','Kayseri','Aydın','Çanakkale']
    },
    {
        title: "Deneyim",
        icon: FaBriefcase,
        options: ['Junior','Middle','Senior','Expert']
    },
    {
        title: "Çalışma Tipi",
        icon: TbRecharging,
        options: ['Full Time','Part Time','Sözleşmeli','Freelance','Staj']
    }
];