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
