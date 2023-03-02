CREATE DATABASE Proveit;
USE Proveit;


CREATE TABLE Ingredientes (
  idIngredientes INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Nome VARCHAR(255) NULL,
  Quantidade INTEGER UNSIGNED NULL,
  Medida VARCHAR(255) NULL,
  PRIMARY KEY(idIngredientes)
);

CREATE TABLE Usuarios (
  idUsuario INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Nome VARCHAR(255) NOT NULL,
  NomeTag VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  Senha INTEGER UNSIGNED NOT NULL,
  Categorias_id INTEGER UNSIGNED NOT NULL,
  Foto BLOB NULL,
  Receitas_id INTEGER UNSIGNED NULL,
  PRIMARY KEY(idUsuario)
);

CREATE TABLE Dicas (
  idDicas INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Titulo INTEGER UNSIGNED NULL,
  Categoria_id INTEGER UNSIGNED NULL,
  Texto_dica INTEGER UNSIGNED NULL,
  Receita_id INTEGER UNSIGNED NULL,
  Usuario_id INTEGER UNSIGNED NULL,
  Aproveitamento BOOL NULL,
  PRIMARY KEY(idDicas)
);

CREATE TABLE Avaliacoes (
  idAvaliacoes INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Estrelas INTEGER UNSIGNED NOT NULL,
  Comentario VARCHAR(255) NULL,
  Receita_id INTEGER UNSIGNED NULL,
  Usuario_id INTEGER UNSIGNED NULL,
  PRIMARY KEY(idAvaliacoes)
);

CREATE TABLE Categorias (
  idCategoria INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Nome VARCHAR(255) NULL,
  Foto BLOB NULL,
  PRIMARY KEY(idCategoria)
);

CREATE TABLE Receitas_vistas (
  idReceitas_vistas INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Usuarios_idUsuario INTEGER UNSIGNED NOT NULL,
  Receita_id INTEGER UNSIGNED NULL,
  Usuario_id INTEGER UNSIGNED NULL,
  PRIMARY KEY(idReceitas_vistas, Usuarios_idUsuario),
  INDEX Receitas_vistas_FKIndex1(Usuarios_idUsuario)
);

CREATE TABLE Receitas_favoritas (
  idReceitas_favoritas INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Usuarios_idUsuario INTEGER UNSIGNED NOT NULL,
  Receita_id INTEGER UNSIGNED NOT NULL,
  Usuario_id INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(idReceitas_favoritas, Usuarios_idUsuario),
  INDEX Receitas_favoritas_FKIndex1(Usuarios_idUsuario)
);

CREATE TABLE Receitas (
  idReceita INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Usuarios_idUsuario INTEGER UNSIGNED NOT NULL,
  Foto BLOB NOT NULL,
  Nome INTEGER UNSIGNED NOT NULL,
  Categorias_id INTEGER UNSIGNED NOT NULL,
  TempoPreparo INTEGER UNSIGNED NOT NULL,
  Porcoes INTEGER UNSIGNED NOT NULL,
  ValCaolorico VARCHAR(255) NULL,
  Passo LONGTEXT NOT NULL,
  Descricao VARCHAR(255) NOT NULL,
  Usuario_id INTEGER UNSIGNED NOT NULL,
  Ingredientes_id INTEGER UNSIGNED NOT NULL,
  Categoria_id INTEGER UNSIGNED NULL,
  Avaliacao_id INTEGER UNSIGNED NULL,
  Aproveitamento BOOL NULL,
  PRIMARY KEY(idReceita),
  INDEX Receitas_FKIndex1(Usuarios_idUsuario)
);

CREATE TABLE Usuario_Categorias (
  Usuarios_idUsuario INTEGER UNSIGNED NOT NULL,
  Categorias_idCategoria INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(Usuarios_idUsuario, Categorias_idCategoria),
  INDEX Usuario_has_Categoria_FKIndex1(Usuarios_idUsuario),
  INDEX Usuario_has_Categoria_FKIndex2(Categorias_idCategoria)
);

CREATE TABLE Usuarios_has_Dicas (
  Usuarios_idUsuario INTEGER UNSIGNED NOT NULL,
  Dicas_idDicas INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(Usuarios_idUsuario, Dicas_idDicas),
  INDEX Usuarios_has_Dicas_FKIndex1(Usuarios_idUsuario),
  INDEX Usuarios_has_Dicas_FKIndex2(Dicas_idDicas)
);

CREATE TABLE Usuarios_has_Avaliacoes (
  Usuarios_idUsuario INTEGER UNSIGNED NOT NULL,
  Avaliacoes_idAvaliacoes INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(Usuarios_idUsuario, Avaliacoes_idAvaliacoes),
  INDEX Usuarios_has_Avaliacoes_FKIndex1(Usuarios_idUsuario),
  INDEX Usuarios_has_Avaliacoes_FKIndex2(Avaliacoes_idAvaliacoes)
);

CREATE TABLE Receitas_has_Avaliacoes (
  Receitas_idReceita INTEGER UNSIGNED NOT NULL,
  Avaliacoes_idAvaliacoes INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(Receitas_idReceita, Avaliacoes_idAvaliacoes),
  INDEX Receitas_has_Avaliacoes_FKIndex1(Receitas_idReceita),
  INDEX Receitas_has_Avaliacoes_FKIndex2(Avaliacoes_idAvaliacoes)
);

CREATE TABLE Dicas_has_Categorias (
  Dicas_idDicas INTEGER UNSIGNED NOT NULL,
  Categorias_idCategoria INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(Dicas_idDicas, Categorias_idCategoria),
  INDEX Dicas_has_Categorias_FKIndex1(Dicas_idDicas),
  INDEX Dicas_has_Categorias_FKIndex2(Categorias_idCategoria)
);

CREATE TABLE Receitas_has_Categorias (
  Receitas_idReceita INTEGER UNSIGNED NOT NULL,
  Categorias_idCategoria INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(Receitas_idReceita, Categorias_idCategoria),
  INDEX Receitas_has_Categorias_FKIndex1(Receitas_idReceita),
  INDEX Receitas_has_Categorias_FKIndex2(Categorias_idCategoria)
);

CREATE TABLE Receitas_has_Ingredientes (
  Receitas_idReceita INTEGER UNSIGNED NOT NULL,
  Ingredientes_idIngredientes INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(Receitas_idReceita, Ingredientes_idIngredientes),
  INDEX Receitas_has_Ingredientes_FKIndex1(Receitas_idReceita),
  INDEX Receitas_has_Ingredientes_FKIndex2(Ingredientes_idIngredientes)
);

CREATE TABLE Receitas_has_Dicas (
  Receitas_idReceita INTEGER UNSIGNED NOT NULL,
  Dicas_idDicas INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(Receitas_idReceita, Dicas_idDicas),
  INDEX Receitas_has_Dicas_FKIndex1(Receitas_idReceita),
  INDEX Receitas_has_Dicas_FKIndex2(Dicas_idDicas)
);

