module.exports = (sequelize, DataTypes) => {
  const PessoaFisica = sequelize.define(
    'PessoasFisicas',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      cpf: DataTypes.STRING,
      nome: DataTypes.STRING,
      telefone: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      dataDeNascimento: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return PessoaFisica;
};

// {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   cpf: DataTypes.STRING,
//   nome: DataTypes.STRING,
//   telefone: DataTypes.STRING,
//   email: DataTypes.STRING,
//   senha: DataTypes.STRING,
//   dataDeNascimento: DataTypes.STRING,
//   dataDeCriacao: { type: DataTypes.DATE, defaultValue: Date.now() },
//   dataDeAtualizacao: { type: DataTypes.DATE, defaultValue: Date.now() }
// },
// {
//   timestamps: false
// }

// 'use strict';
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('PessoasFisicas', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       cpf: {
//         type: Sequelize.STRING
//       },
//       nome: {
//         type: Sequelize.STRING
//       },
//       telefone: {
//         type: Sequelize.STRING
//       },
//       email: {
//         type: Sequelize.STRING
//       },
//       senha: {
//         type: Sequelize.STRING
//       },
//       dataDeNascimento: {
//         type: Sequelize.STRING
//       },
//       dataDeCriacao: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       dataDeAtualizacao: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   down: async (queryInterface, _Sequelize) => {
//     await queryInterface.dropTable('PessoasFisicas');
//   }
// };
