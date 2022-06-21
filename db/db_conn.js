//===== MySQL 데이터베이스를 사용할 수 있도록 하는 mysql 모듈 불러오기 =====//
var mysql = require('mysql');

var pool      =    mysql.createPool({
   connectionLimit : 10, 
   host     : 'localhost',
   user     : 'wanted',
   password : 'keroro2424.',
   port     : 8888,
   database : 'employment',
   debug    :  false
});

module.exports = function() {
    return {
        init: function() {
            return pool;
        }, 
        open: function(conn) {
            conn.connect( function (err) {
                if (err) {
                    console.log(">>> mysql 연결 중 에러 발생함 - " + err);
                } else {
                    console.log("### mysql 연결 성공");
                }
            })
        }
    }
};
