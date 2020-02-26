
module.exports = function(config) {
    
    var ex = {
        };
    
    var databaseUrl = config.dbName; // "username:password@example.com/mydb"
    var collections = ["rooms", "messages", "globalProperties", "userinfo", "gcmRegistrations"];
    var mongojs = require("mongojs"); 
    ex.mongo = mongojs(databaseUrl, collections);
    
    return ex;
    
};
