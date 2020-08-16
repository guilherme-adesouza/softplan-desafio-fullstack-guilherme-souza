CREATE TABLE users_has_tasks (
    id SERIAL PRIMARY KEY,
    users_id INTEGER NOT NULL REFERENCES users(id),
    tasks_id INTEGER NOT NULL REFERENCES tasks(id),
    overview TEXT
)