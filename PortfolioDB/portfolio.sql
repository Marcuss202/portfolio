use portfolio;


ALTER TABLE personal_projects
ADD COLUMN orderNumber INT;
ALTER TABLE personal_projects
ALTER COLUMN orderNumber SET DEFAULT 0;

