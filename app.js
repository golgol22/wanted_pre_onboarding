/**
 * 
 * 채용공고 사이트
 *
 * 사용 기술: html, css, jQuery, ajax, nodejs
 * 웹서버 실행 : 명령프롬프트에서 node app.js 실행
 * 기능: 채용공고 목록확인 및 검색, 등록, 수정, 삭제, 채용공고 상세, 채용공고 지원
 * 
 */

// Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');
var path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser');
var static = require('serve-static');

// 에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

// 클라이언트에서 ajax로 요청 시 CORS(다중 서버 접속) 지원
var cors = require('cors');

// 로그
var logger = require('morgan');

// 라우팅 모듈
var index = require('./routes/index'); // 메인페이지 
var add = require('./routes/add'); // 채용공고 추가 페이지

// 익스프레스 객체 생성
var app = express();

// 포트 설정
app.set('port', process.env.PORT || 3002);

// 뷰 엔진 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 로그
app.use(logger('dev'));

// body-parser 설정
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// public 폴더를 static으로 오픈
app.use('/public', static(path.join(__dirname, 'public')));

// 클라이언트에서 ajax로 요청 시 CORS(다중 서버 접속) 지원
app.use(cors());

// 기능별 라우팅 관리
app.use('/', index);
app.use('/add', add);

// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
	static: {
		'404': './views/404.ejs'
	}
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

// 웹서버 시작
var server = http.createServer(app).listen(app.get('port'), function () {
	console.log('### 웹 서버 시작됨 -> %s', server.address());
});