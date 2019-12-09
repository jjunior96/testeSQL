module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5435', // a Porta padrao é 5432
  username: 'postgres',
  password: 'appbarber',
  database: 'teste',
  define: {
    timestamps: true, // Cria os campos created_at e updated_at
    underscored: true, // Utiliza o formato com underline, ao inves de maiusculo nas tabelas
    underscoredAll: true, // Formato underline para os registros
  },
};
