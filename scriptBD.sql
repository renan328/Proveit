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