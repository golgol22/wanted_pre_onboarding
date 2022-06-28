/**
 * 
 * 채용공고 사이트
 *
 * 사용 기술: html, css, jQuery, ajax, nodejs(express) orm
 * 웹서버 실행 : 명령프롬프트에서 node app.js 실행
 * 기능: 채용공고 목록확인 및 검색, 등록, 수정, 삭제, 채용공고 상세, 채용공고 지원
 * 
 */

// Express 기본 모듈 불러오기
const express = require('express')
const http = require('http')
const path = require('path')

// Express의 미들웨어 불러오기
const bodyParser = require('body-parser')
const static = require('serve-static')

// 에러 핸들러 모듈 사용
const expressErrorHandler = require('express-error-handler')

// 클라이언트에서 ajax로 요청 시 CORS(다중 서버 접속) 지원
const cors = require('cors')

// mime 모듈
const mime = require('mime');

// 로그
const logger = require('morgan')

// sequelize
const { sequelize } = require('./models')

// 라우팅 모듈
const index = require('./routes/index') // 메인페이지 (공고리스트, 검색, 삭제)
const create = require('./routes/create') // 채용공고 등록 페이지
const company_search_action = require('./routes/company_search_action') // 채용공고 등록 회사 검색 처리
const reg_posting_action = require('./routes/reg_posting_action') // 채용공고 등록 처리 
const update = require('./routes/update') // 채용공고 수정 페이지
const update_action = require('./routes/update_action') // 채용공고 수정 처리
const delete_action = require('./routes/delete_action') // 채용공고 삭제 처리
const list_detail = require('./routes/list_detail') // 채용공고 상세 페이지
const apply_action = require('./routes/apply_action') // 채용공고 지원 처리
const search_action = require('./routes/search_action') // 채용공고 검색 처리


// 익스프레스 객체 생성
const app = express()

// 포트 설정
app.set('port', process.env.PORT || 3002)

// 뷰 엔진 설정
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 로그
app.use(logger('dev'))

// body-parser 설정
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// public 폴더를 static으로 오픈
app.use('/public', static(path.join(__dirname, 'public')))

// 클라이언트에서 ajax로 요청 시 CORS(다중 서버 접속) 지원
app.use(cors())

// 기능별 라우팅 관리
app.use('/', index)
app.use('/create', create)
app.use('/company_search_action', company_search_action)
app.use('/reg_posting_action', reg_posting_action)
app.use('/update', update)
app.use('/update_action', update_action)
app.use('/delete_action', delete_action)
app.use('/list_detail', list_detail)
app.use('/apply_action', apply_action)
app.use('/search_action', search_action)

// sequelize
sequelize.sync()

// 404 에러 페이지 처리
const errorHandler = expressErrorHandler({
	static: {
		'404': './views/404.ejs'
	}
})

app.use(expressErrorHandler.httpError(404))
app.use(errorHandler)

// 웹서버 시작
const server = http.createServer(app).listen(app.get('port'), function () {
	console.log('>> 웹 서버 시작 -> %s', server.address())
})