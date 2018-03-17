CREATE TABLE dragons (
  id SERIAL PRIMARY KEY,
  level INTEGER,
  type VARCHAR(255),
  currentHP INTEGER,
  maxHP INTEGER,
  strength INTEGER,
  defense INTEGER,
  imageUrl TEXT
);
