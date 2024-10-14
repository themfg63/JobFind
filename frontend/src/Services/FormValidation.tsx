const signupValidation = (name: string, value: string) => {
    switch(name){
        case "name":
            if(value.length === 0){
                return "Ad Soyad Boş Bırakılamaz.";
            }
            return "";
        case "email":
            if(value.length === 0){
                return "Email Adresi Boş Bırakılamaz.";
            }
            if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)){
                return "Email Adresi Geçersiz.";
            }
            return "";
        case "password":
            if(value.length === 0){
                return "Şifre Boş Bırakılamaz."
            }
            if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/.test(value)){
                return "Şifreniz, 8-15 karakter arasında, büyük harf, küçük harf ve bir özel karakter içermelidir."
            }
            return
        default:
            return "";
    }
}

export  {signupValidation};