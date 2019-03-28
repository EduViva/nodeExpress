const express = require ("express");
const bodyParser = require ("body-parser");
const path = require ('path');
const app = express();
const port = 3000;

const contatos = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("<h1>Servidor rodando na porta 3000!</h1>"));

app.get('/contato', (req, res) => { 
    res.send(`
    <h1>Contato</h1>
    <form action="/contato" method="POST">
      <label for="email">Email:</label>
      <input type="email" name="email" id="email">
      <label for="mensagem">Mensagem:</label>
      <textarea name="mensagem" id="mensagem"></textarea>
      <input type="submit" value="Enviar">
    </form>
    `)
})

app.post(`/contato`, (req, res) => {
  contatos.push(req.body);
  console.log(contatos);
  //res.send(`email = ${contatos[0].email}`);
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
