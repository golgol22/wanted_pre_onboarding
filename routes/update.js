const express = require('express')

// 라우터 사용하여 라우팅 함수 등록
const router = express.Router()

// db models
const models = require('../models')
const company = models['Company']

// get으로 요청올 때 router에 연결
router.get('/', function(req, res) {
    let send_data = {}
    const postings = models.Posting.findAll({
        include: [{
            model: company,
            attributes: ['company_name'],
            required: true
        }]
    }).then( result => {
        console.log(result[0])
        console.log('>> 회사 이름: ' + result[0].getDataValue('Company').getDataValue('company_name'))
        send_data.postings = result
        res.render('../views/update.ejs', send_data) 
    }).catch(function(err) {
        console.log(err)
    })

})
module.exports = router