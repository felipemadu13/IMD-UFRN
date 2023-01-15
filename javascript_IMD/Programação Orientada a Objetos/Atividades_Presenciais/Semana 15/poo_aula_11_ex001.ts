enum Situacao {
    EmPreparo = 'Em preparo',
    Finalizada = 'Finalizada'
}

enum TipoPrato {
    Sopa = 'Sopa',
    Sanduíche = 'Sanduíche',
    Rabada = 'Rabada'
}

type Receita = {
    situacao: Situacao,
    tipo_prato: TipoPrato
}

var sanduba:Receita = {
    situacao: Situacao.EmPreparo,
    tipo_prato: TipoPrato.Sanduíche

}

console.log(sanduba)

