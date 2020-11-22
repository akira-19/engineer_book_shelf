CREATE TABLE users
(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name varchar(30) not null,
    created_at timestamp without time zone not null,
    updated_at timestamp without time zone not null
);