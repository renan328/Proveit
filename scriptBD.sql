CREATE DATABASE Proveit;
USE Proveit;

CREATE TABLE Categorias (
    idCategoria INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(255) NULL,
    Foto VARCHAR(255),
    PRIMARY KEY (idCategoria)
);

CREATE TABLE Usuarios (
    idUsuario INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    NomeTag VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Senha VARCHAR(255) NOT NULL,
	Foto LONGBLOB,
    PRIMARY KEY (idUsuario)
);

CREATE TABLE Receitas (
    idReceita INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    TempoPreparo INTEGER UNSIGNED NOT NULL,
    Tempo VARCHAR(255) NOT NULL,
    Porcoes INTEGER UNSIGNED NOT NULL,
    ValCalorico VARCHAR(255) NULL,
    Descricao VARCHAR(255) NOT NULL,
    Usuario_id INTEGER UNSIGNED NOT NULL,
    Categorias_id INTEGER UNSIGNED NULL,
    Aproveitamento BOOL NULL,
    PRIMARY KEY (idReceita),
    FOREIGN KEY (Usuario_id)
        REFERENCES Usuarios (idUsuario),
    FOREIGN KEY (Categorias_id)
        REFERENCES Categorias (idCategoria)
);

CREATE TABLE FotosReceita (
    idFoto INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    Receita_id INTEGER UNSIGNED NULL,
    Foto LONGBLOB,
    FOREIGN KEY (Receita_id)
        REFERENCES Receitas (idReceita),
    PRIMARY KEY (idFoto)
);

CREATE TABLE Passos (
    idPasso INTEGER UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Receita_id INTEGER UNSIGNED NOT NULL,
    NumPasso INTEGER UNSIGNED NOT NULL,
    PassoTexto VARCHAR(500) NOT NULL,
    FOREIGN KEY (Receita_id)
        REFERENCES Receitas (idReceita)
);
  
CREATE TABLE Ingredientes_Receita (
    idIngredientesReceita INTEGER UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255) NULL,
    Quantidade INTEGER UNSIGNED NULL,
    Medida VARCHAR(255) NULL,
    Receita_id INTEGER UNSIGNED NOT NULL,
    FOREIGN KEY (Receita_id)
        REFERENCES Receitas (idReceita)
);
  
CREATE TABLE Avaliacao (
    idAvaliacao INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    Estrelas INTEGER UNSIGNED NOT NULL,
    Comentario VARCHAR(255) NULL,
    Receita_id INTEGER UNSIGNED NULL,
    Usuario_id INTEGER UNSIGNED NULL,
    FOREIGN KEY (Usuario_id)
        REFERENCES Usuarios (idUsuario),
    FOREIGN KEY (Receita_id)
        REFERENCES Receitas (idReceita),
    PRIMARY KEY (idAvaliacao)
);

CREATE TABLE Dicas (
    idDicas INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    Titulo INTEGER UNSIGNED NULL,
    Categorias_id INTEGER UNSIGNED NULL,
    Texto_dica INTEGER UNSIGNED NULL,
    Receita_id INTEGER UNSIGNED NULL,
    Usuario_id INTEGER UNSIGNED NULL,
    Aproveitamento BOOL NULL,
    FOREIGN KEY (Usuario_id)
        REFERENCES Usuarios (idUsuario),
    FOREIGN KEY (Receita_id)
        REFERENCES Receitas (idReceita),
    FOREIGN KEY (Categorias_id)
        REFERENCES Categorias (idCategoria),
    PRIMARY KEY (idDicas)
);


CREATE TABLE Receitas_vistas (
    idReceitas_vistas INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    Receita_id INTEGER UNSIGNED NULL,
    Usuario_id INTEGER UNSIGNED NULL,
    FOREIGN KEY (Usuario_id)
        REFERENCES Usuarios (idUsuario),
    FOREIGN KEY (Receita_id)
        REFERENCES Receitas (idReceita),
    PRIMARY KEY (idReceitas_vistas)
);

CREATE TABLE Receitas_favoritas (
    idReceitas_favoritas INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    Usuarios_idUsuario INTEGER UNSIGNED NOT NULL,
    Receita_id INTEGER UNSIGNED NOT NULL,
    Usuario_id INTEGER UNSIGNED NOT NULL,
    FOREIGN KEY (Usuario_id)
        REFERENCES Usuarios (idUsuario),
    FOREIGN KEY (Receita_id)
        REFERENCES Receitas (idReceita),
    PRIMARY KEY (idReceitas_favoritas)
);

