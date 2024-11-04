const formatDate = (dateString: string) => { 
    const date = new Date(dateString); 
    const options = {year: 'numeric' as const, month:'short' as const};
    return date.toLocaleDateString('en-US',options);
}

export {formatDate};

/*
    - const formDate = (dateString: string) -> Bu fonksiyon, bir tarih formatında string alacağını ve bu tarih üzerinde işlem yapacağını gösterir.
    - const date = new Date(dateString) -> string formatındaki tarihi JavaScript Date nesnesine dönüştürür. Böylece tarih üzerinde farklı işlemler yapmak mümkün hale gelir.
    - const options = {year: 'numeric' as const, month: 'short' as const} ->
        options -> bu nesne toLocalDateString fonksiyonuna tarih formatını nasıl göstereceğini belirtmek için kullanılacak.
        year: 'numeric' -> yılın dört basamaklı bir formatta (2024) gösterilmesini sağlar.
        month: 'short' -> ayın kısa formatta gösterilmesini sağlar.
    - return -> date nesnesine toLocalDateString fonksiyonu uygulanır. Bu fonksiyon parametreleri kullanarak tarihi 'en-US' (Amerikan ingilizcesi) diline göre biçimlendirir.
*/

