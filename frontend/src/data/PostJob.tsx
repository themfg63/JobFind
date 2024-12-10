const fields=[
    {label:"İş Başlığı",placeholder:"İş Başlığı Girin", options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support']},
    {label:"Firma",placeholder:"Firma Adı Girin", options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify']},
    {label:"Deneyim",placeholder:"Deneyim Seviyesi Girin", options:['Junior', 'Middle','Senior', 'Expert']},
    {label:"Çalışma Tipi",placeholder:"Çalışma Tipi Girin", options:['Full Time', 'Part Time', 'Sözleşmeli', 'Freelance', 'Staj']},
    {label:"Konum",placeholder:"Konum Seçin", options: ['İstanbul','Ankara','İzmir','Kocaeli','Sakarya','Bolu','Eskişehir','Şanlıurfa','Gaziantep','Konya','Kayseri','Aydın','Çanakkale']},
    {label:"Maaş",placeholder:"Maaş Seçin", options:['10 TL', '15 TL', '20 TL', '25 TL', '30 TL', '35 TL', '40 TL', '45 TL']}
]
const content =
  '<h4>İş Hakkında</h4><p>Açıklamayı buraya yazın...</p><h4>Sorumluluklar</h4><ul><li>Sorumlulukları buraya ekleyin...</li></ul><h4>Nitelikler ve Beceri Setleri</h4><ul><li>Gerekli nitelikleri ve beceri setini buraya ekleyin...</li></ul>';
export  {fields, content};