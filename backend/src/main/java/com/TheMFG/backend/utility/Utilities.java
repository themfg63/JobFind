package com.TheMFG.backend.utility;

import com.TheMFG.backend.entity.Sequence;
import com.TheMFG.backend.exception.JobPortalException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;
/*
Bu sınıf, MongoDB ile çalışarak otomatik artan bir sıra numarası (sequence) oluşturmak için kullanılır.
Özellikle, MongoDB'de ilişkisel veritabanlarında olduğu gibi otomatik artan bir ID özelliği olmadığından,
bu tür bir mekanizmayı manuel olarak yönetmek için tasarlanmıştır.
 */

@Component  //Spring’e bu sınıfın bir bean olduğunu ve dependency injection (bağımlılık enjeksiyonu) için kullanılabileceğini söyler.
public class Utilities {
    private static MongoOperations mongoOperation; // MongoDB ile veri işlemleri yapmak için kullanılan bir Spring arayüzüdür.

    @Autowired
    public void setMongoOperation(MongoOperations mongoOperation){
        Utilities.mongoOperation=mongoOperation;
    }

    public static Long getNextSequence(String key) throws JobPortalException {
        Query query = new Query(Criteria.where("_id").is(key)); //Query: MongoDB’de bir sorgu oluşturur
        Update update = new Update();   // Update: MongoDB’de dokümanları güncellemek için kullanılır.
        update.inc("seq",1);
        FindAndModifyOptions options = new FindAndModifyOptions(); // FindAndModifyOptions: MongoDB’de bir belgeyi bulup güncellerken kullanılan ek seçenekler sağlar.
        options.returnNew(true); // Güncellenen belgenin yeni halini döndürür.
        Sequence seq = mongoOperation.findAndModify(query,update,options,Sequence.class);
        if(seq==null){
            throw new JobPortalException("Kullanıcı Sayısı Arttırılamadı! Yeni Kullanıcı Alınamadı! : " + key);
        }
        return seq.getSeq();
    }
}
