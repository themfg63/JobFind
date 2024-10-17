package com.TheMFG.backend.utility;

public class Data {
    public static String getMessageBody(String otp,String name){
        return "<!DOCTYPE html>\n" +
                "<html>\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "    <title>Doğrulama Kodunuz</title>\n" +
                "    <style>\n" +
                "        body {\n" +
                "            font-family: Arial, sans-serif;\n" +
                "            background-color: #f4f4f4;\n" +
                "            margin: 0;\n" +
                "            padding: 0;\n" +
                "        }\n" +
                "        .container {\n" +
                "            max-width: 600px;\n" +
                "            margin: 0 auto;\n" +
                "            background-color: #ffffff;\n" +
                "            padding: 20px;\n" +
                "            border-radius: 8px;\n" +
                "            box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n" +
                "        }\n" +
                "        .header {\n" +
                "            text-align: center;\n" +
                "            padding: 10px;\n" +
                "            background-color: #4CAF50;\n" +
                "            color: #ffffff;\n" +
                "            border-radius: 8px 8px 0 0;\n" +
                "        }\n" +
                "        .body {\n "+
                "             padding: 20px;\n"+
                "             color: #333333;\n"+
                "             text-align: center;\n"+
                "        }\n"+
                "        .otp {\n" +
                "            font-size: 28px;\n" +
                "            font-weight: bold;\n" +
                "            color: #4CAF50;\n" +
                "            margin: 20px 0;\n" +
                "        }\n" +
                "        .footer {\n" +
                "            text-align: center;\n" +
                "            margin-top: 20px;\n" +
                "            font-size: 12px;\n" +
                "            color: #888888;\n" +
                "        }\n" +
                "    </style>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <div class=\"container\">\n" +
                "        <div class=\"header\">\n" +
                "            <h1>Doğrulama Kodu</h1>\n" +
                "        </div>\n" +
                "        <div class=\"body\">\n" +
                "            <p>Merhaba, "+ name + "  </p>\n" +
                "            <p>Şifrenizi Güncellemek İçin Kullanacağınız Doğrulama Kodu:  </p>\n" +
                "            <div class\"otp\">" + otp + "</div>\n"+
                "            <p>Bu doğrulama kodu yalnızca 10 dakika geçerlidir.</p>\n" +
                "        </div>\n" +
                "        <div class=\"footer\">\n" +
                "            <p>&copy; 2024 FindJob. Tüm Haklara Sahiptir.</p>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</body>\n" +
                "</html>";
    }
}