-- insert de categorias 
INSERT INTO Categorias (Nome, Foto) VALUES ( 'Salgados', '../../assets/cat_salgados.jpg'), ('Doces', '../../assets/cat_doces.jpg'), ('Japonês', '../../assets/cat_japones.jpg'), ('Carnes', '../../assets/cat_carnes.jpg'), ('Saladas', '../../assets/cat_saladas.jpg'), ('Vegano', '../../assets/cat_vegano.jpg'), ('Vegetariano', '../../assets/cat_vegetariano.jpg'), 
('Sanduíches', '../../assets/cat_sanduiches.jpg'), ('Low Carb', '../../assets/cat_lowCarb.jpg'), ('Lanches e Snacks', '../../assets/cat_snacks.jpg'), ('Sopas', '../../assets/cat_sopas.jpg'), ('Aves', '../../assets/cat_aves.jpg'), ('Frutos do mar. peixes e crustáceos', '../../assets/cat_frutosDoMar.jpg'), 
('Acompanhamentos e molhos', '../../assets/cat_molhos.jpg'), ('Massas', '../../assets/cat_massas.jpg'), ('Tortas e quiches', '../../assets/cat_torta.jpg'), ('Bebidas', '../../assets/cat_bebidas.jpg'), ('Rápidas', '../../assets/cat_rapidas.jpg'), ('Sobremesas', '../../assets/cat_sobremesa.jpg'), ('Lanches', '../../assets/cat_lanches.jpg'), ('Bolos', '../../assets/cat_bolos.jpg');

-- Selects unicos

-- SELECT Receitas.Nome , TempoPreparo,Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento FROM Receitas INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario INNER JOIN Categorias ON Categorias.idCategoria = Receitas.Categorias_id;
-- SELECT PassoTexto, NumPasso, Receita_id FROM Passos INNER JOIN Receitas on Receitas.idReceita = Passos.Receita_id WHERE Receita_id = 2;
-- SELECT Ingredientes.Nome, Quantidade, Medida FROM Ingredientes_Receita INNER JOIN Ingredientes ON Ingredientes.idIngredientes = Ingredientes_receita.Ingredientes_id INNER JOIN Receitas on Receitas.idReceita = Ingredientes_Receita.Receita_id WHERE Receita_id = 2;
-- SELECT * FROM Avaliacao INNER JOIN Receitas ON Avaliacao.Receita_id = Receitas.idReceita INNER JOIN Usuarios ON Avaliacao.Usuario_id = Usuarios.idUsuario WHERE Receita_id = 1;

-- insert padrão de receita
INSERT INTO Usuarios (Nome, NomeTag, Email, Senha) VALUES ('renan', 'renan123', 're@gamil', '123');
INSERT INTO Receitas (Nome, TempoPreparo, Tempo, Porcoes, ValCalorico, Descricao, Usuario_id, Categorias_id, Aproveitamento) VALUES ('pao e queijo', 2, "minutos", 1, 255, 'pao', 1, 1, FALSE);
INSERT INTO Passos (Receita_id, NumPasso, PassoTexto) VALUES (1, 1, 'coma o pao');
INSERT INTO Passos (Receita_id, NumPasso, PassoTexto) VALUES (1, 2, 'coma o queijo');
INSERT INTO Passos (Receita_id, NumPasso, PassoTexto) VALUES (1, 3, 'coma tudo');
INSERT INTO Ingredientes_Receita (Nome, Quantidade , Medida, Receita_id) VALUES ("Pão", 1, 'unidade', 1);
INSERT INTO Ingredientes_Receita (Nome, Quantidade , Medida, Receita_id) VALUES ("queijo", 1, 'unidade', 1);
INSERT INTO FotosReceita (Receita_id, Foto) VALUES (1, 'base64');


-- Select receitas por ingredientes
SELECT * FROM Receitas INNER JOIN Ingredientes_Receita ON Receitas.idReceita = Ingredientes_Receita.Receita_id  WHERE Nome  = "Nome" OR Nome  = "Nome"  OR Nome  = "Nome" OR Nome  = "Nome" OR Nome  = "Nome" ;

-- Select Fotos de uma receita
SELECT * FROM FotosReceita inner join Receitas on FotosReceita.Receita_id = Receitas.idReceita where idReceita = 1;

-- Select tabela unica (testes)
SELECT * FROM Usuarios;

-- Select receita single
SELECT idReceita, Receitas.Nome , TempoPreparo, Tempo, Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento,  Passos.PassoTexto, Passos.NumPasso, Passos.idPasso, Ingredientes_Receita.Nome AS NomeIngrediente, Ingredientes_Receita.Quantidade, Ingredientes_Receita.Medida, Categorias.Nome, FotosReceita.idFoto, FotosReceita.Foto FROM Receitas INNER JOIN Passos ON Passos.Receita_id = Receitas.idReceita INNER JOIN Ingredientes_Receita ON Ingredientes_Receita.Receita_id = Receitas.idReceita INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario INNER JOIN Categorias ON Categorias.idCategoria = Receitas.Categorias_id INNER JOIN FotosReceita ON FotosReceita.Receita_id = Receitas.idReceita where idReceita = 1;