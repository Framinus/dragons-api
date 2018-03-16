CREATE TABLE dragons (
  id SERIAL PRIMARY KEY,
  type VARCHAR(255),
  currentHP INTEGER,
  maxHP INTEGER,
  strength INTEGER,
  defense INTEGER,
  imageUrl TEXT
);
