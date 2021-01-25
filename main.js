const elementoInput = document.querySelector('input')
const elementoBotao = document.querySelector('button')
const elementoLista = document.querySelector('ul')


const tarefas = []

function mostraTarefas() {

    elementoLista.innerHTML = ''

    for (tarefa of tarefas) {

        const itemLista = document.createElement('li')

        itemLista.innerText = tarefa

        elementoLista.appendChild(itemLista)
        const del = document.createElement('a')
        del.innerText = 'delete'
        itemLista.appendChild(del)
        const posicaoItem = tarefas.indexOf(tarefa)
        del.setAttribute('onclick',`deletarTarefa(${posicaoItem})`)
        del.setAttribute('class', 'material-icons')
        itemLista.appendChild(del)
        del.setAttribute('href', '#')
        }
}
mostraTarefas()

function deletarTarefa(posicaoItem) {
    tarefas.splice(posicaoItem, 1)
    mostraTarefas()
}
deletarTarefa()

function addTarefa() {
    textoTarefa = elementoInput.value
    tarefas.push(textoTarefa)
    mostraTarefas()
    elementoInput.value = ''
}


elementoBotao.setAttribute('onclick', 'addTarefa()')