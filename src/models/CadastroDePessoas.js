'use strict';
module.exports = (sequelize, DataTypes) => {
  const PessoaFisica = sequelize.define('PessoasFisicas', {
    cpf: { type: DataTypes.INTEGER, primaryKey: true },
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    dataDeNascimento: DataTypes.DATE
  });
  return PessoaFisica;
};
