# wanted_pre_onboarding

## **실행**
```
node app.js 
```

```
http://127.0.0.1:3002/
```


## **툴**
html, css, js, jquery, ajax, nodejs(express), orm


## **기능**
### 채용공고 목록
![select](https://user-images.githubusercontent.com/94504613/176138080-ed7008b5-f258-4fda-be8b-4810661e5cfd.png)

#### 채용공고 등록 
- 등록된 회사 정보가 있는 경우  
![add](https://user-images.githubusercontent.com/94504613/176138345-283384f5-c712-4f44-89ae-0e4f35248c8b.png)

- 등록된 회사 정보가 없는 경우  
![add2](https://user-images.githubusercontent.com/94504613/176138457-ca112bab-9fd4-4390-a1ff-870395d4c7f6.png)

#### 채용공고 수정
목록의 수정버튼 클릭  
![update](https://user-images.githubusercontent.com/94504613/176138620-1c7e8c16-9058-4c9d-ab4d-9819d52b5e10.png)

#### 채용공고 삭제
목록의 삭제버튼 클릭  
![delete](https://user-images.githubusercontent.com/94504613/176139152-65b91e3f-4df4-43e1-bb5a-6d3c515e6eae.png)

#### 채용공고 상세보기 (보고 있는 회사의 다른 공고 보기)
![detail](https://user-images.githubusercontent.com/94504613/176139403-208817e1-f01a-427f-8f74-fd891fe4aa62.png)

#### 채용공고 지원하기 
상세페이지에서 지원하기 버튼 클릭하면 사용자id 입력하여 지원  
![apply](https://user-images.githubusercontent.com/94504613/176139631-5e0dcdf2-74d0-425c-a00d-7a6f5f7b22ba.png)
![apply2](https://user-images.githubusercontent.com/94504613/176139781-52c549c3-e351-4e4a-a7db-a1900f8d880d.png)

#### 채용공고 검색
- 회사이름으로 검색  
![search_company_name](https://user-images.githubusercontent.com/94504613/176140551-677b2ad9-4349-452f-be70-d723ec49e677.png)

- 직무로 검색  
![search_position](https://user-images.githubusercontent.com/94504613/176140635-a88ed23a-11e5-43bd-ae2f-c4c7115fde2f.png)

- 기술로 검색  
![search_skill](https://user-images.githubusercontent.com/94504613/176140682-0156d7c9-9af0-4b1b-af9e-fdfe6edc4200.png)

- 근무 지역으로 검색  
![search_work_loc](https://user-images.githubusercontent.com/94504613/176140845-d44fc0cb-4126-43c3-9085-201b1484d6ef.png)

- 근무 나라로 검색  
![search_country](https://user-images.githubusercontent.com/94504613/176140726-9efe5fd3-109a-49a1-bb07-085c6bf8d52b.png)

- 검색결과 데이터가 없을 경우  
![search_no_data](https://user-images.githubusercontent.com/94504613/176140895-8d2d59fe-61f5-4d57-b1e4-05ab29202fbe.png)


## route 설명
- index: 메인페이지 
- create: 채용공고 등록 페이지 
- company_search_action: 채용공고 등록 회사 검색 처리
- reg_posting_action: 채용공고 등록 처리
- update: 채용공고 수정 페이지
- update_action: 채용공고 수정 처리
- delete_action: 채용공고 삭제 처리
- list_detail: 채용공고 상세 페이지
- apply_action: 채용공고 지원 처리
- search_action: 채용공고 검색 처리