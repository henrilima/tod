const perguntasWTF = [
    "Qual é o seu fetiche mais estranho?",
    "O que você faria se encontrasse seu ex pelado em sua cama?",
    "Você já traiu alguém? Como se sentiu depois?",
    "Qual foi a coisa mais suja que você já fez durante o sexo?",
    "Você já teve fantasias sexuais com algum amigo ou amiga?",
    "O que você faria se acordasse um dia no corpo do sexo oposto?",
    "Qual é a coisa mais estranha que você já comeu?",
    "Você já fingiu um orgasmo? Por quê?",
    "Qual é o lugar mais louco que você já fez sexo?",
    "Você já usou brinquedos sexuais? Quais?",
    "Você já transou com alguém do mesmo sexo?",
    "Qual foi a coisa mais idiota que você já fez por amor?",
    "Você já ficou com alguém por interesse?",
    "Qual foi a pior experiência sexual que você já teve?",
    "Você já se envolveu com alguém que era comprometido?",
    "Qual foi o lugar mais constrangedor em que você soltou pum?",
    "Qual foi a coisa mais ridícula que você já fez para chamar a atenção de alguém?",
    "Qual é o seu tipo ideal de parceiro sexual?",
    "Você já enviou nudes? Para quem?",
    "Você já assistiu pornô? Qual é o seu gênero favorito?",
    "Qual é a coisa mais estranha que você já fez enquanto estava bêbado(a)?",
    "Você já mentiu para seus pais sobre estar em um encontro?",
    "Qual foi a última vez que você chorou?",
    "Você já foi pego(a) em flagrante fazendo algo que não deveria?",
    "Você já se envolveu em uma briga física? Por quê?",
    "Você já usou drogas? Qual foi a sua experiência?",
    "Qual é o seu maior medo?",
    "Qual é a coisa mais embaraçosa que já aconteceu com você em público?",
    "Você já traiu um amigo?",
    "Qual foi a coisa mais estúpida que você já fez quando estava apaixonado(a)?",
    "Qual foi o pior encontro que você já teve?",
    "Você já teve uma queda por alguém do mesmo sexo?",
    "Qual é a sua maior fantasia sexual?",
    "Você já usou um aplicativo de namoro? Qual foi a sua experiência?",
    "Você já se apaixonou por alguém que não era o que parecia?",
    "Qual é a coisa mais romântica que alguém já fez por você?",
    "Qual foi a sua maior conquista até agora?",
    "Qual é o seu maior arrependimento?",
    "Você já usou algum aplicativo para vigiar o seu/sua parceiro(a)?",
    "Qual foi o pior emprego que você já teve?",
    "Você já teve um sonho erótico? Com quem?",
    "Qual foi a maior loucura que você já fez por amor?",
    "Qual foi a última mentira que você contou?",
    "Qual é o seu maior segredo?",
    "Qual é o seu maior vício?",
    "Qual é a coisa mais ilegal que você já fez?",
    "Qual é o seu maior arrependimento de infância?",
    "Qual é a coisa mais assustadora que você já enfrentou?",
    "Você já fez sexo em um local público?",
    "Qual foi a coisa mais engraçada que já aconteceu com você durante o sexo?",
    "Você já fingiu ser outra pessoa na internet? Por quê?",
    "Qual é a sua posição sexual favorita?",
    "Você já sentiu atração por um professor(a) ou superior(a) no trabalho?",
    "Qual foi a pior experiência de relacionamento que você já teve?",
    "Você já se apaixonou por alguém que morava longe?",
    "Qual é o seu maior trauma?",
    "Qual foi a última coisa que você pesquisou no Google?",
    "Qual é a coisa mais embaraçosa que você já postou nas redes sociais?",
    "Qual é a sua opinião sobre sexo casual?",
    "Qual é o seu maior desejo sexual que ainda não realizou?",
    "Você já fez sexo com mais de uma pessoa ao mesmo tempo?",
    "Qual foi o melhor presente que você já ganhou?",
    "Qual é o seu maior talento?",
    "Você já traiu um parceiro? Por quê?",
    "Qual foi a coisa mais estranha que alguém já fez por você?",
    "Você já teve uma experiência sobrenatural?",
    "Qual é o seu tipo de filme pornô favorito?",
    "Qual é a coisa mais ilegal que você faria se soubesse que não seria pego(a)?",
    "Qual é a sua opinião sobre relacionamentos abertos?",
    "Você já teve um sonho que se realizou?",
];

