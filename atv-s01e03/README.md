# Tipos de Sistemas Distribuídos e Middleware

## Tipos de Sistemas Distribuídos

    De acordo com Tanenbaum e Steen (2002 ), um sistema distribuído é um aglomerado de computadores autônomos conectados por uma rede de comunicação que é vista pelos usuários como uma único máquina que fornece um serviço ou resolve um problema.
    Em computação distribuída existe diversos sistemas que realizam tal mecanismos de forma única, os príncipais são o de computação distribuída, informação distribuída e sistemas embutidos distribuídos (ou sistemas distribuídos pervasivos).

- ### Sistemas de Computação Distribuídas

    Uma utilização importante que se visa em computadores é o seu poder de processamento, de realizar cálculos matemáticos de forma instântanena, de processar imagens, ou seja, de fazer o trabalho que necessita de precisão e agilidade.

    Isso que os sistemas de computação distribuídas buscam realizar por meio desse aglomerado. A computação em **cluster** e em **grade** são os meios que ditam como tais dispositivos devem ficar arranjadas para executar determinada tarefa.

    Um sistema em cluster nada mais é do que um conjuto de máquinas que possuem o mesmo/similar hadware e SO, ligados por uma rede de alta velocidade tendo um computador central (nó mestre) que gerencia o uso dos demais (nós escravos). Esse sistema funciona de forma paralela, ou seja, um único programa é execultado por quase todo o conjunto. O mestre fica responsável por manipular a distribuição da quantidade de nós que devem realizar algum tipo de tarefa, organizar uma fila de trabalho e dispor de uma interface para os usuários do sistema. Um exemplo bem conhecido é o Cluster Beowulf.

    [![Cluster Beowulf]()](https://pt.wikipedia.org/wiki/Aglomerado_Beowulf#/media/Ficheiro:Beowulf-cluster-the-borg.jpg)

    Diferente desse, a computação em grade pode ser composta por máquinas completamente diferentes, ou seja, dispositivos heterogênios que não possuem SO e hadware semelhantes, ou ainda, não precisar está necessarimente na mesma rede, tendo também políticas de segurança distintas e assim por diante. Uma característica desse sistema é que um grupo pessoas ou instituições colaboram para prover diversos recursos, essa associação é conhecida como organização virtual, sabendo também que os indivíduos que pertencem a mesma organização têm acesso aos recursos fornecidos por aquela organização. Esses recursos podem ser o servidores, armazenamento, banco de dados, dentre outros.

- ### Sistemas de Informação Distribuídos




- ### Sistemas Distribuídos Pervasivos

## Middleware