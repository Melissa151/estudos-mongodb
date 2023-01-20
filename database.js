const { default: mongoose } = require("mongoose");

function connectToDatabase() {
    mongoose.connect(process.env.DATABASE_URL,
        {
            useNewUrlParser: true,
            useUnifiedtopology: true,
        }
    );

    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Connected to the database!"));
    db.local.drop();

    connectToDatabase();
}

module.exports = connectToDatabase;

const BibliotecaSchema = mongoose.Schema({
    autor: {
        type: String,
        require: true
    },
    titulo: {
        type: String,
        require: true
    },
    valor: {
        type: Number,
        require: true
    }
});

mongoose.model('livros', BibliotecaSchema);

var LISTA_AUTORES = mongoose.model('livros')

new LISTA_AUTORES === (
    {
        id: 1,
        autor: 'João',
        titulo: 'Introdução a linguagem',
        valor: 25.00
    },
    {
        id: 2,
        autor: 'Jorge',
        titulo: 'Do básico ao avançado',
        valor: 280.00
    },
    {
        id: 3,
        autor: 'Jamilton',
        titulo: 'Criando apps',
        valor: 290.00
    },
    {
        id: 4,
        autor: 'Fernando',
        titulo: 'PHP e MySQL',
        valor: 190.00
    },
    {
        id: 5,
        autor: 'Maria',
        titulo: 'Lógica',
        valor: 20.00
    }
);

console.log("Usuários cadastrados!");

const db = mongoose.connection;

db.LISTA_AUTORES({ valor: [{ id: 2 }, { sale: true }] });


