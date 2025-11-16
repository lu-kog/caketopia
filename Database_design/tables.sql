
CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    icon_emoji VARCHAR(10),
    name VARCHAR(255) NOT NULL,
    stock FLOAT DEFAULT 0,
    unit VARCHAR(10) NOT NULL,
    price_per_unit DECIMAL(10,2) DEFAULT 0,
    low_stock_threshold FLOAT DEFAULT 0
);

ALTER TABLE inventory
ADD CONSTRAINT unit_allowed CHECK (
    unit IN ('Kg', 'Grams', 'Pcs', 'Ltr', 'Ml')
);


INSERT INTO inventory (icon_emoji, name, stock, unit, price_per_unit, low_stock_threshold)
VALUES
('🍞', 'Bread Flour', 25, 'Kg', 45.00, 5),
('🧈', 'Unsalted Butter', 8, 'Kg', 380.00, 2),
('🥚', 'Eggs', 180, 'Pcs', 6.00, 40),
('🧂', 'Salt', 3.5, 'Kg', 20.00, 1),
('🍫', 'Dark Chocolate', 900, 'Grams', 0.25, 200),
('🥛', 'Whole Milk', 12, 'Ltr', 62.00, 3),
('🍰', 'Cake Base Sponge', 40, 'Pcs', 28.00, 10),
('🍯', 'Honey', 650, 'Grams', 0.35, 150),
('🌾', 'Maida Flour', 30, 'Kg', 32.00, 5),
('🍓', 'Strawberry Essence', 45, 'Ml', 0.60, 10),
('🍋', 'Lemon Essence', 50, 'Ml', 0.55, 15),
('🧁', 'Cupcake Paper Molds', 300, 'Pcs', 1.20, 50);
