const express = require('express')

// 라우터 사용하여 라우팅 함수 등록
const router = express.Router()

// db models
const models = require('../models')

// get으로 요청올 때 router에 연결
router.get('/', function(req, res) {
    let company_id = req.query.company_id
    let company_name = req.query.company_name
    let address = req.query.address
    let tel = req.query.tel
    let position = req.query.position
    let skill = req.query.skill
    let content = req.query.content
    let country = req.query.country
    let area = req.query.area
    let compensation = req.query.compensation
    let result = 0
    let company_id_data = 0

    // 등록된 회사 정보가 없는 경우
    if (company_id == -999) { 
        models.Company.create({
            company_name: company_name,
            address: address,
            tel: tel
        }).catch(function(err){
            console.log(err)
            result = 1
        })

        company_id_data = models.Company.findOne({
            attributes: ['id'],
            order: [['id', 'DESC']]
        }).catch(function(err){
            console.log(err)
            result = 1
        })
        company_id = company_id_data.getDataValue('id')
    } 

    models.Posting.create({
        country: country,
        area: area,
        position: position,
        compensation: compensation,
        content: content,
        skill: skill,
        company_id: company_id,
    }).catch(function(err){
        console.log(err)
        result = 1
    })

    res.send({result: result})
})
module.exports = router