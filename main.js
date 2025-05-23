const Usuario = require("./usuario");

async function testarInsercao() {
  const user = new Usuario("Monique", "monique@example.com");
 // await user.inserir();

  // await Usuario.atualizar({nome: "Monique"}, {email: "monique@gmail.com"});

  //await Usuario.buscar();

  await Usuario.deletar({nome: "Monique"}, {email: "monique@gmail.com"});
}

testarInsercao();