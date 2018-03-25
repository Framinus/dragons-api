CREATE TABLE dragons (
  id SERIAL PRIMARY KEY,
  level INTEGER,
  type VARCHAR(255),
  currenthp INTEGER,
  maxhp INTEGER,
  strength INTEGER,
  defense INTEGER,
  imageurl TEXT
);
