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
console.log("Tarefas depois de adicionar uma no inicio: " + tarefas);
console.log("---------------------");

// Remover a primeira tarefa

tarefas.shift();
console.log("Tarefas após remover a primeira: " + tarefas);
console.log("---------------------");

// Verificar se possui "IR A ACADEMIA"

console.log(`Possui uma tarefa de ir a academia?: ${tarefas.includes("Ir à academia")}`);
console.log("---------------------");

// Transformar a lista em string

console.log(`Playlist como string: ${tarefas.join(', ')}`);
console.log("---------------------");

// Extraindo uma Parte da Lista

console.log(`Extrair uma parte da lista(índices 2 a 4): ${tarefas.slice(2, 4)}`); 
console.log("---------------------");

// Alterando à lista

let tarefaRemovida1 = tarefas.splice(3,1)
console.log("Remover a tarefa do indice 3: " + tarefaRemovida1);
console.log(`Lista atualizada: ${tarefas.join(', ')}`);
console.log("---------------------");

// Concatenando tarefas

let tarefas1 = ['Limpar o ps5', 'Limpar o xbox']
console.log(`Tarefas combinadas: ${tarefas.concat(tarefas1)}`);