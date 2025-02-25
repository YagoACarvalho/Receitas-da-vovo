document.getElementById('recipeForm').addEventListener("submit" , function(event) {
event.preventDefault();



const nomePessoa = document.querySelector("#nomePessoa").value;
const ingredientes = document.querySelector('#ingredientes').value;
const titulo = document.querySelector('#titulo').value;
const instrucoes = document.querySelector('#instrucoes').value;


const recipe = {
    nome: nomePessoa,
    ingredientes: ingredientes,
    titulo: titulo,
    instrucoes: instrucoes,
};

let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

recipes.push(recipe);

localStorage.setItem('recipes', JSON.stringify(recipes));

document.getElementById("recipeForm").reset();

alert("Receita salva com sucesso!")

});
