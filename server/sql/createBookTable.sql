CREATE TABLE books
(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    url text,
    year integer not null,
    review text,
    level varchar not null,
    user_id uuid REFERENCES users (id),
    created_at timestamp without time zone not null,
    updated_at timestamp without time zone not null
);
