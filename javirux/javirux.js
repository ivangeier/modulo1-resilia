var javirux = [
    {
        id: 0,
        question: 'Javirux foi alocada em uma equipe de um grande projerto da firma! Você será capaz de ajudá-la a concluir o projeto ?',
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
        question: 'Estamos na primeira reunião de equipe onde as especificações do projeto estão sendo passadas. Javirux não concorda com uma das especificações pois ela acredita que podem fazer algo mais estável e mais seguro se ajustarem esse ponto. Como devemos abordar esse conflito de ideias?',
        option1: 'Exigir a alteração no projeto a base do grito!',
        option2: 'Apresentar os pontos positivos da outra abordagem discutir com os colegas como isso pode impactar no projeto final para o cliente',
        nextStep1: 2,
        nextStep2: 7,
        isEnd: false,
        points1: 5,
        points2: 20
    },
    {
        id: 2,
        question: 'Após o ataque de fúria da Javirux durante a reunião para conseguir exigir as alterações no projeto o clima entre a equipe ficou muito tenso. O Supervisor do projeto chamou a Javirux para conversa e fez considerações sobre o comportamento dela. Ele também sugeriu ela pedir desculpas à equipe para que o clima pudesse voltar a ficar mais tranquilo. O que devemos fazer?',
        option1: 'Pedir desculpas a equipe!!',
        option2: ' Dar o braço a torcer e não pedir desculpa!',
        nextStep1: 3,
        nextStep2: 6,
        isEnd: false,
        points1: 40,
        points2: -5
    },
    {
        id: 3,
        question: 'Na semana seguinte o clima já ficou mais agradável entre a equipe, o projeto esta caminhando bem e em ritmo acelerado. No dia seguinte, foi encontrado um bug sinistro no código e a pessoa que encontrou esse bug não esta conseguindo resolver. O a Javirux fazer?',
        option1: 'Ajudar o colega a corrigir o bug que ele mesmo causou!',
        option2: 'Não ajudar, a final o bug não foi causado pela Javirux',
        nextStep1: 4,
        nextStep2: 5,
        isEnd: false,
        points1: 50,
        points2: 0
    },
    {
        id: 4,
        question: 'Graças a mente brilhante da Javirux o código foi salvo e entregue a tempo to prazo máximo, O cliente esta muito satisfeito com o resultado da equipe!',
        option1: '',
        option2: '',
        isEnd: true
    },
    {
        id: 5,
        question: 'O projeto foi concluído após 4 meses de atraso devido a esse super bug que foi encontrado e ninguém estava conseguindo corrigir. Sem contar que o projeto ainda esta com outros problemas e o cliente final  cancelou o contrato com a empresa',
        option1: '',
        option2: '',        
        isEnd: true
    },
    {
        id: 6,
        question: 'A equipe esta irritadíssima com a Javirux, o gerente do projeto não conseguiu controlar a situação. Para evitar uma rebelião e uma greve entre os colaboradores Javirux foi desligada da empresa!',
        option1: '',
        option2: '',
        isEnd: true
    },
    {
        id: 7,
        question: 'A equipe concordou com os pontos apresentados pela Javirux mas o gerente do projeto ainda sim permaneceu com as especificações solicitadas pelo cliente. O que devemos fazer?',
        option1: 'Ter um ataque de fúria, quebrar o notebook na mesa e ameaçar se demitir caso não sejam feitas as alterações, uma vez que não faria sentido não deixar o código mais seguro',
        option2: 'Exigir as alterações na base do grito',
        nextStep1: 6,
        nextStep2: 2,
        isEnd: false,
        points1: -20,
        points2: 5
    }
];

startGame(javirux);