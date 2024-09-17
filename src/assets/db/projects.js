const projects = [
	{
		id: 0,
		title: "Marketplace de Imóveis",
		projectURL: "https://maketplace-de-imoveis.vercel.app/",
		repoURL: "https://github.com/rodri-carvalho/maketplace-de-imoveis",
		projectPic: "public/assets/pics/projects/house-marketplace.jpg",
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
		projectPic: "public/assets/pics/projects/suporte-ao-usuario.jpg",
		description: [
			"Mais um projeto React que simula uma interface de suporte ao usuário que permite a abertura e gerenciamento de tickets/ocorrências e seus respectivos estados para com o suporte técnico desejado. Esta implementação de um sistema de gerenciamento de ocorrências integra funcionalidades essenciais como autenticação, rotas protegidas e notificações de sucesso e erro. Utilizando o React Router Dom para o roteamento e Redux para o gerenciamento de estado, a aplicação se assegura que o usuário esteja autenticado antes de acessar rotas específicas, como a criação e visualização de ocorrências. A interface do usuário é enriquecida com o uso de React Icons e o sistema de notificações é gerenciado pela biblioteca React Toastify, proporcionando feedback visual imediato ao usuário a respeito de suas ações.",
			"Esse projeto foi desafiador no que diz respeito à criação de um fluxo de autenticação robusto e gestão eficaz do estado global utilizando Redux. A implementação das rotas privadas com o componente PrivateRoute, que verifica o status de autenticação do usuário antes de permitir o acesso, foi essencial para garantir a segurança da aplicação. Além disso, a integração do sistema de notificações com os estados de sucesso e erro do Redux exigiu uma lógica bem estruturada para garantir que os usuários sejam informados de maneira clara e precisa sobre as ações realizadas.",
			"Projeto que contribuiu significativamente para o desenvolvimento de habilidades em autenticação, roteamento seguro e gerenciamento de estado em aplicações React. A superação dos desafios técnicos fortaleceu o entendimento sobre como construir sistemas web seguros e responsivos, resultando em uma aplicação que não só atende às necessidades do usuário, mas também oferece uma experiência de uso não apenas intuitiva, mas eficiente.",
		],
	},
	{
		id: 2,
		title: "Buscador GitHub",
		projectURL: "https://buscador-github-seven.vercel.app/",
		repoURL: "https://github.com/rodri-carvalho/buscador-github",
		projectPic: "public/assets/pics/projects/buscador-github.jpg",
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
		projectPic: "public/assets/pics/projects/feedback.jpg",
		description: [
			"Projeto no qual desenvolvi um sistema de avaliação de serviços ou produtos, utilizando uma combinação de tecnologias atuais, das quais dentre as principais podemos citar React Router para navegação entre páginas, Context API para gerenciamento de estado, e Framer Motion para animações de elementos na interface. A integração dessas ferramentas permitiu criar uma aplicação dinâmica e responsiva, onde os usuários podem adicionar, editar e deletar feedbacks em tempo real, com uma experiência de usuário fluida e intuitiva.",
			"Entre os principais desafios enfrentados, destaco a implementação do gerenciamento de estado global com a Context API, especialmente ao lidar com as operações de CRUD (Create, Read, Update, Delete). Outro desafio significativo foi garantir que a interface fosse responsiva e mantivesse a integridade dos dados durante a transição entre as diferentes operações. Esses obstáculos foram superados através de uma abordagem iterativa, onde refatorei o código para otimizar o desempenho e melhorar a usabilidade.",
			"Este projeto proporcionou um aprendizado valioso, principalmente no que se refere à aplicação prática de conceitos avançados de React, como hooks e context, além do uso de bibliotecas externas para enriquecer a experiência do usuário. A conclusão deste projeto fortaleceu minha habilidade em desenvolver aplicações React completas, do front-end ao gerenciamento de estado, preparando-me para desafios ainda maiores na área de desenvolvimento de software.",
		],
	},
];

export default projects;
