const express = require('express')

// 라우터 사용하여 라우팅 함수 등록
const router = express.Router()

// db models
const models = require('../models')

// get으로 요청올 때 router에 연결
router.get('/', function(req, res) {

    // create.html 렌더링
    res.render('../views/create.ejs')
})
module.exports = router