# Tipos de Sistemas Distribuídos e Middleware

## Tipos de Sistemas Distribuídos

De acordo com *Tanenbaum* e *Steen* (2002), um sistema distribuído é um aglomerado de computadores autônomos conectados por uma rede de comunicação que é vista pelos usuários como uma único máquina que fornece um serviço ou resolve um problema.

Em computação distribuída existe diversos sistemas que realizam tal mecanismos, os príncipais são o de *computação distribuída*, *informação distribuída* e os *sistemas distribuídos pervasivos*.

- ### Sistemas de Computação Distribuídas

    Uma utilização importante que se visa em computadores é o seu poder de processamento, de realizar cálculos matemáticos de forma instântanena, de processar imagens, ou seja, de fazer o trabalho que necessita de precisão e agilidade.
    Isso que os *sistemas de computação distribuídas* buscam realizar por meio desse aglomerado de máquinas. A computação em *cluster* e em *grade* são os meios que ditam como tais dispositivos devem ficar arranjadas para executar determinada tarefa.

    Um *sistema em cluster* nada mais é do que um conjuto de máquinas que possuem o mesmo/similar hadware e SO, ligados por uma rede de alta velocidade, tendo um computador central (nó mestre) que gerencia o uso dos demais (nós escravos). Esse sistema funciona de forma paralela, ou seja, um único programa é execultado por quase todo o conjunto. O mestre fica responsável por manipular a distribuição da quantidade de nós que devem realizar algum tipo de tarefa, organizar uma fila de trabalho e dispor de uma interface para os usuários do sistema.

    Diferente desse, a *computação em grade* pode ser composta por máquinas completamente diferentes, ou seja, dispositivos heterogênios que não possuem SO e hadware semelhantes, ou ainda, não precisar está necessarimente na mesma rede, tendo também políticas de segurança distintas e entre outras coisas. Uma característica desse sistema é que um grupo de pessoas ou instituições colaboram para prover diversos recursos, essa associação é conhecida como organização virtual, sabendo também que os indivíduos que pertencem a mesma organização têm acesso aos recursos fornecidos por aquela organização. Esses recursos podem ser servidores, armazenamento, banco de dados, acesso a supercomputadores além de outros mecanismos.

- ### Sistemas de Informação Distribuídos
    
    Os *sistemas de informação distribuídos* buscam o compartilhamento de informações por meio de páginas web, acesso a banco de dados distribuídos, arquivos e outros meios. No entanto, antes de aumentarem a gama de distribuição das aplicações em uma rede, havia apenas uma distribuição que execultava aquela única operação para ao fim disponibilizá-la ao cliente, ou seja, esses usuários podiam solicitar uma requisição ao servidor para realizar uma ação específica daquele servidor, assim, recebendo a resposta que era devolvida. A medida que os problemas a serem implementados ficavam relativamente mais complexos, ficou evidente que a integração também deveria acontecer de modo que as aplicações também pudessem se comunicar umas com as outras.

    Um *sistema de processamento de transações* é um exemplo de *sistema de informação distribuído*, como em banco de dados que as operações realizadas sobre eles acontecem no formato de transações, sendo assim, todas as operações são realizadas ou nenhuma é execultada, ou seja, transações seguem os princípios de serem atômicas (indivisíveis), consistentes (não violando invariantes do sistema), isoladas (não interferindo outra), duráveis (operações permanentes).

- ### Sistemas Distribuídos Pervasivos

    Diferente dos dois primeiros, os *sistemas pervasivos* operam com estabilidade, possuindo bateria limitada, tamanho reduzido e capacidade em grande parte de conexão sem fio, além de poderem ser móveis e heterogenios. Esse sistema é dominado basicamente por smartphones, mas há também smartTVs, console de jogos, relógios inteligentes e outros que se encaixam nesse tipo de sistema. Pela questão da mobilidade, tal sistema fica ciente do fato de que seu ambiente pode mudar constantimente e como geralmente cada aparelho é configurado pelo seu próprio dono, os dispositivos, precisam descobrir o meio em qual estão inseridos, assim, se encaixar da melhor forma possível.

    Um tipo de *sistema pervasivo* bastante comum são os *sistemas domésticos* que são criados apartir de uma rede doméstica, onde vários dispositivos de uso comum interagem entre se para fornecer um ambiente autônomo e moderno. Computadores pessoais, smartphones, TVs e geladeras com acesso a rede são alguns exemplos de máquinas domésticas que participam dessa classe. No entando, esse tipo sistema necessita o enfrentamento de alguns desafios para que se torne realidade, a autoconfiguração e o autogerenciamento são uma delas, pois não se pode esperar que usuários comuns sem conhecimento avançado de tais tecnologias possam ser capazes de manter em funcionamento toda essa distribuição.

    O *sistema eletrônico para tartamento de saúde* é outro exemplo de sistema pervasivo que está em crescente alta, pois o mesmo visa o monitoramento dos sinais vitais dos usuários para ter um levantamento sobre o bem-estar deste, assim, avisando sobre algum problema a alguém especializado na área médica.

