const signupValidation = (name:string, value:string) => {
    switch (name) {
        case "name":
            if(value.length === 0){
                return "Ad Soyad Boş Bırakılamaz.";
            }
            return "";
        case "email":
            if(value.length === 0){
                return "Email Boş Bırakılamaz.";
            }
            if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)){
                return "Geçersiz Email Adresi.";
            }
            return "";
        case "password":
            if(value.length === 0){
                return "Şifre Boş Bırakılamaz.";
            }
            if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/.test(value)){
                return "Şifreniz 8-15 karakterli, bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir."
            }
            return "";
        default:
            return "";
    }
}

const loginValidation = (name:string, value:string) => {
    switch (name){
        case "email":
            if(value.length === 0){
                return "Email Adresi Boş Bırakılamaz.";
            }
            return "";
        case "password":
            if(value.length === 0){
                return "Şifre Boş Bırakılamaz.";
            }
            return "";
        default:
            return "";
    }
}

export {signupValidation, loginValidation};