import { IconBriefcase, IconMapPin } from "@tabler/icons-react";

export const fields = [
    {
        label:"İş Başlığı",
        placeholder:"İş Başlığı Girin",
        options:['Designer','Developer','Product Manager','Marketing Specialist','Data Analyst','Sales Executive','Content Writer','Customer Support'],
        value: "Backend Developer",
        leftSection: IconBriefcase
    },
    {
        label: "Firma",
        placeholder: "Firma Adı Girin",
        options: ['google','microsoft','meta','netflix','adobe','facebook','amazon','apple','spotify'],
        value:"google",
        leftSection: IconBriefcase
    },
    {
        label: "Konum",
        placeholder: "Konum Girin",
        options: ['İstanbul','Ankara','İzmir','Eskişehir','Bursa','Sakarya','Bolu','Kocaeli','Şanlıurfa','Adana','Gaziantep'],
        value: "Ankara",
        leftSection: IconMapPin
    }
]