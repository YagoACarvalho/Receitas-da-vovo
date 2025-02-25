const recipes = JSON.parse(localStorage.getItem('recipes')) || [];


const listaReceitas = document.getElementById("listaReceitas");

if (recipes.length > 0) {
    recipes.forEach(function(recipe) {
        const divReceita = document.createElement('div');
        divReceita.classList.add('card' , 'container','mt-2', 'mb-2');
        divReceita.style.backgroundColor = 'white';
        divReceita.style.padding = '0px'
        divReceita.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${recipe.nome}</h5>
            <p><strong>Nome da receita:</strong> ${recipe.titulo}</p>
            <p><strong>Ingredientes:</strong> ${recipe.ingredientes}</p>
            <p><strong>Modo de Preparo:</strong> ${recipe.instrucoes}</p>
        </div>
    `;
       
        listaReceitas.appendChild(divReceita);
    });
} else {
    listaReceitas.innerHTML = "<p>Nenhuma receita encontrada.</p>";
    listaReceitas.style.textAlign = "center";
};

// Testando o controle de versão