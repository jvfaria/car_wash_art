USE carwash;

INSERT INTO client VALUES (1, 'Edu', STR_TO_DATE('21,8,1995','%d,%m,%Y'), '00000000000', '31900000000', NULL, '0000000000');
INSERT INTO client VALUES (2, 'João', STR_TO_DATE('12,10,1994','%d,%m,%Y'), '11111111111', '31911111111', NULL, '1111111111');

INSERT INTO vehicle VALUES (1, 'Civic', 'Honda', 'AAA1010', 2019, 'Prata', NULL, 1);
INSERT INTO vehicle VALUES (2, 'Corolla', 'Toyota', 'BBB2020', 2020, 'Preto', NULL, 2);

INSERT INTO services VALUES (NULL, 15.00, NOW(), NOW(), NULL, 0, 'Lavagem simples', 1, 1);
INSERT INTO services VALUES (NULL, 30.00, NOW(), NOW(), NULL, 0, 'Lavagem completa', 2, 2);
