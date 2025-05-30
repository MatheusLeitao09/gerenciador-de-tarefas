let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];
console.log(tarefas);


// Adicionando dois elementos

tarefas.push('Limpar o teclado', 'Arrumar a sala de estar')
console.log("Tarefas após adicionar dois elementos: " + tarefas);
console.log('---------------------');
// Removendo a ultima tarefa

let tarefaRemovida = tarefas.pop();
console.log("Tarefas depois de remover a última: " + tarefas);
console.log('---------------------');

// Adiciona uma tarefa no ínicio

tarefas.unshift('Limpar o banheiro');
console.log("Tarefas depois de adicionar uma no ínicio: " + tarefas);