## Middleware

Os *middlewares* foram criados para suportar computadores e redes heterogênias simultaneamente, assim, oferecendo uma visão de sistema único e integrado. Ele fornece uma camada de software que interliga a superior (usuário e aplicação) com as de mais baixo nível (SO e hadware), buscando ocultar, da melhor forma possível, as diferenças entre essas duas camadas, visando proporcionar meios para que os componentes de uma determinada aplicação distribuída se comuniquem uns com os outros, mas fazendo também com que diferentes aplicações se comunique.

- ### Java Remote Method Invocation (RMI)

    Desenvolvido em Java, o Java Remote Method Invocation ou RMI é uma interface de programação que permite a execução de chamadas remotas no estilo RPC em aplicações desenvolvidas em Java. 
    Através da utilização da arquitetura RMI, é possível que um objeto ativo em uma máquina virtual Java possa interagir com objetos de outras máquinas virtuais Java, independentemente da localização dessas máquinas virtuais. Para mais informações acesse [RMI](https://www.dca.fee.unicamp.br/cursos/PooJava/objdist/javarmi.html).

- ### MQSeries

    Lançado pelo pela IBM o MQSeries é uma Middleware orientada a mensagem, permitindo que aplicativos independentes e potencialmente não concorrentes em um sistema distribuído se comuniquem uns com os outros. Para mais informaçoes acesse [MQSeries](https://www.ibm.com/support/knowledgecenter/SSFKSJ_9.0.0/com.ibm.mq.pro.doc/q001020_.html).

- ### Microsoft Message Queuing (MSQM)
    
    O MSMQ é  uma implementação de fila de mensagens desenvolvida pela Microsoft implementada em C++, onde um protocolo de mensagens permite que aplicativos executados em servidores ou processos separados se comuniquem de maneira à evitar falhas. Existe uma fila onde é o local de armazenamento temporário a partir do qual as mensagens podem ser enviadas e recebidas de forma confiável, como e quando as condições permitirem. Isso permite a comunicação entre redes e entre computadores, executando o Windows, que nem sempre pode estar conectado.
    Para mais informações acesse [MSQM](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/msmq/ms711472(v=vs.85)).

- ### Common Object Request Broker (CORDA)

    O CORDA é a arquitetura padrão criada pelo OMG para estabelecer e simplificar a troca de dados entre sistemas distribuídos heterogêneos. Ele atua de modo que os objetos possam se comunicar de forma transparente ao usuário, mesmo que para isso seja necessário interoperar com outro software, em outro sistema operacional e em outra ferramenta de desenvolvimento.

    Ele utiliza IDL (Interface Definition Language) que é baseado em C++ que não possui algoritmos nem variáveis, logo, tal linguagem é puramente declarativa. Para saber mais acesse [CORDA](https://www.omg.org/spec/CORBA).

- ### Ginga

    Middleware para aplicações de TV digital consistindo de máquinas de execução das linguagens oferecidas, e bibliotecas de funções, que permitem o desenvolvimento rápido e fácil de aplicações.

    O *ginga* é desenvolvido em NCL (Nested Context Language) que é uma linguagem de aplicação XML com facilidades para a especificação de aspectos de interatividade, sincronismo espaço-temporal entre objetos de mídia, adaptabilidade, suporte a múltiplos dispositivos e suporte à produção ao vivo de programas interativos não-lineares.
    
    Ginga é o nome do middleware do Sistema Nipo-Brasileiro de TV Digital Terrestre (ISDB-TB) e Recomendação ITU-T para serviços IPTV. Para mais informações acesse [Ginga](http://www.gingancl.org.br/pt-br/sobre).