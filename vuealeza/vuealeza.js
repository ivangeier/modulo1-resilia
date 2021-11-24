var vuealeza = [
    {
        // id: 0,
        question: 'Hoje é o primeiro dia de trabalho da Vuealeza na nova empresa, ela esta muito ansiosa para conhecer os colegas de trabalho e começar a codar logo para mostrar suas habilidades. Vamos ajudá-la no seu primeiro dia de trabalho?',
        option1: 'Sim, com certeza!',
        option2: 'É pra já, roda logo essa bagaça aí!',
        nextStep1: 1,
        nextStep2: 1,
        isEnd: false,
        points1: 0,
        points2: 10
    },
    {
        // id: 1,
        question: 'Vuealeza chegou a empresa e logo foi recebida pelo gerente de projeto responsável do time. Ele apresenta a mesa de trabalho e entrega o kit de boas vindas com o notebook, teclado, mouse e blá blá blá! Como Vuealeza reagiu a esse acolhimento?',
        option1: 'Fazer uma dancinha de alegria em frente a mesa e agradecer a todos pela acolhida!',
        option2: 'Agradecer pessoalmente a todos do time com um aperto de mão',
        nextStep1: 2,
        nextStep2: 6,
        isEnd: false,
        points1: 15,
        points2: 20
    },
    {
        // id: 2,
        question: 'Todos acharam a dancinha muito engraçada e isso criou um clima mas leve no time, o time ficou até mais produtivo. Vuealeza recebeu sua primeira tarefa do dia, criar o código muito simples para executar uma tarefa específica no sistema. Como devemos fazer esse código?',
        option1: 'Essa é moleza, vamos fazer de olhos fechados digitando com os dedos dos pés',
        option2: 'Pegar uma jarra de café , ligar um heavy metal nos fones e criar um código perfeito!',
        nextStep1: 3,
        nextStep2: 7,
        isEnd: false,
        points1: 20,
        points2: 30
    },
    {
        // id: 3,
        question: 'Todos acharam a cena bizarra mas Vuealeza é muito boa, ela conseguiu fazer um código OK com os pés, inclusive sua colega de trabalho até pediu o contato da pedicure, as unhas estavam impecáveis! Na próxima tarefa foi pedido que fosse desenvolvido algo em uma ferramenta que Vuealeza ainda não domina tanto assim, o que ela faz?',
        option1: 'Descobrir como fazer tudo sozinha',
        option2: 'Solicita um apoio dos colegas com a nova ferramenta',
        nextStep1: 4,
        nextStep2: 5,
        isEnd: false,
        points1: 60,
        points2: 70
    },
    {
        // id: 4,
        question: 'Vuealeza é muito fera em tudo que faz, ela conseguiu finalizar a tarefa solicitada com maestria mas com um pouco de atraso, nada que prejudicasse o andamento do restante do projeto! Parabéns Vuealeza tirou de letra esse dia!',
        option1: '',
        option2: '',
        isEnd: true
    },
    {
        // id: 5,
        question: 'Com o apoio dos colegas de trabalho Vuealieza finalizou a tarefa de forma muito mais rápida e eficiente.  O gerente ficou tão impressionada com o desempenho que até deu o resto do dia de folga pra ela! Vuealeza detonou no primeiro dia!!',
        option1: '',
        option2: '',        
        isEnd: true
    },
    {
        // id: 6,
        question: 'Todos adoraram a simpatia de Vuealeza, ela foi muito bem recebida e esta super animada para primeira tarefa. Foi solicitado a criação de um código super complexo mas ela domina o assunto, como devemos fazer esse código?',
        option1: 'Essa é moleza, vamos fazer de olhos fechados digitando com os dedos dos pés',
        option2: 'Pegar uma jarra de café , ligar um heavy metal nos fones e criar um código perfeito!',
        nextStep1: 3,
        nextStep2: 7,
        isEnd: false,
        points1: 20,
        points2: 30
    },
    {
        // id: 7,
        question: 'Ultra motivada com o seu som tocando no volume máximo e litros de café consumidos Vuealeza entrega a sua tarefa com muita rapidez e eficiência.Na próxima tarefa foi pedido que fosse desenvolvido algo em uma ferramenta que Vuealeza ainda não domina tanto assim, o que ela faz?',
        option1: 'Descobre como fazer tudo sozinha',
        option2: 'Solicita um apoio dos colegas com a nova ferramenta',
        nextStep1: 4,
        nextStep2: 5,
        isEnd: false,
        points1: 60,
        points2: 70
    }
];

startGame(vuealeza);