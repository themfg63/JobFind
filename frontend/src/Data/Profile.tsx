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
        options: ['Google','Microsoft','Meta','Netflix','Adobe','Facebook','Amazon','Apple','Spotify'],
        value:"Google",
        leftSection: IconBriefcase
    },
    {
        label: "Konum",
        placeholder: "Konum Girin",
        options: ['İstanbul','Ankara','İzmir','Eskişehir','Bursa','Sakarya','Bolu','Kocaeli','Şanlıurfa','Adana','Gaziantep'],
        value: "Ankara, Türkiye",
        leftSection: IconMapPin
    }
]