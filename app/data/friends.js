
/****************************************************************************
 ****************************************************************************
    
    Initialize
    
*****************************************************************************
*****************************************************************************/
const mysql = require("mysql");

// Connect to MySQL
const pool = mysql.createPool({
    "connectionLimit"   : 10,
    "host"              : "ysp9sse09kl0tzxj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "port"              : 3306,
    "user"              : "l7g2iikw6shnok4f",
    "password"          : "atw1sx49swurflkj",
    "database"          : "yfpdqkylr03ge45y",
    "multipleStatements": true
});