const perguntasConstrangedoras = [
    "Qual é a coisa mais estranha que você já comeu?",
    "Qual foi a última vez que você fingiu estar doente para não ter que ir ao trabalho ou à escola?",
    "Você já enganou alguém para conseguir o que queria?",
    "Qual é a coisa mais embaraçosa que já aconteceu com você em um local público?",
    "Qual é a sua maior insegurança?",
    "Você já traiu um amigo?",
    "Qual é a coisa mais ilegal que você já fez?",
    "Você já teve um amor platônico? Quem era?",
    "Qual foi a sua pior experiência sexual?",
    "Você já se envolveu com alguém só por interesse?",
    "Qual é a coisa mais estranha que você já fez na frente do espelho?",
    "Qual é a coisa mais embaraçosa que já aconteceu com você em um encontro?",
    "Qual é o maior segredo que você já guardou?",
    "Você já sabotou alguém? Por quê?",
    "Qual foi a pior experiência de trabalho que você já teve?",
    "Qual é a sua opinião sobre sexo casual?",
    "Qual é a coisa mais ilegal que você faria se soubesse que não seria pego(a)?",
    "Qual foi a maior mentira que você já contou para os seus pais?",
    "Você já se arrependeu de ter ficado com alguém?",
    "Qual é a coisa mais estranha que você já fez por dinheiro?",
    "Qual é o seu maior vício?",
    "Qual foi a última vez que você se apaixonou?",
    "Qual é a sua maior fantasia sexual?",
    "Você já fingiu um orgasmo? Por quê?",
    "Qual é a coisa mais constrangedora que você já fez em um encontro?",
    "Qual foi a sua pior experiência de viagem?",
    "Qual é a coisa mais estranha que você já fez por amor?",
    "Você já traiu alguém?",
    "Qual é a coisa mais vergonhosa que você já fez em nome do amor?",
    "Qual foi a sua maior decepção amorosa?",
    "Você já teve um sonho erótico com alguém que não deveria?",
    "Qual é a coisa mais estranha que você já fez para economizar dinheiro?",
    "Qual é o pior hábito que você tem?",
    "Você já ficou com uma pessoa só porque estava entediado(a)?",
    "Qual foi a última vez que você chorou e por quê?",
    "Qual é a sua maior loucura?",
    "Você já foi demitido(a) de um emprego? Por quê?",
    "Você já enviou uma mensagem ou e-mail para a pessoa errada? O que estava escrito?",
    "Qual é a coisa mais estranha que você já comeu?",
    "Você já foi pego(a) assistindo pornografia? Por quem?",
    "Qual é o seu maior arrependimento amoroso?",
    "Qual foi a maior mentira que você já contou?",
    "Qual é o seu maior segredo?",
    "Você já roubou alguma coisa? O que era?",
    "Qual foi a coisa mais embaraçosa que você já fez em público?",
    "Você já se envolveu em brigas físicas? Por que?",
    "Você já traçou um plano para vingar-se de alguém? O que aconteceu?",
    "Qual é a sua maior fraqueza?",
    "Você já sentiu atração por alguém muito mais velho ou mais novo do que você? Como lidou com isso?",
];

