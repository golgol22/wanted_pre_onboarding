
var express = require('express');

// 라우터 사용하여 라우팅 함수 등록
var router = express.Router();

// db connection
var connection = require('../db/db_conn')();
var db_conn = connection.init();

// get으로 요청올 때 router 에 연결
router.get('/', function(req, res, next) {

    // 전달할 데이터 객체 생성
    var send_data = {};

    // 커넥션 풀에서 연결 객체를 가져옴
    db_conn.getConnection(function(err, conn) {
        if (err) {
        	if (conn) {
                conn.release(); 
            }
            return;
        }
    	
        // product 데이터 SQL 문을 실행함
        conn.query('select prd_img, prd_kor, prd_eng from product limit 4', function(err, rows, columns) {
        	
        	if (err) {
        		console.log(">>> product SQL 실행 시 에러 발생함 - " + err);
        		return;
            }
            
            // 이미지 경로 지정
            for (var i = 0; i < rows.length; i++) {
                for (var keyNm in rows[i]) {
                    if (keyNm == "prd_img") {
                        rows[i][keyNm] = "/public/images/" + rows[i][keyNm];
                        console.log("img: " + rows[i][keyNm]);
                    }
                }
            }

            // 객체에 Best에 보여줄 product 데이터 추가
            send_data.product = rows;

            // product 데이터 SQL 문 실행 후 contest 데이터 SQL 문 실행
            select_contest;
        });

        // contest 데이터 SQL 문을 실행함
        var select_contest = conn.query('select cont_title, cont_review, cont_img from contest order by cont_date desc limit 4', function(err, rows, columns) {
            conn.release();

        	if (err) {
        		console.log(">>> SQL 실행 시 에러 발생함 - " + err);
        		return;
            }
            
            // 이미지 경로 지정
            for (var i = 0; i < rows.length; i++) {
                for (var keyNm in rows[i]) {
                    if (keyNm == "cont_img") {
                        rows[i][keyNm] = "/uploads/" + rows[i][keyNm];
                    }
                }
            }

            // 객체에 contest 데이터 추가
            send_data.contest = rows;

            // index.html 렌더링
            res.render('../views/index.ejs', send_data);
        });

        conn.on('error', function(err) {      
            console.log(">>> 데이터베이스 연결 시 에러 발생함 - " + err);
        });
    });
});

module.exports = router;