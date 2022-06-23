const express = require('express')

// 라우터 사용하여 라우팅 함수 등록
const router = express.Router()

// db models
const models = require('../models')
const company = models['Company']
const { Op } = require("sequelize")

// get으로 요청올 때 router에 연결
router.get('/', async(req, res) => {
    let send_data = {}
    let id = req.query.id 
    let company_id = -1

    // 채용 공고 상세 
    const detail_posting = await models.Posting.findOne({
        include: [{
            model: company,
            attributes: ['company_name', 'address', 'tel'],
            required: true
        }], 
        where: {
            id: id 
        }
    }).catch(function(err) {
        console.log(err)
    })

    send_data.detail_posting = detail_posting
    company_id = detail_posting.company_id
    console.log('>> ' + company_id)

    // 회사에서 채용중인 다른 채용 공고
    const postings = await models.Posting.findAll({
        include: [{
            model: company,
            attributes: ['company_name'],
            required: true
        }], 
        where: {
            [Op.and]: [
                { id: {[Op.not]: id} },
                { company_id: company_id }
            ]
        }
    }).catch(function(err) {
        console.log(err)
    })

    send_data.postings = postings
    res.render('../views/list_detail.ejs', send_data) 
})
module.exports = router