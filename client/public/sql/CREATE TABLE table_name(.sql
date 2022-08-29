CREATE TABLE emails(
  id SERIAL PRIMARY KEY,
  email VARCHAR(120) NOT NULL UNIQUE,
  description TEXT, 
  type_id INTEGER



);