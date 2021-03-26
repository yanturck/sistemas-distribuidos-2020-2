const net = require("net");

/**
 * Servidor responsavél pelo suporte de um sistema de pedidos de comida
 * tendo a parte do cliente, que irá realizar o pedido da comida
 * e outra para o serviço adiministrativo
 */

var msgInicial = '\nBem-vido ao sFood!\nSe vc for um cliente desejando fazer um pedido digite "CARDAPIO"!\nCaso vc seja um adiministrador digite "ADMIN"\nCaso vc queira sair digite "X".\n';
var msgPedidos = "\nDigite o número do item que você deseja:\n";
var msgAdmin = "\nDigite a senha de adimistrador:\n";
var menuCard = "\nAgora vc pode listar os itens(listI) ou pedidos(listP),\nbuscar um pedido(findP),\nexcluir um pedido(del),\nfinalizar(fin) ou cancelar a compra(can).\n";
var menuAdm = '\nEstamos no menu do Administador,\nagora vc pode add ("addC") ou excluir ("del") um item do cardapio.\n("H")Para voltar ao Inicio.\n';

const senha = "123"; //senha para administracao

var auxList = [];

var cardapio = [
    "PIZZA FAMILIA",
    "PIZZA MÉDIA",
    "PIZZA PEQUENA",
    "BROTINHO",
    "CACHORRO QUENTE",
    "LASANHA",
    "HAMBURGUER",
    "COMBO MINI-COXINHA",
    "REFRIGERANTE 1L",
    "REFRIGERANTE 2L",
    "REFRIGERANTE 4L",
    "SUCOS 500ML"
    ];
var indices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var pedidos = [];

/**
 * Funcoes para o CARDAPIO ----------------------------------------------
 */

function imprimeCardapio(){
    var imprime = "\n";
    for (var i = 0; i<cardapio.length; i++){
        imprime += indices[i] + "." + cardapio[i] + "\n";
    }
    return imprime;
}

function addPedido(ind){
    var pedido = buscaIndice(ind);
    if (pedido != -1){
        pedidos.push(pedido);
        return 1;
    }else{return 0;}
}

function addCardapio(newLanche){
    indices.push(indices.length+1);
    cardapio.push(newLanche.toUpperCase());
}

function buscaPedido(pedido){
    var existe = cardapio.indexOf(pedido.toUpperCase());

    if (existe === -1){
        return -1;
    }else{
        return indices[existe] + "\n";
    }
}

function buscaIndice(indice){
    var existe = indices.indexOf(indice);

    if (existe === -1){
        return -1;
    }else{
        return cardapio[existe] + "\n";
    }
}

function listPedidos(){
    if (pedidos.length == 0){
        return "\nNão há nenhum Pedido!\n";
    }else{
        var i;
        var msg = "";
        for (i = 0; i < pedidos.length; i++){
            msg += (i+1) + "." + pedidos[i] + "\n";
        }
        return "\nSeus pedidos são:\n" + msg;
    }
}

function deleteItem(n){
    var tmp = n-1;

    if (tmp >= cardapio.length) {
        return 0;
    }else {
        cardapio.splice(tmp,1);
        indices.pop();
        return 1;
    }
}

function dellPedido(ind){
    if (pedidos.length == 0){
        return -1;
    }else{
        var tmp = ind-1;

        if (tmp >= pedidos.length) {
            return 0;
        }else {
            pedidos.splice(tmp,1);
            return 1;
        }
    }
}

//----------------------------------------------------------------------------------

