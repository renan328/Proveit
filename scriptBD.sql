CREATE DATABASE Proveit;
USE Proveit;


CREATE TABLE Ingredientes (
  idIngredientes INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Nome VARCHAR(255) NULL,
  PRIMARY KEY(idIngredientes)
);

CREATE TABLE Categorias (
  idCategoria INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Nome VARCHAR(255) NULL,
  Foto BLOB,
  PRIMARY KEY(idCategoria)
);

CREATE TABLE Usuarios (
  idUsuario INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Nome VARCHAR(255) NOT NULL,
  NomeTag VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  Senha VARCHAR(255) NOT NULL,
  Categorias_id INTEGER UNSIGNED NOT NULL,
  -- Foto BLOB NULL,
  PRIMARY KEY(idUsuario),
  FOREIGN KEY (Categorias_id) REFERENCES Categorias(idCategoria)
);

CREATE TABLE Receitas (
  idReceita INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  -- Foto BLOB NULL,
  Nome VARCHAR(255) NOT NULL,
  TempoPreparo INTEGER UNSIGNED NOT NULL,
  Porcoes INTEGER UNSIGNED NOT NULL,
  ValCalorico VARCHAR(255) NULL,
  Descricao VARCHAR(255) NOT NULL,
  Usuario_id INTEGER UNSIGNED NOT NULL,
  Categorias_id INTEGER UNSIGNED NULL,
  Aproveitamento BOOL NULL,
  PRIMARY KEY(idReceita),
  FOREIGN KEY (Usuario_id) REFERENCES Usuarios(idUsuario),
  FOREIGN KEY (Categorias_id) REFERENCES Categorias(idCategoria)
  );
  
  CREATE TABLE Passos(
	idPasso INTEGER UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Receita_id INTEGER UNSIGNED NOT NULL,
    NumPasso INTEGER UNSIGNED NOT NULL,
    PassoTexto VARCHAR(500) NOT NULL,
    FOREIGN KEY (Receita_id) REFERENCES Receitas(idReceita)
  );
  
  CREATE TABLE Ingredientes_Receita(
	idIngredientesReceita INTEGER UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Quantidade INTEGER UNSIGNED NULL,
	Medida VARCHAR(255) NULL,
	Receita_id INTEGER UNSIGNED NOT NULL,
	Ingredientes_id INTEGER UNSIGNED NOT NULL,
	FOREIGN KEY (Receita_id) REFERENCES Receitas(idReceita),	
	FOREIGN KEY (Ingredientes_id) REFERENCES Ingredientes(idIngredientes)
  );
  
  CREATE TABLE Avaliacoes (
  idAvaliacao INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Estrelas INTEGER UNSIGNED NOT NULL,
  Comentario VARCHAR(255) NULL,
  Receita_id INTEGER UNSIGNED NULL,
  Usuario_id INTEGER UNSIGNED NULL,  
  FOREIGN KEY (Usuario_id) REFERENCES Usuarios(idUsuario),
  FOREIGN KEY (Receita_id) REFERENCES Receitas(idReceita),
  PRIMARY KEY(idAvaliacao)
);

CREATE TABLE Dicas (
  idDicas INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Titulo INTEGER UNSIGNED NULL,
  Categorias_id INTEGER UNSIGNED NULL,
  Texto_dica INTEGER UNSIGNED NULL,
  Receita_id INTEGER UNSIGNED NULL,
  Usuario_id INTEGER UNSIGNED NULL,
  Aproveitamento BOOL NULL,
  FOREIGN KEY (Usuario_id) REFERENCES Usuarios(idUsuario),
  FOREIGN KEY (Receita_id) REFERENCES Receitas(idReceita),
  FOREIGN KEY (Categorias_id) REFERENCES Categorias(idCategoria),
  PRIMARY KEY(idDicas)
);


CREATE TABLE Receitas_vistas (
  idReceitas_vistas INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Receita_id INTEGER UNSIGNED NULL,
  Usuario_id INTEGER UNSIGNED NULL,
  FOREIGN KEY (Usuario_id) REFERENCES Usuarios(idUsuario),
  FOREIGN KEY (Receita_id) REFERENCES Receitas(idReceita),
  PRIMARY KEY(idReceitas_vistas)
);

CREATE TABLE Receitas_favoritas (
  idReceitas_favoritas INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Usuarios_idUsuario INTEGER UNSIGNED NOT NULL,
  Receita_id INTEGER UNSIGNED NOT NULL,
  Usuario_id INTEGER UNSIGNED NOT NULL,
  FOREIGN KEY (Usuario_id) REFERENCES Usuarios(idUsuario),
  FOREIGN KEY (Receita_id) REFERENCES Receitas(idReceita),
  PRIMARY KEY(idReceitas_favoritas)
);

