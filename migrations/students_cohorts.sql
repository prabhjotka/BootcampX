CREATE TABLE cohorts(id SERIAL PRIMARY KEY NOT NULL,name varchar(255) NOT NULL,start_date DATE ,end_date DATE);

CREATE TABLE students(id SERIAL PRIMARY KEY NOT NUll,name varchar(255) NOT NULL,email varchar(255),phone VARCHAR(32),github VARCHAR(255),start_date DATE,end_date DATE,cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE); 