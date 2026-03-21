/*
Task One - Write SQL Statements
*/

-- 1. Insert Tony Stark's record
INSERT INTO public.account (
    account_firstname,
    account_lastname,
    account_email,
    account_password
)
VALUES (
    'Tony',
    'Stark',
    'tony@starkent.com',
    'Iam1ronM@n'
);


--Modify Tony Stark to be Admin
UPDATE public.account
SET account_type = 'Admin'
WHERE account_email = 'tony@starkent.com';


--Delete Tony Stark's record
DELETE FROM public.account
WHERE account_email = 'tony@starkent.com';


--Modify GM Hummer description using REPLACE
UPDATE public.inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM' AND inv_model = 'Hummer';


--INNER JOIN to obtain "Sport" type vehicles
SELECT
	i.inv_make,
	i.inv_model,
	c.classification_name
FROM public.inventory i
INNER JOIN public.classification c
ON i.classification_id = c.classification_id
WHERE c.classification_name = 'Sport';


--Update image paths by adding /vehicles
UPDATE public.inventory
SET 
    inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
