const tarefas = [
    'Estudar funções',
    'Estudar funções agregadoras',
    'Arrumar casa',
    'Reunião do trabalho'
]

function mostrarTarefas(listaTarefas) {
    
    const taskList = document.querySelector('#taskList')
    taskList.innerHTML = ""
    
    listaTarefas.forEach((tarefa) => {
        const li = `<li>${tarefa}</li>`
        taskList.innerHTML += li
    })
}

function filtrarTarefas() {
    
    const textoFiltrado = document.querySelector('#searchInput').value

    const tarefasFiltradas = tarefas.filter(tarefa => tarefa.includes(textoFiltrado))
    mostrarTarefas(tarefasFiltradas)
}

document.querySelector("#botao").addEventListener('click', filtrarTarefas)

mostrarTarefas(tarefas)