CREATE TABLE dragons (
  id SERIAL PRIMARY KEY,
  type VARCHAR(255),
  level INTEGER,
  currenthp INTEGER,
  maxhp INTEGER,
  strength INTEGER,
  defense INTEGER,
  imageurl TEXT
);

CREATE TABLE humans (
  id SERIAL PRIMARY KEY,
  type VARCHAR(255),
  level INTEGER,
  currenthp INTEGER,
  maxhp INTEGER,
  strength INTEGER,
  defense INTEGER,
  imageurl TEXT
);
