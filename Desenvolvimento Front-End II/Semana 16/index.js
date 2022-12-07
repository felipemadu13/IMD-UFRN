

// Evento tecla ENTER
addEventListener('keydown', teclado);
function teclado(tecla) {
    if (tecla.keyCode == 13) {
        return adicionarItem()
    }
}


// Adicionar Item
function adicionarItem() {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var ul = document.querySelector('ul');
    var item = document.getElementById('addToDo').value;

    ul.appendChild(li);
    li.appendChild(span);

    var texto = document.createTextNode(item)

    li.appendChild(texto);

    var i = document.createElement('i');
    i.className = "fa fa-trash"
    span.appendChild(i);    

    // deletar texto
    i.addEventListener('click', function(){
        li.remove();
    }
    )
    
}

// Deletar texto
var spanDel = document.querySelectorAll('span');

spanDel.forEach(element => {
    element.addEventListener('click', deletar);
});

function deletar() {
    var liDel = document.querySelector('li');
    liDel.remove();
}

console.log(spanDel)

