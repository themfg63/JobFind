import { IconMapPin, IconRecharging, IconZoomReplace } from "@tabler/icons-react";

export const searchFields = [
    {
        title: "İş Adı", icon: IconZoomReplace, options: ['Designer','Developer','Ürün Yöneticisi', "Marketing Specialist",'Analiz Uzmanı','Satış ve Pazarlama','İçerik Üreticisi','Müşteri Hizmetleri','Java Developer','Backend Developer','Frontend Developer']
    },
    {
        title: "Konum", icon: IconMapPin, options: ['İstanbul','Ankara','İzmir','Kocaeli','Sakaraya','Bursa','Bolu','Eskişehir','Konya','Tekirdağ','Antalya','Mersin','Adana','Kayseri']
    },
    {
        title: "Yetenekler", icon: IconRecharging, options:["HTML","CSS","JavaScript","React","Angular","Node.js","Python","Java","Ruby","PHP","SQL","MongoDB","PostgreSQL","Git",
            "API Development","Testing and Debugging", "Agile","DevOps","AWS","Azure","Google Cloud"
        ]
    }
]