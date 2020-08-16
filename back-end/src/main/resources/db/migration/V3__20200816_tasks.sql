CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(400),
    description TEXT,
    status VARCHAR(3) DEFAULT 'OP'
)