const courses = [
	{
		id: 1,
		title: "DEV QUEST",
		subtitle: "Curso completo de Desenvolvimento Web Full Stack com mentoria",
		description: [
			"Este treinamento proporcionou uma imersão completa no desenvolvimento web full stack, capacitando-me a criar aplicações web modernas, robustas e escaláveis.",
			"Ao longo do curso extensivo com mentoria, aprendi a aplicar uma ampla gama de tecnologias e práticas essenciais, tanto no front-end quanto no back-end.",
			" O treinamento e mentoria foram cuidadosamente elaborados para me preparar para enfrentar os desafios do mercado de trabalho e para a criação soluções web inovadoras.",
		],
		learned:
			"• HTML5; • CSS3; • GIT/GITHUB; • Testes com JEST; • React; • Context; • Redux; • Typescript; • SQL; • HTTP; • Express; • Deploy; • Clean Code;",
		pic: "src/assets/pics/logos/dev-quest.png",
		inProgress: false,
		certificate: "src/assets/pics/certificates/courses/c-dev-quest-frontend.jpg",
		certificate2: "src/assets/pics/certificates/courses/c-dev-quest-backend.jpg",
		uniqueCertificate: false,
	},
	{
		id: 2,
		title: "The Complete Web Development Bootcamp",
		subtitle: "Curso integral frontend e backend com tutoria Web Dev",
		description: [
			"Neste curso, mergulhei ainda mais profundamente no desenvolvimento web, aprendendo desde os fundamentos até técnicas bem avançadas.",
			"O curso ensinou as ferramentas e tecnologias mais recentes utilizadas por grandes empresas. Foram trabalhados dezenas de projetos práticos, o que me proporcionou uma experiência de aprendizado completa e atualizada, tendo me preparado para me tornar um desenvolvedor web competente, oferecendo acesso a materiais de alta qualidade e a mesma metodologia dos maiores e melhores bootcamps presenciais do mundo, e adquirindo fluência no desenvolvimento web.",
		],
		learned:
			"• Desenvolvimento Web Front-End; • HTML 5; • CSS 3; • Flexbox; • Grid; • Bootstrap 5; • Javascript ES6; • Manipulação do DOM; • jQuery; • Linha de Comando Bash; • Git, GitHub e Controle de Versão; • Desenvolvimento Web Backend; • Node.js; • NPM; • Express.js; • EJS; • REST; • APIs; • Bancos de Dados; • SQL; • PostgreSQL; • Autenticação; • React.js; • React Hooks; • Design Web; • Deployment com GitHub Pages; • Desenvolvimento Web3 no Internet Computer; • Tecnologia Blockchain; • Desenvolvimento de contratos de token; • Lógica de cunhagem, compra e venda de NFTs;",
		pic: "src/assets/pics/logos/web_dev_bootcamp.jpg",
		inProgress: false,
		certificate: "src/assets/pics/certificates/courses/c-bootcamp.jpg",
		uniqueCertificate: true,
	},
	{
		id: 3,
		title: "NodeJS | Complete Guide (MVC, REST APIs, GraphQL, Deno)",
		subtitle: "Curso completo de backend com Node.js",
		description: [
			"Neste curso de Node.js, estou aprendendo a usar uma das linguagens de programação mais modernas e requisitadas para o desenvolvimento de backend.",
			"O curso abrange desde os conceitos básicos até os mais avançados de Node.js, me permitindo construir aplicações web modernas e escaláveis, além de trabalhar com bancos de dados SQL e MongoDB.",
			"A proposta é do desenvolvimento de duas grandes aplicações práticas, que me proporcionarão uma experiência realista e aprofundada. Também explorarei o ecossistema do Node.js e aprenderei a criar aplicações renderizadas no servidor, APIs REST e APIs GraphQL, bem como terei uma introdução ao DenoJS.",
		],
		learned:
			"• Noções Básicas de Node.js e Módulos Core Básicos; • Análise de Requisições e Envio de Respostas; • Renderização Dinâmica de HTML (no Servidor); • Uso do Express.js; • Trabalhando com Arquivos e Gerando PDFs no Servidor (em tempo real); • Upload e Download de Arquivos; • Uso do Padrão Model-View-Controller (MVC); • Uso de Node.js com SQL (MySQL) e Sequelize; • Uso de Node.js com NoSQL (MongoDB) e Mongoose; • Trabalhando com Sessões e Cookies; • Autenticação e Autorização de Usuário; • Envio de E-Mails; • Validação de Entrada do Usuário; • Paginação de Dados; • Manipulação de Pagamentos com Stripe.js; • Construção de APIs REST; • Autenticação em APIs REST; • Upload de Arquivos em APIs REST; • Construção de APIs GraphQL; • Autenticação em APIs GraphQL; • Upload de Arquivos em APIs GraphQL; • Construção de um App Node.js em Tempo Real com Websockets; • Testes Automatizados (Testes Unitários); • Deploy de uma Aplicação Node.js; • Uso de TypeScript com Node.js; • Explorando Deno.js;",
		pic: "src/assets/pics/logos/node.jpg",
		inProgress: true,
		certificate: "",
		uniqueCertificate: true,
	},

	{
		id: 4,
		title: "React Front to Back",
		subtitle: "Curso de React direcionado à elaboração de projetos Full Stack",
		description: [
			"Neste curso de React, aprendi desde os fundamentos básicos até conceitos avançados, cobrindo aspectos essenciais como componentes, hooks, props e state.",
			"Explorei o uso de APIs de terceiros, trabalhei com Firebase 9 para autenticação, consultas Firestore e armazenamento de arquivos, e desenvolvi habilidades em Redux e Redux Toolkit.",
			"O curso também abordou animações básicas com Framer Motion, implementação de mapas com Leaflet, sliders com Swiper, e criação de APIs REST.",
			"Além disso, tive a oportunidade de aprender a implantar aplicações React em Vercel e Netlify, bem como a manejar o estado global com Context, Reducers e hooks. Foi sem dúvidas uma base sólida para avançar para tópicos mais avançados em MERN.",
		],
		learned:
			"• Fundamentos do React, incluindo componentes, props, hooks, estado, etc; • Hooks do React, como useState, useEffect, useContext, useReducer, useRef, etc; • Criação de hooks personalizados; • React Router v6 (última versão); • Como lidar com estado global com context, reducers e hooks; • Autenticação, consultas e armazenamento no Firebase 9; • Deploy de apps React no Vercel e Netlify; • Animação Básica com Framer Motion; • Implementação de mapas com Leaflet e sliders com Swiper; • Fullstack MERN (MongoDB, Express, React, Node.js); • Criação de APIs REST; • Redux; • Redux Toolkit; • Autenticação com JWT;",
		pic: "src/assets/pics/logos/react.jpg",
		inProgress: false,
		certificate: "src/assets/pics/certificates/courses/c-react.jpg",
		uniqueCertificate: true,
	},

	{
		id: 5,
		title: "Understanding TypeScript",
		subtitle: "Curso de funções avançadas de Typescript",
		description: [
			"Neste curso estão sendo ensinados recuros avançados dessa poderosa extensão do JavaScript. Exploro como o TypeScript melhora o código JavaScript, ajuda a evitar erros e bugs, e como ele é amplamente adotado por grandes bibliotecas e frameworks, como Angular e React.",
			"O curso cobre tipos e como usá-los, o funcionamento do compilador TypeScript, recursos do ES6, classes, namespaces, módulos, interfaces, generics e decorators. Estou aprendendo a integrar bibliotecas JavaScript de terceiros em projetos TypeScript e a configurar workflows com TypeScript e Webpack.",
			"Também estou praticando a aplicação do TypeScript em projetos reais, tanto com React quanto com Node/Express, através de exercícios e estudos de caso, o que me proporciona uma compreensão prática detalhada das vantagens e funcionalidades dessa linguagem.",
		],
		learned:
			"• Tipos e como usá-los; • Como o compilador TypeScript funciona (e como você pode configurá-lo); • Recursos do ES6 com TypeScript; • Classes em TypeScript; • Namespaces e módulos; • Interfaces; • Generics; • Decoradores; • Como integrar bibliotecas JavaScript de terceiros em seus projetos TypeScript; • Como configurar um projeto TypeScript com webpack; • Ou como configurar um workflow de TypeScript simples; • Como usar TypeScript junto com ReactJS; • Como usar TypeScript junto com Node/Express; • Projetos reais e casos de uso;",
		pic: "src/assets/pics/logos/typescript.jpg",
		inProgress: true,
		certificate: "",
		uniqueCertificate: true,
	},
	{
		id: 6,
		title: "Tailwind CSS from Scratch",
		subtitle: "Curso completo de Tailwind CSS",
		description: [
			"Neste curso prático, aprendi a criar layouts impressionantes usando o framework Tailwind CSS e a trabalhar de forma eficiente com classes utilitárias, em contraste com frameworks baseados em componentes como DaisyUI e Bootstrap.",
			"Desenvolvi habilidades para criar e editar layouts de forma rápida, construir mini-projetos e projetos inteiros de sites, e configurar um ambiente de desenvolvimento usando o Tailwind.",
			"Além disso, aprendi a personalizar estilos para criar layouts sob medida, aplicando as técnicas e ferramentas aprendidas nos vários exemplos de projetos reais explorados.",
		],
		learned:
			"• Aprenda a criar e editar layouts super rápido; • Aprenda as classes utilitárias do Tailwind usando um sandbox de código; • Construa 5 mini-projetos e 6 projetos de sites; • Aprenda a configurar um ambiente de desenvolvimento usando o Tailwind CLI; • Configure seus estilos para criar layouts personalizados;",
		pic: "src/assets/pics/logos/tailwind.jpg",
		inProgress: false,
		certificate: "src/assets/pics/certificates/courses/c-tailwind.jpg",
		uniqueCertificate: true,
	},
	{
		id: 7,
		title: "Modern JavaScript from the Beginning",
		subtitle: "Curso Americano sobre JavaScript, bibliotecas e frameworks",
		description: [
			"Neste curso de JavaScript, aprendi desde os fundamentos básicos como tipos de dados, funções e loops, até conceitos avançados como manipulação do DOM, JavaScript assíncrono com promises e async/await.",
			"Explorei a fundo como o JavaScript funciona internamente, incluindo contexto de execução, call stack e loop de eventos. Aprendi sobre ferramentas de desenvolvimento como Webpack e como criar um ambiente de desenvolvimento moderno.",
			"O curso também abordou estruturas de dados, orientação a objetos, tratamento de erros, Web e Browser APIs, além de testes unitários com Jest.",
			"Aprendi o desenvolvimento completo de uma API com Node.js e Express, juntamente com um frontend usando Webpack.",
		],
		learned:
			"• Noções Básicas e Fundamentais: Tipos de dados, variáveis let e const, funções, condicionais, loops, literais de objetos, etc; • Estruturas de Dados - Arrays, objetos, mapas, conjuntos, além de estruturas de dados personalizadas como pilhas e filas; • Manipulação do DOM - Seletores, navegação pelo DOM, mostrar/ocultar, criar e remover elementos, ouvintes de eventos; • POO - Funções construtoras, protótipos, herança, classes, propriedades protegidas, getters/setters; • JS Assíncrono - Ajax e XHR, Fetch API, callbacks, promises, async/await; • Manipulação de Erros - Try...Catch, erros HTTP; • APIs Web e do Navegador - Canvas, geolocalização, áudio/vídeo, API de animações web; • Módulos e Ferramentas - CommonJS e ES Modules, Webpack, plugins, loaders, ambiente de desenvolvimento moderno e workflow; • Testes Unitários de Algoritmos - Aprender a biblioteca de testes Jest e algoritmos como palíndromos e anagramas; • Node.js e Express - Aprender sobre módulos Node, pacotes NPM e construir uma API REST com Express e MongoDB; • Desenvolvimento Full Stack - Construímos uma API com Express e um frontend com Webpack.",
		pic: "src/assets/pics/logos/modern_js.jpg",
		inProgress: false,
		certificate: "src/assets/pics/certificates/courses/c-js.jpg",
		uniqueCertificate: true,
	},
];

export default courses;