const desafiosConstrangedores = [
    "Mandar uma mensagem para o crush confessando seus sentimentos",
    "Enviar uma mensagem para um ex pedindo para voltar",
    "Enviar uma mensagem para um familiar com uma declaração de amor",
    "Enviar uma mensagem para uma pessoa aleatória pedindo um encontro",
    "Enviar uma mensagem para um número aleatório pedindo conselhos amorosos",
    "Mandar uma mensagem para um amigo fingindo ser seu pai/mãe",
    "Enviar uma mensagem para o melhor amigo confessando que sempre teve uma queda por ele/ela",
    "Mandar uma mensagem para o ex do seu/sua melhor amigo/a perguntando sobre o relacionamento deles",
    "Enviar uma mensagem para um ex perguntando se ele/ela quer voltar",
    "Enviar uma mensagem para o/a crush pedindo conselhos amorosos",
    "Mandar uma mensagem para um desconhecido perguntando se ele/ela quer ser seu/sua amigo/a",
    "Enviar uma mensagem para um crush perguntando se ele/ela já foi traído/a",
    "Enviar uma mensagem para um ex perguntando se ele/ela ainda tem sentimentos por você",
    "Mandar uma mensagem para um desconhecido pedindo para ele/ela te ensinar a dançar",
    "Enviar uma mensagem para um ex falando que sonhou com ele/ela na noite anterior",
    "Finja que está conversando com uma pessoa invisível por 5 minutos.",
    "Tire uma foto sua fazendo careta e mande para um amigo.",
    "Mande uma mensagem para uma pessoa da roda dizendo que você sonhou com ela.",
    "Tire uma foto sua fazendo um gesto obsceno e mande para um amigo.",
    "Tire uma selfie fazendo biquinho e mande para um amigo.",
    "Fale com o jeito do seu professor favorito.",
    "Dê um beijo na bochecha de um outro jogador.",
    "Na próxima aula, fale uma frase engraçada em vez de responder quando um professor fizer uma pergunta.",
];

const desafiosPesados = [
    "Ligue para um ex e finja que quer voltar com ele/ela.",
    "Faça uma chamada de vídeo com um estranho e finja que está tendo uma conversa íntima com ele/ela.",
    "Publique em suas redes sociais algo constrangedor ou humilhante sobre você.",
    "Beije um objeto escolhido pelos outros jogadores.",
    "Ligue para um amigo e faça uma declaração de amor para ele/ela.",
    "Mande uma mensagem de texto para um amigo contando um segredo constrangedor.",
    "Passe uma mensagem íntima para o seu crush.",
    "Tente seduzir alguém na roda.",
  ];

  const perguntasVotacao = [
    "Quem é o mais provável de ter feito/fazer uma tatuagem íntima?",
    "Quem é o mais provável de ter um vibrador?",
    "Quem é o mais provável de ter ido/ir a um clube de strip?",
    "Quem é o mais provável de ter feito/fazer um vídeo íntimo?",
    "Quem é o mais provável de ter experimentado/experimentar BDSM?",
    "Quem é o mais provável de ter se envolvido/se envolver em uma relação poliamorosa?",
    "Quem é o mais provável de ter eviado/enviar fotos nuas para alguém?",
    "Quem é o mais provável de ter sido/ser pego se masturbando?",
    "Quem é o mais provável de ter um sonho erótico com alguém da roda?",
    "Quem é o mais provável de ter feito/fazer sexo em um lugar público?",
    "Quem é o mais provável de ter fantasias sexuais estranhas?",
    "Quem é o mais provável de ter feito/fazer sexo por telefone ou vídeo?",
    "Quem é o mais provável de ter feito/fazer sexo em grupo?",
    "Quem é o mais provável de ter se masturbado/se masturbar pensando em alguém da roda?",
    "Quem é o mais provável de ter assistido a pornografia com um amigo?",
    "Quem é o mais provável de ter experimentado/experimentar drogas?",
    "Quem é o mais provável de ter usado/querer usar brinquedos sexuais com um parceiro?",
    "Quem é o mais provável de ter feito/fazer sexo em um carro?",
    "Quem é o mais provável de ter se envolvido/se envolver em uma relação aberta?",
    "Quem é o mais provável de ter feito/fazer sexo sem camisinha?",
    "Quem é o mais provável de ter feito/fazer um ménage?",
    "Quem é o mais provável de ter feito/fazer sexo com um estranho?",
    "Quem é o mais provável de ter usado/usar um site de encontros para sexo?",
    "Quem é o mais provável de ter feito/fazer sexo em um avião?",
    "Quem é o mais provável de ter feito/fazer sexo em um banheiro público?",
    "Quem é o mais provável de ter assistido/assistir a pornografia na escola/trabalho?",
    "Quem é o mais provável de ter um relacionamento com alguém muito mais velho?",
    "Quem é o mais provável de ter um relacionamento com alguém muito mais novo?",
];