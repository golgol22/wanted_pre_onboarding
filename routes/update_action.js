const express = require('express')

// 라우터 사용하여 라우팅 함수 등록
const router = express.Router()

// db models
const models = require('../models')

// get으로 요청올 때 router에 연결
router.get('/', function(req, res) {
    let company_name = req.query.company_name
    models.Company.findOne({
        attributes: ['id'],
        where: {
            company_name: company_name
        }
    }).then( result => {
        if (result != null) {
            res.send({result: result.getDataValue('id')})
        } else {
            res.send({result: -1})
        }
        
    }).catch(function(err) {
        console.log(err)
    })
})
module.exports = router