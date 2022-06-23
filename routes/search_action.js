const express = require('express')

// 라우터 사용하여 라우팅 함수 등록
const router = express.Router()

// db models
const models = require('../models')
const company = models['Company']
const { Op } = require("sequelize")

// get으로 요청올 때 router에 연결
router.get('/', function(req, res) {
    let search = req.query.search
    search = '%' + search + '%' 

    models.Posting.findAll({
        include: [{
            model: company,
            attributes: ['company_name'],
            required: true
        }],
        where: {
            [Op.or]: [
                { '$company.company_name$': { [Op.like]: search } },
                { country: { [Op.like]: search } },
                { area: { [Op.like]: search } },
                { position: { [Op.like]: search } },
                { compensation: { [Op.like]: search } },
                { content: { [Op.like]: search } },
                { skill: { [Op.like]: search } }
            ]
        },
        required: true
    }).then( result => {
        console.log(result)
        res.send({result: result}) 
    }).catch(function(err) {
        console.log(err)
    })
})
module.exports = router