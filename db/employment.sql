drop database employment;
create database employment;
use Employment;

-- 회사
CREATE TABLE company (
	company_id int not null auto_increment,
	country varchar(100) not null, 
    area varchar(100) not null, 
    primary key(company_id)
);

-- 채용공고 
CREATE TABLE job_posting (
	job_posting_id int not null auto_increment,
    company_id int not null, 
    position varchar(100) not null, 
    compensation int not null, 
    content text not null,
    skill varchar(100) not null,
    primary key(job_posting_id),
	constraint job_posting_company_id FOREIGN KEY (company_id)
    REFERENCES company(company_id) on update cascade on delete cascade
);