CREATE DATABASE Proveit;
USE Proveit;

CREATE TABLE Categorias (
    idCategoria INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(255) NULL,
    Foto LONGTEXT,
    PRIMARY KEY (idCategoria)
);

CREATE TABLE Usuarios (
    idUsuario INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    NomeTag VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Senha VARCHAR(255) NOT NULL,
	Foto LONGTEXT,
    PRIMARY KEY (idUsuario)
);

CREATE TABLE Receitas (
    idReceita INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    TempoPreparo INTEGER UNSIGNED NOT NULL,
    Tempo VARCHAR(255) NOT NULL,
    Porcoes INTEGER UNSIGNED NOT NULL,
    ValCalorico VARCHAR(255) NULL,
    Descricao LONGTEXT NOT NULL,
    Usuario_id INTEGER UNSIGNED NOT NULL,
    Categoria VARCHAR(255) NOT NULL,
    Aproveitamento BOOL NULL,
	Foto LONGTEXT NOT NULL,
    PRIMARY KEY (idReceita),
    FOREIGN KEY (Usuario_id)
        REFERENCES Usuarios (idUsuario)
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
    Comentario LONGTEXT NULL,
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

CREATE TABLE ReceitasFavoritas (
    idReceitasFavoritas INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    Receita_id INTEGER UNSIGNED NOT NULL,
    Usuario_id INTEGER UNSIGNED NOT NULL,
    FOREIGN KEY (Usuario_id)
        REFERENCES Usuarios (idUsuario),
    FOREIGN KEY (Receita_id)
        REFERENCES Receitas (idReceita),
    PRIMARY KEY (idReceitasFavoritas)
);

-- SELECTS UNICOS

-- SELECT Receitas.Nome , TempoPreparo,Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento FROM Receitas INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario INNER JOIN Categorias ON Categorias.idCategoria = Receitas.Categorias_id;
-- SELECT PassoTexto, NumPasso, Receita_id FROM Passos INNER JOIN Receitas on Receitas.idReceita = Passos.Receita_id WHERE Receita_id = 2;
-- SELECT Ingredientes.Nome, Quantidade, Medida FROM Ingredientes_Receita INNER JOIN Ingredientes ON Ingredientes.idIngredientes = Ingredientes_receita.Ingredientes_id INNER JOIN Receitas on Receitas.idReceita = Ingredientes_Receita.Receita_id WHERE Receita_id = 2;
-- SELECT * FROM Avaliacao INNER JOIN Receitas ON Avaliacao.Receita_id = Receitas.idReceita INNER JOIN Usuarios ON Avaliacao.Usuario_id = Usuarios.idUsuario WHERE Receita_id = 1;

-- insert padrão de receita
/*
INSERT INTO Usuarios (Nome, NomeTag, Email, Senha) VALUES ('renan', 'renan123', 're@gamil', '123');
INSERT INTO Receitas (Nome, TempoPreparo, Tempo, Porcoes, ValCalorico, Descricao, Usuario_id, Categoria, Aproveitamento, Foto) VALUES ('pao e queijo', 2, "minutos", 1, 255, 'pao', 1, "Lanches", FALSE, "base46");
INSERT INTO Passos (Receita_id, NumPasso, PassoTexto) VALUES (1, 1, 'coma o pao');
INSERT INTO Passos (Receita_id, NumPasso, PassoTexto) VALUES (1, 2, 'coma o queijo');
INSERT INTO Passos (Receita_id, NumPasso, PassoTexto) VALUES (1, 3, 'coma tudo');
INSERT INTO Ingredientes_Receita (Nome, Quantidade , Medida, Receita_id) VALUES ("Pão", 1, 'unidade', 1);
INSERT INTO Ingredientes_Receita (Nome, Quantidade , Medida, Receita_id) VALUES ("queijo", 1, 'unidade', 1);
INSERT INTO Avaliacao (Estrelas, Comentario, Receita_id, Usuario_id) VALUES (5 ,"muito bom",1 ,1);
INSERT INTO ReceitasFavoritas (Receita_id, Usuario_id) VALUES (1, 1);
*/

-- Select receitas por ingredientes
SELECT * FROM Receitas INNER JOIN Ingredientes_Receita ON Receitas.idReceita = Ingredientes_Receita.Receita_id  WHERE Ingredientes_Receita.Nome  = "Nome" OR Ingredientes_Receita.Nome = "Nome"  OR Ingredientes_Receita.Nome = "Nome" ;

-- Select tabela unica (testes)
SELECT * FROM Usuarios where idUsuario = 2;

-- Select receita single
SELECT idReceita, Receitas.Nome , TempoPreparo, Tempo, Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento, Receitas.Foto, Passos.PassoTexto, Passos.NumPasso, Passos.idPasso, Ingredientes_Receita.idIngredientesReceita, Ingredientes_Receita.Nome AS NomeIngrediente, Ingredientes_Receita.Quantidade, Ingredientes_Receita.Medida, Categoria FROM Receitas INNER JOIN Passos ON Passos.Receita_id = Receitas.idReceita INNER JOIN Ingredientes_Receita ON Ingredientes_Receita.Receita_id = Receitas.idReceita INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario WHERE idReceita = 1;
-- Select all receitas
SELECT idReceita, Receitas.Nome , TempoPreparo, Tempo, Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento, Receitas.Foto, Passos.PassoTexto, Passos.NumPasso, Passos.idPasso, Ingredientes_Receita.idIngredientesReceita, Ingredientes_Receita.Nome AS NomeIngrediente, Ingredientes_Receita.Quantidade, Ingredientes_Receita.Medida, Categoria FROM Receitas INNER JOIN Passos ON Passos.Receita_id = Receitas.idReceita INNER JOIN Ingredientes_Receita ON Ingredientes_Receita.Receita_id = Receitas.idReceita INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario;

SELECT idAvaliacao, Estrelas, Comentario, Receita_id, Avaliacao.Usuario_id, Usuarios.Nome AS UsuarioNome, Usuarios.Foto AS UsuarioFoto FROM Avaliacao INNER JOIN Receitas ON Avaliacao.Receita_id = Receitas.idReceita INNER JOIN Usuarios ON Avaliacao.Usuario_id = Usuarios.idUsuario WHERE Receita_id = 1;
-- Select Receitas favoritas por usuário
SELECT Receita_id FROM ReceitasFavoritas WHERE Usuario_id = 1;