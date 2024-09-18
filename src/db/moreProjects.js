const moreProjects = [
	{
		id: 0,
		title: "Landing Page",
		projectURL: "https://a-generic-landing-page.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/landing.jpg",
		description:
			"Landing page de uma agência fictícia com menu interativo, elementos dinâmicos, links funcionais, informações e mídias diversas.",
	},
	{
		id: 1,
		title: "Gerador de Conselhos",
		projectURL: "https://um-gerador-de-conselhos.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/gerador.jpg",
		description:
			"Card que utiliza o método fetch() para buscar, a partir de uma API, e gerar aleatoriamente conselhos genéricos.",
	},
	{
		id: 2,
		title: "Home Page",
		projectURL: "https://huddle-page-rouge.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/huddle.jpg",
		description:
			"Home page na qual foi utilizado CSS para apresentar diversos elementos dinâmicos e interativos.",
	},
	{
		id: 3,
		title: "Formulário de Contato",
		projectURL: "https://formulario-de-contato-gray.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/formulario.jpg",
		description: "Formulário de contato com validação dos campos digitados e estilização dinâmica.",
	},
	{
		id: 4,
		title: "Busca de usuários GitHub",
		projectURL: "https://um-projeto-fetch-github.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/projeto-fetch.jpg",
		description:
			"Projeto utilizando fetch() para a busca de usuários GitHub, apresentando diversas informações do perfil e os repositórios do usuário, permitindo o acesso direto aos repos.",
	},
	{
		id: 5,
		title: "Card NFT",
		projectURL: "https://a-nft-card.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/nft.jpg",
		description: "Exemplo de Card NFT de Criptomoeda genérica para a prática de CSS.",
	},
	{
		id: 6,
		title: "App de Filmes",
		projectURL: "https://movie-app-omega-virid-14.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/movie-app.jpg",
		description:
			"Aplicativo sempre atualizado que utiliza uma API de filmes e séries para apresentar a sinopse e avaliação atual das obras.",
	},
	{
		id: 7,
		title: "Landing Page Dividida",
		projectURL: "https://split-landing-page-cp74te6xi-rodri-carvalhos-projects.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/split.jpg",
		description:
			"Split Landing Page que permite que o usuário interaja com o layout navegando com o mouse entre as opção apresentadas.",
	},
	{
		id: 8,
		title: "Cards Expansíveis",
		projectURL: "https://expanding-cards-livid.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/expanding.jpg",
		description:
			"Sequência de cards expansíveis que são automaticamente retraídos quando outro card é selecionado.",
	},
	{
		id: 9,
		title: "Relógio com tema",
		projectURL: "https://theme-clock-pi.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/clock.jpg",
		description:
			"Relógio feito manualmente que utiliza o objeto Date() para buscar e apresentar as informações gerais de data e hora, atualizado a cada segundo, com opção de selecionar entre os temas dark e light.",
	},
	{
		id: 10,
		title: "Slider",
		projectURL: "https://background-slider-three.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/slider.jpg",
		description:
			"Slider que apresenta imagens com um background responsivo que complementa as imagens principais à medida em que são passadas.",
	},
	{
		id: 11,
		title: "Progresso",
		projectURL: "https://progress-steps-blue.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/progress.jpg",
		description:
			"Medidor de progresso elaborado manualmente que é preenchido proporcionalmente conforme o usuário utiliza o botão de avançar.",
	},
	{
		id: 12,
		title: "Contador de Status",
		projectURL: "https://incrementing-counter-five.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/counter.jpg",
		description:
			"Contador automático de status gerais de redes sociais (seguidores, inscritos, etc) que é iterado simultânea e proporcionalmente até que todos os contadores atinjam, juntos, o número atual a ser apresentado.",
	},
	{
		id: 13,
		title: "App de Hidratação",
		projectURL: "https://drink-water-mu.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/water.jpg",
		description:
			"Aplicativo totalmente interativo para controle de ingestão diária de água, apresentando a quantidade ingerida e a quantidade restante para alcançar a meta.",
	},
	{
		id: 14,
		title: "Formulário animado",
		projectURL: "https://form-wave-animation-ten.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/wave.jpg",
		description:
			"Formulário que apresenta animação de onda no campo selecionado, passando o placeholder a dar espaço ao valor a ser inserido pelo usuário.",
	},
	{
		id: 15,
		title: "FAQ",
		projectURL: "https://faq-collapse-nine.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/faq.jpg",
		description: "Lista de perguntas frequentes expansíveis e retráteis.",
	},
	{
		id: 16,
		title: "Sorteador de opções",
		projectURL: "https://random-choice-picker-jet.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/random.jpg",
		description:
			"Sorteador que seleciona uma das opções inseridas pelo usuário de forma aleatória.",
	},
	{
		id: 17,
		title: "Navegação Animada",
		projectURL: "https://animated-navigation-zeta.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/animated-nav.jpg",
		description: "Menu interativo com animação de expansão quando selecionada sua abertura.",
	},
	{
		id: 18,
		title: "Carregamento com Blur",
		projectURL: "https://blurry-loading-alpha.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/blurry.jpg",
		description:
			"Imagem que abre com blur em 100% e vai sendo revelada à medida em que a contagem percentual é acrescida.",
	},
	{
		id: 19,
		title: "Animação de Scroll",
		projectURL: "https://scroll-animation-psi-eight.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/scroll.jpg",
		description:
			"Animação que faz os elementos surgirem de lados intercalados à medida em que o scroll é realizado.",
	},
	{
		id: 20,
		title: "Soundboard",
		projectURL: "https://soundboard-amber-one.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/soundboard.jpg",
		description: "Botões sonoros que reproduzem o som indicado quando clicados.",
	},
	{
		id: 21,
		title: "Identificador de Teclas",
		projectURL: "https://event-key-codes-eight.vercel.app/",
		projectPic: "/assets/pics/projects/other-projects/keycodes.jpg",
		description:
			"App que identifica a tecla pressionada, apresentando o código do evento, da tecla e a tecla em si.",
	},
];

export default moreProjects;
