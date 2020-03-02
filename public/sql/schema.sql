CREATE TABLE class_status (
    id serial primary key, 
    status_title text not null, 
    rank integer);
​
insert into class_status
    (status_title, rank) 
values 
    ('Awesome', 5), 
    ('Great', 4),
    ('Good', 3),
    ('Okay', 2),
    ('Poor', 1),
    ('Unranked', 0);


CREATE TABLE class_topics (
    id serial PRIMARY KEY,
    topic_name text,
    status_id integer references class_status(id)
);

insert into class_topics (topic_name) values 
    ('HTML'),
    ('CSS'),
    ('Javascript'),
    ('PostgreSQL'),
    ('Node'),
    ('Express');