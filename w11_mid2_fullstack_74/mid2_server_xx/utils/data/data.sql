CREATE TABLE card_xx (
    id int NOT NULL PRIMARY KEY,
    title varchar(255),
    descrip varchar(255),
    category varchar(255),
    img varchar(255),
    remote_url varchar(255)   
)

INSERT INTO card_xx (id, title, descrip, category, img, remote_url)
VALUES
(1, 'Seven Reasons Why Coffee Is Awesome', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'lifestyle', '/images/photo-1.jpg', ''),
(2, 'Travel To Paris', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'travel', '/images/photo-2.jpg', '')

