/*
    - const formDate = (dateString: string) -> Bu fonksiyon, bir tarih formatında string alacağını ve bu tarih üzerinde işlem yapacağını gösterir.
    - const date = new Date(dateString) -> string formatındaki tarihi JavaScript Date nesnesine dönüştürür. Böylece tarih üzerinde farklı işlemler yapmak mümkün hale gelir.
    - const options = {year: 'numeric' as const, month: 'short' as const} ->
        options -> bu nesne toLocalDateString fonksiyonuna tarih formatını nasıl göstereceğini belirtmek için kullanılacak.
        year: 'numeric' -> yılın dört basamaklı bir formatta (2024) gösterilmesini sağlar.
        month: 'short' -> ayın kısa formatta gösterilmesini sağlar.
    - return -> date nesnesine toLocalDateString fonksiyonu uygulanır. Bu fonksiyon parametreleri kullanarak tarihi 'en-US' (Amerikan ingilizcesi) diline göre biçimlendirir.
*/

const formatDate = (dateString: string) => { 
    const date = new Date(dateString); 
    const options = {year: 'numeric' as const, month:'short' as const};
    return date.toLocaleDateString('en-US',options);
}

/*
    timeAgo Fonksiyonu, bir tarih damgasından (timestamp) ne kadar zaman geçtiğini "5 Dakika Önce" veya "2 Ay Önce"
    gibi anlaşılır bir formatta göstermeye yarar.
*/
function timeAgo(time:string){
    const now = new Date();
    const postDate = new Date(time);
    const diff = now.getTime() - postDate.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if(seconds < 60){
        return `${seconds} Saniye Önce`;
    }else if(minutes < 60 ){
        return `${minutes} Dakika Önce`;
    }else if(hours < 24){
        return `${hours} Saat Önce`;
    }else if(days < 30){
        return `${days} Gün Önce`;
    }else {
        return `${months} Ay Önce`; 
    }
}


const getBase64 = (file:any) => {                       //file parametresi alan getBase64 fonksiyonu, Promise dönen bir okuma işlemi sağlar.
    return new Promise((resolve,rejects) => {           //Promise, JavaScript'te asenkron işlemleri yönetmek için kullanılır. Bu fonksiyon, işlemin başarılı veya başarısız olmasına göre "resolve" veya "rejects" çağırır.
        const reader = new FileReader();                //FileReader, tarayıcı tabanlı bir API olup dosyaları çeşitli formatlarda okumaya izin verir.
        reader.readAsDataURL(file);                     //readAsDataURL, dosyayı base64 formatında okuma işlemi başlatır.
        reader.onload = () => resolve(reader.result);   //reader.onload, okuma işlemi tamamlandığında tetiklenir. okunan veri başarılıysa resolve iletilir.
        reader.onerror = error => rejects(error);       //reader.onerror, bir hata oluşursa tetiklenir. rejects(error) ile hata, Promise'in başarısız sonucuna iletilir.
    })
}

export {formatDate,timeAgo,getBase64};



