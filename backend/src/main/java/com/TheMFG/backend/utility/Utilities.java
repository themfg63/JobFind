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

/* sequence class'ıyla veritabanında kaç kullanıcı olduğunun sayısını tutacağımız yapıdır.
artan sıra numaralarını üretmek için kullanılacaktır.
 */
@Component
public class Utilities {
    private static MongoOperations mongoOperation;

    @Autowired
    public void setMongoOperation(MongoOperations mongoOperation){
        Utilities.mongoOperation = mongoOperation;
    }

    public static Long getNextSequence(String key) throws JobPortalException{
        Query query = new Query(Criteria.where("_id").is(key));
        Update update = new Update();
        update.inc("seq",1);
        FindAndModifyOptions options = new FindAndModifyOptions();
        options.returnNew(true);
        Sequence seq = mongoOperation.findAndModify(query,update,options, Sequence.class);
        if(seq == null){
            throw new JobPortalException("anahtar için sıra kimliği alınamıyor: " + key);
        }
        return seq.getSeq();
    }
}
