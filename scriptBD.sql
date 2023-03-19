CREATE DATABASE Proveit;
USE Proveit;


CREATE TABLE Ingredientes (
    idIngredientes INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(255) NULL,
    PRIMARY KEY (idIngredientes)
);

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
    Categorias_id INTEGER UNSIGNED NOT NULL,
    PRIMARY KEY (idUsuario),
    FOREIGN KEY (Categorias_id)
        REFERENCES Categorias (idCategoria)
);

CREATE TABLE Receitas (
    idReceita INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    TempoPreparo INTEGER UNSIGNED NOT NULL,
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
    Quantidade INTEGER UNSIGNED NULL,
    Medida VARCHAR(255) NULL,
    Receita_id INTEGER UNSIGNED NOT NULL,
    Ingredientes_id INTEGER UNSIGNED NOT NULL,
    FOREIGN KEY (Receita_id)
        REFERENCES Receitas (idReceita),
    FOREIGN KEY (Ingredientes_id)
        REFERENCES Ingredientes (idIngredientes)
);
  
CREATE TABLE Avaliacoes (
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

CREATE TABLE Usuario_Categorias (
    Usuarios_idUsuario INTEGER UNSIGNED NOT NULL,
    Categorias_idCategoria INTEGER UNSIGNED NOT NULL,
    FOREIGN KEY (Usuarios_idUsuario)
        REFERENCES Usuarios (idUsuario),
    FOREIGN KEY (Categorias_idCategoria)
        REFERENCES Categorias (idCategoria)
);

CREATE TABLE Usuarios_has_Dicas (
    Usuarios_idUsuario INTEGER UNSIGNED NOT NULL,
    Dicas_idDicas INTEGER UNSIGNED NOT NULL,
    FOREIGN KEY (Usuarios_idUsuario)
        REFERENCES Usuarios (idUsuario),
    FOREIGN KEY (Dicas_idDicas)
        REFERENCES Dicas (idDicas)
);

CREATE TABLE Usuarios_has_Avaliacoes (
    Usuarios_idUsuario INTEGER UNSIGNED NOT NULL,
    Avaliacoes_idAvaliacoes INTEGER UNSIGNED NOT NULL,
    FOREIGN KEY (Usuarios_idUsuario)
        REFERENCES Usuarios (idUsuario),
    FOREIGN KEY (Avaliacoes_idAvaliacoes)
        REFERENCES Avaliacoes (idAvaliacao)
);

CREATE TABLE Receitas_has_Avaliacoes (
    Receitas_idReceita INTEGER UNSIGNED NOT NULL,
    Avaliacoes_idAvaliacoes INTEGER UNSIGNED NOT NULL,
    FOREIGN KEY (Avaliacoes_idAvaliacoes)
        REFERENCES Avaliacoes (idAvaliacao),
    FOREIGN KEY (Receitas_idReceita)
        REFERENCES Receitas (idReceita)
);

CREATE TABLE Dicas_has_Categorias (
    Dicas_idDicas INTEGER UNSIGNED NOT NULL,
    Categorias_idCategoria INTEGER UNSIGNED NOT NULL,
    FOREIGN KEY (Dicas_idDicas)
        REFERENCES Dicas (idDicas),
    FOREIGN KEY (Categorias_idCategoria)
        REFERENCES Categorias (idCategoria)
);

CREATE TABLE Receitas_has_Categorias (
    Receitas_idReceita INTEGER UNSIGNED NOT NULL,
    Categorias_idCategoria INTEGER UNSIGNED NOT NULL,
    FOREIGN KEY (Receitas_idReceita)
        REFERENCES Receitas (idReceita),
    FOREIGN KEY (Categorias_idCategoria)
        REFERENCES Categorias (idCategoria)
);

CREATE TABLE Receitas_has_Ingredientes (
    Receitas_idReceita INTEGER UNSIGNED NOT NULL,
    Ingredientes_idIngredientes INTEGER UNSIGNED NOT NULL,
    FOREIGN KEY (Receitas_idReceita)
        REFERENCES Receitas (idReceita),
    FOREIGN KEY (Ingredientes_idIngredientes)
        REFERENCES Ingredientes (idIngredientes)
);

CREATE TABLE Receitas_has_Dicas (
    Receitas_idReceita INTEGER UNSIGNED NOT NULL,
    Dicas_idDicas INTEGER UNSIGNED NOT NULL,
    FOREIGN KEY (Receitas_idReceita)
        REFERENCES Receitas (idReceita),
    FOREIGN KEY (Dicas_idDicas)
        REFERENCES Dicas (idDicas)
);

INSERT INTO Categorias (Nome, Foto) VALUES ( 'Salgados', '../../assets/cat_salgados.jpg'), ('Doces', '../../assets/cat_doces.jpg'), ('Japonês', '../../assets/cat_japones.jpg'), ('Carnes', '../../assets/cat_carnes.jpg'), ('Saladas', '../../assets/cat_saladas.jpg'), ('Vegano', '../../assets/cat_vegano.jpg'), ('Vegetariano', '../../assets/cat_vegetariano.jpg'), 
('Sanduíches', '../../assets/cat_sanduiches.jpg'), ('Low Carb', '../../assets/cat_lowCarb.jpg'), ('Lanches e Snacks', '../../assets/cat_snacks.jpg'), ('Sopas', '../../assets/cat_sopas.jpg'), ('Aves', '../../assets/cat_aves.jpg'), ('Frutos do mar. peixes e crustáceos', '../../assets/cat_frutosDoMar.jpg'), 
('Acompanhamentos e molhos', '../../assets/cat_molhos.jpg'), ('Massas', '../../assets/cat_massas.jpg'), ('Tortas e quiches', '../../assets/cat_torta.jpg'), ('Bebidas', '../../assets/cat_bebidas.jpg'), ('Rápidas', '../../assets/cat_rapidas.jpg'), ('Sobremesas', '../../assets/cat_sobremesa.jpg'), ('Lanches', '../../assets/cat_lanches.jpg'), ('Bolos', '../../assets/cat_bolos.jpg');


-- SELECT Receitas.Nome , TempoPreparo,Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento FROM Receitas INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario INNER JOIN Categorias ON Categorias.idCategoria = Receitas.Categorias_id;
-- SELECT PassoTexto, NumPasso, Receita_id FROM Passos INNER JOIN Receitas on Receitas.idReceita = Passos.Receita_id WHERE Receita_id = 2;
-- SELECT Ingredientes.Nome, Quantidade, Medida FROM Ingredientes_Receita INNER JOIN Ingredientes ON Ingredientes.idIngredientes = Ingredientes_receita.Ingredientes_id INNER JOIN Receitas on Receitas.idReceita = Ingredientes_Receita.Receita_id WHERE Receita_id = 2;

insert into Ingredientes (Nome) values ('pao'), ('queijo');
insert into Usuarios (Nome, NomeTag, Email, Senha, Categorias_id) values ('renan', 'renan123', 're@gamil', '123', 1);
insert into Receitas (Nome, TempoPreparo, Porcoes, ValCalorico, Descricao, Usuario_id, Categorias_id, Aproveitamento) values ('pao e queijo', 2, 1, 255, 'pao', 1, 1, false);
insert into Passos (Receita_id, NumPasso, PassoTexto) values (1, 1, 'coma o pao');
insert into Passos (Receita_id, NumPasso, PassoTexto) values (1, 2, 'coma o quijo');
insert into Passos (Receita_id, NumPasso, PassoTexto) values (1, 3, 'coma tudo');
insert into Ingredientes_Receita (Quantidade , Medida, Receita_id, Ingredientes_id) values (1, 'unidade', 1, 3);
insert into Ingredientes_Receita (Quantidade , Medida, Receita_id, Ingredientes_id) values (1, 'unidade', 1, 4);
select * from Receitas where idReceita = 1;
select * from Ingredientes ;
SELECT idReceita, Receitas.Nome , TempoPreparo,Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento,  Passos.PassoTexto, Passos.NumPasso, Passos.idPasso, Ingredientes.Nome AS NomeIngrediente, Ingredientes_Receita.Quantidade, Ingredientes_Receita.Medida, Ingredientes_Receita.Ingredientes_id, Categorias.Nome FROM Receitas INNER JOIN Passos ON Passos.Receita_id = Receitas.idReceita INNER JOIN Ingredientes_Receita ON Ingredientes_Receita.Receita_id = Receitas.idReceita INNER JOIN Ingredientes ON Ingredientes.idIngredientes = Ingredientes_Receita.Ingredientes_id INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario INNER JOIN Categorias ON Categorias.idCategoria = Receitas.Categorias_id where idReceita = 1;
            