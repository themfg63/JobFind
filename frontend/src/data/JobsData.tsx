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

export const jobList = [
    {
        jobTitle: "Product Designer",
        company: "Meta",
        applicants: 25,
        experience: "Junior",
        jobType: "Full Time",
        location: "İstanbul",
        package: "58",
        postedDaysAgo: 12,
        description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain" +
        " wallet platform."
    },
    {
        jobTitle: "Sr. UX Designer",
        company: "Netflix",
        applicants: 18,
        experience: "Senior",
        jobType: "Full Time",
        location: "Ankara",
        package: "95",
        postedDaysAgo: 10,
        description: "Netflix is seeking a UX Designer to join our team. You'll be working on designing user-centric interfaces for our."
    }
]