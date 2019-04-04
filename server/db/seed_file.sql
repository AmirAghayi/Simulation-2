CREATE TABLE houses(
    id serial PRIMARY KEY,
    property_name VARCHAR(25),
    address VARCHAR (25),
    city TEXT,
    state TEXT,
    zip INTEGER,
    image TEXT,
    monthly_mortgage_amount INTEGER,
    desired_rent INTEGER
)