const net = require("net");
const readline = require("readline");

const client = net.Socket();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function connectionListener() {

    rl.addListener("line", line => {    
        client.write(line);
    });

    client.on("data", function (data) {
       const resposta = data.toString();

        console.log(resposta);
    });
}

client.connect(3000, "0.0.0.0", connectionListener);
    
   /* if(line == "FIM"){
        rl.close();
    }*/