function connectionListener(socket){
    socket.write(msgInicial);

    socket.on("end", () => {
        console.log("Cliente desconectado!");
        auxList = [];
        pedidos = [];
    });

    socket.on("data", data => {
        
        console.log("Cliente Conectado!");
        //console.log(data.toString());

        const s = data.toString().trim();
        const opcao = s.toUpperCase();

        if (auxList.length == 0){
            switch(opcao){
                case "CARDAPIO":
                    socket.write(menuCard + imprimeCardapio() + msgPedidos);
                    auxList.push("CARDAPIO");
                    break;
                case "ADMIN":
                    socket.write(msgAdmin);
                    auxList.push("ADMIN");
                    break;
                case "X":
                    socket.write("Saindo...")
                    socket.end();
                    break;
                default:
                    socket.write("Mensagem desconhecida!");
            }
        } else if (auxList.length == 1){

            if (auxList[0] == "CARDAPIO"){ 
                switch (opcao){
                    case "LISTI": //listar itens
                        socket.write(imprimeCardapio() + menuCard + msgPedidos);
                        break;
                    case "LISTP": //listar pedidos
                        socket.write(listPedidos() + menuCard + msgPedidos);
                        break;
                    case "FINDP": //buscar pedido
                        socket.write("\nDigite o número ou nome: ");
                        auxList.push("FINDP");
                        break;
                    case "DEL": //deletar pedido
                        socket.write("\nDigite o número do pedido que vc deseja apagar: ");
                        auxList.push("DEL");
                        break;
                    case "FIN": //finalizar pedido
                        socket.write("\nVc tem certeza que deseja finalizar o pedido? [s/n]");
                        auxList.push("FIN");
                        break;
                    case "CAN": //cancelar pedido
                        socket.write("\nVc tem certeza que deseja cancelar o pedido? [s/n]");
                        auxList.push("CAN");
                        break;
                    case "CARDAPIO":
                        break;
                    default:
                        var ok = addPedido(parseInt(opcao));

                        if (ok === 1){
                            socket.write("OK! Pedido adicionado!\n" + menuCard + msgPedidos);
                        }else{
                            socket.write("Item não existe!:*(\nDigite um ITEM VALIDO!");
                        }
                    }
            }else if (auxList[0] == "ADMIN"){
                switch (opcao){
                    case "ADMIN":
                        break;
                    default:
                        if (opcao === senha){
                            socket.write("\nSenha correta!:)\n" + menuAdm);
                            auxList.push("OK")
                        }else {socket.write("\nSENHA INCORRETA!:(\nTente novamente.\nDigite a senha novamente:\n");}
                }
            }
        }else if (auxList.length == 2){

            if (auxList[1] == "FINDP") {
                switch (opcao) {
                    case "FINDP":
                        break;
                    default:
                        var tmp1 = buscaPedido(opcao);
                        var tmp2 = buscaIndice(parseInt(opcao));

                        if (tmp1 === -1 && tmp2 === -1){
                            socket.write("Item não existe!");
                        }else if(tmp1 != -1 && tmp2 === -1) {
                            socket.write("Item encontrado: " + tmp1);
                            socket.write(menuCard + msgPedidos);
                            auxList.pop();
                        }else if (tmp1 === -1 && tmp2 != -1) {
                            socket.write("Item encontrado: " + tmp2);
                            socket.write(menuCard + msgPedidos);
                            auxList.pop();
                        }
                }
            }else if (auxList[1] == "DEL") {
                switch (opcao) {
                    case "DEL":
                        break;
                    default:
                        var tmp = dellPedido(parseInt(opcao));

                        if (tmp === -1){
                            socket.write("Não há nenhum Pedido!");
                            socket.write(msgPedidos);
                            auxList.pop();
                        }else if (tmp === 0) {
                            sokect.write("Item não existente!\nDigite um item que exista.");
                        }else if (tmp === 1) {
                            socket.write("Item apagado com sucesso!");
                            socket.write(menuCard + msgPedidos);
                            auxList.pop();
                        }
                }
            } else if (auxList[1] == "FIN") {                    
                switch (opcao) {
                    case "FIN":
                        break;
                    default:
                        if (opcao === "S") {
                            socket.write("Pedido finalizado! Aguarde a entrega.");
                            socket.end();
                        }else if (opcao === "N") {
                            auxList.pop();
                            socket.write(menuCard + msgPedidos);
                        }else {
                            socket.write("Resposta inválida");
                        }
                }
            } else if (auxList[1] == "CAN") {    
                switch (opcao) {
                    case "CAN":
                        break;
                    default:
                        if (opcao === "S") {
                            socket.write(msgInicial);
                            auxList = [];
                        }else if (opcao === "N") {
                            auxList.pop();
                            socket.write(menuCard + msgPedidos);
                        }else {
                            socket.write("Resposta inválida");
                        }
                }
            } else if (auxList[1] == "OK") {
                switch (opcao) {
                    case senha:
                        break;
                    case "ADDC":
                        socket.write("\nDigite o nome do item a ser add:\n");
                        auxList.push("ADDC");
                        break;
                    case "DEL":
                        socket.write("\nDigite o número do pedido que vc deseja apagar: ");
                        auxList.push("DEL");
                        break;
                    case "H":
                        socket.write("\nVocê tem certeza que deseja sair?[s/n]");
                        auxList.push("H");
                        break;
                    default:
                        socket.write("\nOpção inválida!\n");
                }

            }
        }else if (auxList.length == 3){
            if (auxList[2] == "ADDC") {
                switch (opcao) {
                    case "ADDC":
                        break;
                    default:
                        addCardapio(opcao);
                        socket.write("Item adicionado!" + "\n" + imprimeCardapio() + menuAdm);
                        auxList.pop();
                }

            }else if (auxList[2] == "DEL") {
                switch (opcao) {
                    case "DEL":
                        break;
                    default:
                        var tmp = deleteItem(parseInt(opcao));

                        if (tmp === 0) {
                            socket.write("\nItem não existente!\nDigite um item que exista.\n");
                        }else if (tmp === 1) {
                            socket.write("Item apagado com sucesso!\n" + imprimeCardapio());
                            socket.write(menuAdm);
                            auxList.pop();
                        }
                }
            }else if (auxList[2] == "H") {
                switch (opcao) {
                    case "H":
                        break;
                    default:
                        if (opcao === "S") {
                            socket.write(msgInicial);
                            auxList = [];
                        }else if (opcao === "N") {
                            auxList.pop();
                            socket.write(menuAdm);
                        }else {
                            socket.write("Resposta inválida");
                        }
                }
            }
        }
    });
}

function main(){
    console.log("Iniciando Servidor!");
    
    const server = net.createServer(connectionListener);

    server.listen(3000, "0.0.0.0", function(){
        console.log("Servidor rodando!");
    });
}

main();