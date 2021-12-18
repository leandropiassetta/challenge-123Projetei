'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CadastroDePessoas', {
      cpf: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      dataDeNascimento: {
        type: Sequelize.DATE
      },
      DataDeCriacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      DataDeAtualizacao: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('CadastroDePessoas');
  }
};