CREATE TABLE Usuario_Categorias (
  Usuarios_idUsuario INTEGER UNSIGNED NOT NULL,
  Categorias_idCategoria INTEGER UNSIGNED NOT NULL,
  FOREIGN KEY (Usuarios_idUsuario) REFERENCES Usuarios(idUsuario),
  FOREIGN KEY (Categorias_idCategoria) REFERENCES Categorias(idCategoria)
);

CREATE TABLE Usuarios_has_Dicas (
  Usuarios_idUsuario INTEGER UNSIGNED NOT NULL,
  Dicas_idDicas INTEGER UNSIGNED NOT NULL,
  FOREIGN KEY (Usuarios_idUsuario) REFERENCES Usuarios(idUsuario), 
  FOREIGN KEY (Dicas_idDicas) REFERENCES Dicas(idDicas)
);

CREATE TABLE Usuarios_has_Avaliacoes (
  Usuarios_idUsuario INTEGER UNSIGNED NOT NULL,
  Avaliacoes_idAvaliacoes INTEGER UNSIGNED NOT NULL,
  FOREIGN KEY (Usuarios_idUsuario) REFERENCES Usuarios(idUsuario), 
  FOREIGN KEY (Avaliacoes_idAvaliacoes) REFERENCES Avaliacoes(idAvaliacao) 
);

CREATE TABLE Receitas_has_Avaliacoes (
  Receitas_idReceita INTEGER UNSIGNED NOT NULL,
  Avaliacoes_idAvaliacoes INTEGER UNSIGNED NOT NULL,
  FOREIGN KEY (Avaliacoes_idAvaliacoes) REFERENCES Avaliacoes(idAvaliacao),
  FOREIGN KEY (Receitas_idReceita) REFERENCES Receitas(idReceita)
);

CREATE TABLE Dicas_has_Categorias (
  Dicas_idDicas INTEGER UNSIGNED NOT NULL,
  Categorias_idCategoria INTEGER UNSIGNED NOT NULL,
  FOREIGN KEY (Dicas_idDicas) REFERENCES Dicas(idDicas),
  FOREIGN KEY (Categorias_idCategoria) REFERENCES Categorias(idCategoria)
);

CREATE TABLE Receitas_has_Categorias (
  Receitas_idReceita INTEGER UNSIGNED NOT NULL,
  Categorias_idCategoria INTEGER UNSIGNED NOT NULL,
  FOREIGN KEY (Receitas_idReceita) REFERENCES Receitas(idReceita),
  FOREIGN KEY (Categorias_idCategoria) REFERENCES Categorias(idCategoria)
);

CREATE TABLE Receitas_has_Ingredientes (
  Receitas_idReceita INTEGER UNSIGNED NOT NULL,
  Ingredientes_idIngredientes INTEGER UNSIGNED NOT NULL,
  FOREIGN KEY (Receitas_idReceita) REFERENCES Receitas(idReceita),
  FOREIGN KEY (Ingredientes_idIngredientes) REFERENCES Ingredientes(idIngredientes)
);

CREATE TABLE Receitas_has_Dicas (
  Receitas_idReceita INTEGER UNSIGNED NOT NULL,
  Dicas_idDicas INTEGER UNSIGNED NOT NULL,
  FOREIGN KEY (Receitas_idReceita) REFERENCES Receitas(idReceita), 
  FOREIGN KEY (Dicas_idDicas) REFERENCES Dicas(idDicas)
);

SELECT Receitas.Nome , TempoPreparo,Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento FROM Receitas INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario INNER JOIN Categorias ON Categorias.idCategoria = Receitas.Categorias_id;
SELECT PassoTexto, NumPasso FROM Passos INNER JOIN Receitas on Receitas.idReceita = Passos.Receita_id;
SELECT Ingredientes.Nome, Quantidade, Medida FROM Ingredientes_Receita INNER JOIN Ingredientes ON Ingredientes.idIngredientes = Ingredientes_receita.Ingredientes_id INNER JOIN Receitas on Receitas.idReceita = Ingredientes_Receita.Receita_id;

INSERT INTO Categorias (Nome) VALUES ( 'Salgados'), ('Doces'), ('Japonês'), ('Carnes'), ('Saladas'), ('Vegano'), ('Vegetariano'), ('Sanduíches'), ('Low Carb'), ('Lanches e Snacks'), ('Sopas'), ('Aves'), ('Frutos do mar. peixes e crustáceos'), ('Acompanhamentos e molhos'), ('Massas'), ('Tortas e quiches'), ('Bebidas'), ('Rápidas'), ('Sobremesas'), ('Lanches'), ('Bolos');
