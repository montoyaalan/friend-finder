
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

/* For testing on localhost
const connection = mysql.createConnection({
    "host"              : "localhost",
    "port"              : 3306,
    "user"              : "root",
    "password"          : "",
    "database"          : "friend_finder_db",
    "multipleStatements": true
});
connection.connect(error => {
    if (error) throw error;
    console.log(`Database connected as thread ${connection.threadId}.`);
});
*/


/****************************************************************************
 ****************************************************************************
    
    Create FriendFinder object
    
*****************************************************************************
*****************************************************************************/
module.exports = function FriendFinder() {
    // Scope-safe constructor
    if (!(this instanceof FriendFinder)) {
        return new FriendFinder();
    }

    let friends;


  // Get friends from the database
  pool.query("SELECT * FROM friends", (error, results) => {
    if (error) throw error;

    friends = results.map(r => ({
        "id"       : r.id,
        "name"     : r.name,
        "photo_url": r.photo_url,
        "answers"  : JSON.parse(r.answers)
    }));
});

