var ivanzito = [
    {
        id: 0,
        question: 'Ivanzito foi contratado para desenvolver uma página web estilo landing page (aquela página que todos nós odiamos ter que preencher os dados para ter acesso a um conteúdo gratuito e que posteriormente iremos receber toneladas de propaganda no e-mail). <br> <br> Você topa encarar essa jornada e ajuda-lo a desenvolver esse projeto com excelência?',
        option1: 'Sim, com certeza!',
        option2: 'É pra já, roda logo essa bagaça aí!',
        nextStep1: 1,
        nextStep2: 1,
        isEnd: false,
        points1: 0,
        points2: 10
    },
    {
        id: 1,
        question: 'Após iniciar as primeira linhas de código Ivanzito precisa decidir como irá organizar o layout da pagina no CSS, qual tipo de display ele irá utilizar para organizar o formulário da melhor forma possível?',
        option1: 'Inline, block e/ou inline-block',
        option2: 'Flexbox',
        nextStep1: 2,
        nextStep2: 6,
        isEnd: false,
        points1: 15,
        points2: 25
    },
    {
        id: 2,
        question: 'Parece que Ivanzito encontrou alguma dificuldade para fazer o layout com essas propriedades mas após muitas horas extras de trabalho e muita pesquisa online ele até consegui fazer funcionar, o problema é que o site não está responsivo e só funciona para um tamanho determinado de tela. O que devemos fazer?',
        option1: 'Virar a noite buscando uma solução para o projeto, assim a entrega não sofrerá atrasos',
        option2: 'Refazer o layout utilizando Flexbox e atrasar em um dia a entrega',
        nextStep1: 3,
        nextStep2: 12,
        isEnd: false,
        points1: 10,
        points2: 20
    },
    {
        id: 3,
        question: 'Após virar a noite em busca de uma solução para o layout Ivanzito conseguiu fazer uma MEGA gambiarra digna de um oscar. O problema agora é que após muitas horas de trabalho seguidas e sem dormir a noite toda a qualidade final do projeto esta lamentável, inclusive a logo da empresa ficou de ponta cabeça. O prazo da entrega é hoje, o que vamos fazer?',
        option1: 'Entrega o projeto, afinal o formulário esta funcionando e não queremos atrasar a entrega',
        option2: 'Chamar um colega para ajudar a corrigir os problemas e dividir os lucros',
        nextStep1: 4,
        nextStep2: 5,
        isEnd: false,
        points1: 10,
        points2: 50
    },
    {
        id: 4,
        question: 'Como era de se esperar a qualidade do projeto ficou sofrível e o cliente não ficou nada satisfeito com o resultado final. Inclusive ele solicitou o reembolso dos valores já pagos para contratar um outro desenvolvedor.',
        option1: '',
        option2: '',
        isEnd: true
    },
    {
        id: 5,
        question: 'Essa foi a melhor decisão que Ivanzito poderia ter nesse momento. Duas cabeças pensam melhor que uma! Trabalhando em equipe os dois conseguiram corrigir vários dos problemas do layout além deixar tudo de forma aceitável, como tinham pouco tempo eles não conseguiram deixar tudo perfeito mas o cliente gostou do resultado. Parabéns você conseguiu concluir esse projeto!',
        option1: '',
        option2: '',        
        isEnd: true
    },
    {
        id: 6,
        question: 'Com o flexbox foi fácil configurar o layout do jeito que o design pedia, o resultado ficou bom e Ivanzito conseguiu concluir essa tarefa antes do que ele imaginava. Com podemos aproveitar esse tempo extra?',
        option1: 'Fazer uma pausa e descansar um pouco para continuar o trabalho mais animado',
        option2: 'Implementar melhorias no projeto que não foram solicitadas',
        nextStep1: 7,
        nextStep2: 11,
        isEnd: false,
        points1: 15,
        points2: 10
    },
    {
        id: 7,
        question: 'Ivanzito precisa fazer pausas durante o dia de trabalho, isso o ajuda a ficar mais focado nas atividades que ele está fazendo. Seguindo o trabalho, o proximo desafio será implementar o formulário onde o usuário poderá inserir as informações. Ele não esta seguro de como usar a estrutura de formulário, o que devemos fazer?',
        option1: 'Estudar um pouco sobre a estrutura antes de tentar implementar',
        option2: 'Tentar fazer da maneira que acredita funcionar e testar depois',
        nextStep1: 8,
        nextStep2: 12,
        isEnd: false,
        points1: 15,
        points2: 10
    },
    {
        id: 8,
        question: 'Embora Ivanzito tenha utilizado um tempo para rever o funcionamento da estrutura de formulário ele conseguiu implementar de primeira, assim ele acabou economizando mais um tempo ao invés de ter que ficar testando até conseguir fazer o código funcionar. O projeto já esta pronto mas ainda tem um tempo extra, qual o próximo passo:',
        option1: 'Entregar o projeto',
        option2: 'Incluir pequenas melhorias na pagina para o cliente',
        nextStep1: 9,
        nextStep2: 10,
        isEnd: false,
        points1: 40,
        points2: 50
    },
    {
        id: 9,
        question: 'Projeto foi entregue no prazo e o cliente ficou bastante satisfeito com o resultado! Você conseguiu!!!',
        option1: '',
        option2: '',
        isEnd: true
    },
    {
        id: 10,
        question: 'O cliente disse que as expectativas foram superadas com a entrega do projeto e suas melhorias, ele informou que fará uma proposta para você fazer parte do time!',
        option1: '',
        option2: '',
        isEnd: true
    },
    {
        id: 11,
        question: 'As melhorias pensadas para o projeto são muito legais mas o código não esta funcionando corretamente e não temos mais muito tempo, o que devemos fazer?',
        option1: 'Tentar resolver a implementação das melhorias, elas ficarão incríveis no projeto',
        option2: 'Descartar as melhorias e entregar o projeto conforme o original',
        nextStep1: 12,
        nextStep2: 15,
        isEnd: false,
        points1: 10,
        points2: 40
    },
    {
        id: 12,
        question: 'Após algumas tentativas o código funcionou corretamente mas um tempo extra foi necessário. O código esta pronto, só não testamos tudo e estamos um pouco atrasados, o que devemos fazer?',
        option1: 'Entregar o código somente após revisar tudo, com um pouco de atraso',
        option2: 'Entregar no prazo, sem revisar todo código',
        nextStep1: 13,
        nextStep2: 14,
        isEnd: false,
        points1: 30,
        points2: 15
    },
    {
        id: 13,
        question: 'O projeto foi entregue com 2h de atraso mas você conseguiu avisar o cliente sobre essa alteração no prazo e ele entendeu a necessidade. Ele ficou satisfeito com o resultado final e a revisão evitou que possíveis bugs fossem para produção!',
        option1: '',
        option2: '',
        isEnd: true
    },
    {
        id: 14,
        question: 'O projeto foi entregue no prazo porem após alguns minutos no ar, o site começou a apresentar alguns bugs. O cliente não ficou feliz com o resultado e solicitou uma revisão com máxima urgência. Agora você terá que utilizar o seu tempo de descanso ou mesmo o tempo que estaria dedicado em outro projeto para arrumar os bugs',
        option1: '',
        option2: '',
        isEnd: true
    },
    {
        id: 15,
        question: 'Embora as melhorias fossem ficar sensacionais no projeto a decisão de descartar elas agora foi mais prudente, será possível oferecer essas melhorias como um adicional no futuro para o cliente! O cliente ficou muito satisfeito com o resultado final!',
        option1: '',
        option2: '',
        isEnd: true
    },

];

startGame(ivanzito);