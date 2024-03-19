function addProduct() {
    // Nome do produto
    const productName = document.querySelector("#product-name").value;

    const productAmount = document.querySelector("#product-amount").value;

    if(productName && productAmount) {
        // clona template
        const template = document.querySelector(".template");

        const newStock = template.cloneNode(true);

        // adiciona o Nome
        newStock.querySelector(".stock-title").textContent = productName;

        // adiciona a quantidade
        newStock.querySelector(".stock-amount").textContent = productAmount;

        // remover as classes desnecessárias
        newStock.classList.remove("template");
        newStock.classList.remove("hide");

        //adiciona o produto na lista
        const list = document.querySelector("#stock-list");

        list.appendChild(newStock);

        // adicionar o evento de remover
        const removeBtn = newStock.querySelector(".remove-btn").addEventListener("click", function() {
            removeProduct(newStock.querySelector(".stock-amount"));
        });

        // adicionar evento de completar tarefa
        const doneBtn = newStock.querySelector(".done-btn").addEventListener("click", function() {
            completeProduct(newStock.querySelector(".stock-amount"), true);
        });

        // limpar texto
        document.querySelector("#product-name").value = "";
        document.querySelector("#product-amount").value = "";
    }
}

function removeProduct(product) {
    // Obtém o valor atual do elemento de entrada
    var currentAmount = parseInt(product.textContent) || 0;

    // Verifica se o novo valor é maior que 0
    if (currentAmount > 0) {
        // Decrementa o valor em 1
        var newAmount = currentAmount - 1;

        // Converte o novo valor para string
        var newAmountString = newAmount.toString();

        // Atualiza o valor do elemento de entrada
        product.textContent = newAmountString;
    }
}

        // função de completar a tarefa
        function completeProduct(product, done) {
            const productToComplete = product.parentNode;
        
            if (done) {
                productToComplete.classList.add("done");
        
                // Obtém o valor atual do elemento de entrada
                var currentAmount = parseInt(product.textContent) || 0;
        
                // Incrementa o valor em 1
                var newAmount = currentAmount + 1;
        
                // Converte o novo valor para string
                var newAmountString = newAmount.toString();
        
                // Atualiza o valor do elemento de entrada
                product.textContent = newAmountString;
            } else {
                productToComplete.classList.remove("done");
            }
        }


// evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {
    e.preventDefault();


    addProduct();

})