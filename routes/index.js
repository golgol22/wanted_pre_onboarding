const express = require('express')

// 라우터 사용하여 라우팅 함수 등록
const router = express.Router()

// db connection
const models = require('../models');

// get으로 요청올 때 router에 연결
router.get('/', function(req, res, next) {

    let send_data = {}
    let postings = models.Posting.findAll().then(console.log)
    send_data.postings = postings

    // index.html 렌더링
    res.render('../views/index.ejs', send_data); 
})

module.exports = router;