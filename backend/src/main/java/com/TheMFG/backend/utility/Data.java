package com.TheMFG.backend.utility;

public class Data {
    public static String getMessageBody(String otp,String name){
        return "<!DOCTYPE html>" +
                "<html>" +
                "<head>" +
                "    <title>OTP Verification</title>" +
                "    <style>" +
                "        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }" +
                "        .email-container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }" +
                "        .email-header { background-color: #4CAF50; color: white; text-align: center; padding: 20px; font-size: 24px; }" +
                "        .email-body { padding: 20px; color: #333333; }" +
                "        .otp-code { font-size: 20px; font-weight: bold; text-align: center; background: #f4f4f4; padding: 10px; margin: 20px 0; border-radius: 5px; color: #4CAF50; letter-spacing: 3px; }" +
                "        .email-footer { text-align: center; padding: 10px; font-size: 12px; color: #777777; background: #f4f4f4; }" +
                "    </style>" +
                "</head>" +
                "<body>" +
                "    <div class=\"email-container\">" +
                "        <div class=\"email-header\">Doğrulama Kodu</div>" +
                "        <div class=\"email-body\">" +
                "            <p>Sayın " + name + ",</p>" +
                "            <p>Hizmetimizi kullandığınız için teşekkür ederiz. Lütfen doğrulama işleminizi tamamlamak için aşağıdaki kodu kullanın. Bu kod 10 dakika geçerlidir.</p>" +
                "            <div class=\"otp-code\">" + otp + "</div>" +
                "            <p>Eğer bunu talep etmediyseniz lütfen bu e-postayı dikkate almayın veya derhal destek ekibiyle iletişime geçin.</p>" +
                "            <p>Saygılarımızla, <br>FindJob Ailesi</p>" +
                "        </div>" +
                "        <div class=\"email-footer\">© 2024 FindJob. Tüm Hakları Saklıdır.</div>" +
                "    </div>" +
                "</body>" +
                "</html>";
    }
}
