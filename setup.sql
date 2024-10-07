CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    amount DECIMAL(10, 2) NOT NULL,
    type VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
