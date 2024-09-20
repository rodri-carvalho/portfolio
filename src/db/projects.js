const projects = [
	{
		id: 0,
		title: "Marketplace de Imóveis",
		projectURL: "https://maketplace-de-imoveis.vercel.app/",
		repoURL: "https://github.com/rodri-carvalho/maketplace-de-imoveis",
		projectPic: "/assets/pics/projects/house-marketplace.jpg",
		description: [
			"Projeto React de um Marketplace de imóveis completo que permite a autenticação, criação, edição e visualização de anúncios. Foram combinadas diversas tecnologias e práticas modernas para criar uma aplicação web rica e funcional. Utilizando Tailwind CSS com DaisyUI para estilização, o projeto oferece uma interface limpa e responsiva, adaptável a diferentes dispositivos. A autenticação e o gerenciamento de usuários são realizados através do Firebase Authentication, integrando tanto o login tradicional por email e senha quanto o login via OAuth com Google, além de proteger rotas específicas com componentes customizados como o PrivateRoute. A exibição dinâmica de conteúdos, como o slider de itens recomendados, é implementada utilizando a biblioteca Swiper, criando uma experiência interativa para o usuário.",
			"Os principais desafios enfrentados neste projeto envolveram a integração das funcionalidades de autenticação com o gerenciamento de estados no React, garantindo que a navegação e a proteção de rotas fossem executadas de maneira fluida e segura. Além disso, foi necessário garantir que o design responsivo funcionasse corretamente com as personalizações do Tailwind CSS e integração do DaisyUI, atendendo a diferentes tamanhos de tela. Já a integração com o Firebase, tanto para autenticação quanto para a manipulação de dados na Firestore, exigiu uma compreensão sólida das práticas recomendadas para garantir segurança e desempenho.",
			"Este projeto proporcionou um aprendizado significativo na construção de aplicações web modernas e escaláveis, destacando a importância de uma arquitetura bem definida e do uso de ferramentas adequadas para cada funcionalidade. A superação dos desafios técnicos reforçou habilidades em gerenciamento de estado, roteamento seguro e design responsivo, resultando em uma aplicação completa que entrega uma experiência de usuário satisfatória, seja na usabilidade, seja no design.",
		],
	},
	{
		id: 1,
		title: "Suporte ao Usuário",
		projectURL: "https://suporte-ao-usuario.onrender.com/",
		repoURL: "https://github.com/rodri-carvalho/suporte-ao-usuario",
		projectPic: "/assets/pics/projects/suporte-ao-usuario.jpg",
		description: [
			"Este projeto destaca-se pelo desenvolvimento de um backend robusto e eficiente, responsável por gerenciar toda a lógica de suporte ao usuário, abertura e acompanhamento de tickets/ocorrências e seus respectivos estados de resolução. A criação e integração de uma API RESTful foram essenciais para garantir uma comunicação fluida entre o frontend e o backend, proporcionando operações seguras e em tempo real. O sistema de autenticação foi desenvolvido utilizando JWT (JSON Web Tokens), garantindo que cada solicitação enviada pelos usuários estivesse devidamente autenticada e autorizada. Além disso, as rotas protegidas, gerenciadas pelo backend, asseguram que apenas usuários autenticados possam acessar áreas sensíveis da aplicação, garantindo a segurança e integridade dos dados.",
			"O maior desafio deste projeto foi a implementação de uma lógica sólida no server side para autenticação e autorização de usuários, aliada à gestão do estado global via Redux no frontend. No backend, foi essencial desenvolver e estruturar um sistema de middleware para verificar tokens de autenticação em cada requisição e proteger as rotas privadas. Também foi fundamental implementar um sistema de registro e tratamento de erros que possibilitasse feedback em tempo real para o usuário, fornecendo respostas claras e imediatas por meio de notificações. Esta abordagem resultou em uma aplicação com um backend confiável, escalável e seguro.",
			"Este projeto foi um marco no meu aprendizado sobre o desenvolvimento de backend, contribuindo significativamente para minha expertise em autenticação e roteamento seguro. A construção de um sistema backend escalável e seguro me ensinou lições valiosas sobre a importância da arquitetura e da proteção de dados sensíveis. O backend não só facilitou a interação do usuário com o sistema, mas também garantiu que as operações fossem realizadas de maneira segura, rápida e eficiente, resultando em uma aplicação que oferece tanto uma experiência de uso otimizada quanto de segurança em um bom nível.",
		],
	},
	{
		id: 2,
		title: "Buscador GitHub",
		projectURL: "https://buscador-github-seven.vercel.app/",
		repoURL: "https://github.com/rodri-carvalho/buscador-github",
		projectPic: "/assets/pics/projects/buscador-github.jpg",
		description: [
			"Projeto que aproveita o poder do React Router para gerenciar a navegação entre as diferentes páginas da aplicação, permitindo a busca de usuários do GitHub. A integração com a API do GitHub permite a busca e exibição de perfis, repositórios e outras informações pertinentes aos usuários, possibilidando ainda o direcionamento do usuário para o repertório desejado. Além disso, é empregado o Context para gerenciar o estado global da aplicação, utilizando os Providers de contexts personalizados, como o GithubProvider e o AlertProvider, para fornecer dados e funcionalidades a vários componentes sem a necessidade de passar props manualmente por cada nível de hierarquia, tornando o código mais limpo, compreensível e mantível.",
			"Um dos principais desafios enfrentados durante o desenvolvimento deste projeto foi a implementação de um sistema robusto de gerenciamento de estado, especialmente ao lidar com a comunicação assíncrona com a API buscada. Utilizar useEffect para carregar dados de forma eficiente e garantir que a interface do usuário responda corretamente durante os períodos de carregamento foi um aprendizado significativo. A implementação de mensagens de alerta dinâmicas e a adaptação da interface para lidar com resultados inesperados, como páginas não encontradas, também apresentaram desafios interessantes que exigiram soluções criativas.",
			"A conclusão deste projeto trouxe não apenas uma maior compreensão sobre o uso avançado do React, mas também uma valorização das práticas de design responsivo e da arquitetura de componentes modulares. A superação das dificuldades técnicas, como o manejo de múltiplos contexts e a integração eficiente com APIs externas, consolidou um conjunto de habilidades que são essenciais para o desenvolvimento de aplicações web modernas e escaláveis. Projeto que reflete a capacidade de entregar soluções completas, robustas e bem estruturadas.",
		],
	},
	{
		id: 3,
		title: "App de Feedback",
		projectURL: "https://main--projeto-feedback.netlify.app/",
		repoURL: "https://github.com/rodri-carvalho/feedback-app",
		projectPic: "/assets/pics/projects/feedback.jpg",
		description: [
			"Projeto no qual desenvolvi um sistema de avaliação de serviços ou produtos, utilizando uma combinação de tecnologias atuais, das quais dentre as principais podemos citar React Router para navegação entre páginas, Context API para gerenciamento de estado, e Framer Motion para animações de elementos na interface. A integração dessas ferramentas permitiu criar uma aplicação dinâmica e responsiva, onde os usuários podem adicionar, editar e deletar feedbacks em tempo real, com uma experiência de usuário fluida e intuitiva.",
			"Entre os principais desafios enfrentados, destaco a implementação do gerenciamento de estado global com a Context API, especialmente ao lidar com as operações de CRUD (Create, Read, Update, Delete). Outro desafio significativo foi garantir que a interface fosse responsiva e mantivesse a integridade dos dados durante a transição entre as diferentes operações. Esses obstáculos foram superados através de uma abordagem iterativa, onde refatorei o código para otimizar o desempenho e melhorar a usabilidade.",
			"Este projeto proporcionou um aprendizado valioso, principalmente no que se refere à aplicação prática de conceitos avançados de React, como hooks e context, além do uso de bibliotecas externas para enriquecer a experiência do usuário. A conclusão deste projeto fortaleceu minha habilidade em desenvolver aplicações React completas, do front-end ao gerenciamento de estado, preparando-me para desafios ainda maiores na área de desenvolvimento de software.",
		],
	},
];

export default projects;
