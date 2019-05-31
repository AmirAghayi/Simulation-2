INSERT INTO houses 
(property_name, address, city, state, zip,image, monthly_mortgage_amount, desired_rent)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8);



-- ALTER TABLE houses
--      ADD COLUMN bedrooms TEXT;

-- ALTER TABLE houses
--      ADD COLUMN property-type VARCHAR(25);



-- ALTER TABLE houses
--     ALTER bedrooms
--     SET DATA TYPE INT;


-- ALTER TABLE houses
--     DROP COLUMN desired_rent;



-- ALTER TABLE houses
--     RENAME COLUMN zip
--      TO zipcode;



-- ALTER TABLE houses
--     RENAME TO properties;
