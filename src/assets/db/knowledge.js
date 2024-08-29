import {
	SiJavascript,
	SiAxios,
	SiExpress,
	SiJest,
	SiMongodb,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGit, FaGithub } from "react-icons/fa";

const techItems = [
	{
		iconId: 1,
		techId: 1,
		title: "Javascript",
		inProgress: false,
		techList:
			"Funções e Callback Functions; Objetos, Prototipagem e Herança; Arrays e seus Métodos (map, filter, reduce, etc.); Manipulação do DOM e Eventos; Promises e Async/Await; High Order Functions e Closure; Classes e Objetos; JSON; Manipulação de Erros (try...catch); Estruturas de Dados (stack, filas, mapas, conjuntos); Features do ES6+ (let, const, arrow functions, destructuring, operadores spread e rest); Módulos (CommonJS, ES Modules); API Fetch e Local Storage e Session Storage; Regex; Testes Unitários; Contexto de Execução e Escopo;",
	},
	{
		iconId: 2,
		techId: 2,
		title: "Typescript",
		inProgress: true,
		techList:
			"Tipos Básicos (string, number, boolean, etc.); Tipos Avançados (tuples, enums, unions, intersections); Interfaces; Classes e Herança; Tipos Genéricos; Tipos Literais; Modificadores de Acesso (public, private, protected); Decoradores; Type Assertions; Inferência de Tipo; Funções e Métodos Tipados; Namespaces e Módulos; Type Guards; Estruturas de Dados (arrays, objetos, mapas, conjuntos); Compatibilidade com JavaScript; Configuração do Compilador (tsconfig); Tratamento de Erros e Tipos Customizados; TypeScript com React; TypeScript com Node.js; Tipagem de APIs e Bibliotecas Externas; Testes com TypeScript;",
	},
	{
		iconId: 3,
		techId: 3,
		title: "React",
		inProgress: false,
		techList:
			"Componentes Funcionais e de Classe; JSX; Props e State; Hooks (useState, useEffect, useContext, etc.); Context API, Providers; Refs e Manipulação de DOM; Renderização Condicional; Listas, Chaves, Formulários, Controle de Eventos; Custom Hooks; React Router; Gerenciamento de Estado (Redux); React.memo e PureComponent; Performance e Otimização; Styled Components; Error Boundaries; Server-Side Rendering (SSR); Static Site Generation (SSG);",
	},
	{
		iconId: 4,
		techId: 4,
		title: "Node.js",
		inProgress: true,
		techList:
			"Módulos e Pacotes; Sistema de Módulos CommonJS e ES Modules; NPM (Node Package Manager); Express.js; Middleware; Roteamento; Manipulação de Requisições e Respostas; Servidores HTTP e HTTPS; APIs REST; Conexão com Bancos de Dados (SQL, NoSQL); Assincronismo e Callbacks; Promises e Async/Await; Manipulação de Arquivos e Streams; Gerenciamento de Erros; Ambiente de Execução e Variáveis de Ambiente; Gerenciamento de Dependências; Autenticação e Autorização; WebSockets; Segurança e Proteção de Aplicações; Testes Unitários e Integração; Logging e Monitoramento; Performance e Escalabilidade; Trabalhando com Templates (e.g., EJS);",
	},
	{
		iconId: 5,
		techId: 5,
		title: "Express",
		inProgress: false,
		techList:
			"Criação e Configuração de Servidores; Roteamento e Manipulação de Rotas (Parâmetros e Query Strings); Middlewares; Manipulação de Requisições, Respostas e Erros (req, res, err); Configuração de Cabeçalhos HTTP; Autenticação, Autorização, Sessões e Cookies; Tratamento de Dados de Formulários; Upload e Manipulação de Arquivos; Integração com Bancos de Dados (SQL e NoSQL); Testes de Endpoints e APIs; Configuração de Variáveis de Ambiente; Performance e Otimização; Documentação de APIs (Swagger); Gerenciamento de Dependências;",
	},
	{
		iconId: 6,
		techId: 6,
		title: "Axios",
		inProgress: false,
		techList:
			"Criação e Configuração de Instâncias; Requisições HTTP (GET, POST, PUT, PATCH, DELETE); Configuração de Headers; Manipulação de Parâmetros de Consulta; Interceptadores de Requisição e Resposta (req, res); Transformação de Dados de Requisição e Resposta; Cancelamento de Requisições; Tratamento de Erros; Manipulação de Dados de Resposta; Configuração de Tempo de Espera (Timeout); Autenticação (token bearer); Requisições Simultâneas e Encadeamento; Configuração Global e Local; Manipulação de Status Codes; Uso com async/await e promises;",
	},
	{
		iconId: 7,
		techId: 7,
		title: "Jest",
		inProgress: false,
		techList:
			"Configuração e Instalação; Estrutura de Testes; Testes Unitários; Testes de Integração; Mocking de Funções e Módulos; Testes Assíncronos e Promises; Assertions e Matchers; Testes de Componentes (React); Arquivos de Configuração (jest.config.js); Testes de Snapshot; Testes de Tempo; Manipulação de Dados de Teste; Testes de Erros e Exceções; Hooks e Contexto em React; Utilização de beforeEach, afterEach, beforeAll, e afterAll; Execução e Filtragem de Testes;",
	},
	{
		iconId: 8,
		techId: 8,
		title: "PostgreSQL",
		inProgress: false,
		techList:
			"Instalação e Configuração; Comandos SQL Padrão (SELECT, INSERT, UPDATE, DELETE); Criação e Gerenciamento de Tabelas; Tipos de Dados (textos, números, datas, etc.); Chaves Primárias e Estrangeiras; Índices e Otimização de Consultas; Views e Common Table Expressions; Procedimentos Armazenados e Funções; Constraints e Validações de Dados; Joins e Operações Relacionais; Subconsultas e Operações Aninhadas; Manipulação de Dados em Massa; Backup e Recuperação de Dados; Administração de Usuários e Permissões; Configuração e Ajuste de Parâmetros; Monitoramento e Logging;",
	},
	{
		iconId: 9,
		techId: 9,
		title: "MongoDB",
		inProgress: true,
		techList:
			"Instalação e Configuração; CRUD Básico (Create, Read, Update, Delete); Estrutura de Documentos e Coleções; Operadores de Consulta; Índices e Otimização de Consultas; Agregações e Pipelines; Modelagem de Dados (embedding vs. referencing); Validação de Esquema; Transações e Controle de Concurrency; Backup e Recuperação de Dados; Administração de Usuários e Permissões; Manipulação de Dados em Massa; Utilização de MongoDB Atlas; Manipulação de Dados Geoespaciais (PostGIS); Interação com Drivers e Bibliotecas (Mongoose);",
	},
	{
		iconId: 10,
		techId: 10,
		title: "TailwindCSS",
		inProgress: false,
		techList:
			"Instalação e Configuração; Utilização de Classes Utilitárias e Variáveis CSS Customizadas; Design Responsivo e Breakpoints; Personalização de Tema (cores, fontes, espaçamentos); Criação e Uso de Componentes e Criação de Templates e Componentes Reutilizáveis; Sistema de Grid e Layout; Flexbox e Alinhamento; Estilização de Tipografia e Estilização de Formulários e Botões; Manipulação de Estado (hover, focus, active, etc.); Plugins e Extensões; Trabalhando com Animações e Transições; Otimização e Purga de CSS; Integração com Frameworks React; Design de Interfaces Acessíveis; Implementação de Design Escalável e Modular;",
	},
	{
		iconId: 11,
		techId: 11,
		title: "Git",
		inProgress: false,
		techList:
			"Instalação e Configuração; Comandos regulares; Fluxo de Trabalho com Git; Branching e Merging; Resolução de Conflitos de Merge; Controle de Histórico (git log, git diff, git blame); Stashing e Aplicação de Stash; Tags e Versionamento; Manipulação de Repositórios Remotos (git remote, git fetch, git pull, git push); Configuração de Usuário e Repositórios (git config); Gerenciamento de Submódulos; Reversão de Commits e Históricos (git revert, git reset); Criação e Utilização de Hooks; Integração com GitHub; Automatização de Workflow com Aliases e Scripts; Resolução de Problemas e Recuperação; Visualização de Branches e Históricos;",
	},
	{
		iconId: 12,
		techId: 12,
		title: "GitHub",
		inProgress: false,
		techList:
			"Criação, Gerenciamento e Clonagem de Repositórios; Commit e Push de Alterações; Branches e Pull Requests, incluindo Merge e Rebase via Pull Requests; Resolução de Conflitos de Merge; Revisão de Código e Comentários em Pull Requests; GitHub Actions e Automação de Workflow, incluindo Configuração de Webhooks; Uso de Issues e Projetos; Gerenciamento de Colaboradores e Permissões; GitHub Pages para Hospedagem de Sites; Integração com CI/CD; Criação e Uso de Git Tags; Reversão e Restauração de Commits e Configuração de Branch Protegida; Visualização e Análise de Históricos de Commit; Configuração de Repositórios Privados e Públicos; Criação e Gestão de Gists; Utilização de Templates de Repositório;",
	},
	{
		iconId: 13,
		techId: 13,
		title: "HTML5",
		inProgress: false,
		techList:
			"Estrutura Básica de Documento HTML; Elementos e Tags Semânticas (header, footer, article, section, nav, etc.); Atributos e Propriedades de Elementos; Formulários e Tipos de Input; Validação de Formulários; Elementos de Mídia (audio, video, iframe); Elementos de Dados (data attributes); APIs HTML5 (Canvas, Web Storage, Geolocation); Elementos de Layout (aside, figure, figcaption); Novos Elementos de Texto (mark, time, progress, meter); Recursos de Responsividade (viewport meta tag); Armazenamento Local e Sessão (localStorage, sessionStorage); Gerenciamento de Recursos de Mídia (srcset, sizes); Microdata e RDFa; Acessibilidade e ARIA; Técnicas de SEO e Semântica; Estrutura e Tipos de Listagem (ul, ol, dl); Links e Navegação (href, anchors);",
	},
	{
		iconId: 14,
		techId: 14,
		title: "CSS3",
		inProgress: false,
		techList:
			"Seletores e Especificidade; Box Model (margem, borda, padding, conteúdo); Layouts com Flexbox e Grid; Propriedades de Layout (display, position, float); Estilização de Tipografia (font-family, font-size, font-weight, line-height); Cores e Gradientes (rgba, hsla, gradientes lineares e radiais); Transições e Animações; Transformações 2D e 3D (rotate, scale, translate); Media Queries e Design Responsivo; Pseudo-classes (:nth-child, :first-child, :last:child, etc.); Pseudo-elementos (::before, ::after, etc.); Estilização de Formulários (input, select, textarea); Custom Properties (Variáveis CSS); Customização de Listas e Tabelas; Web Fonts (Google Fonts, @font-face, @font-awesome); Layouts Avançados com Grid e Flexbox; Manipulação de Opacidade e Visibilidade; Backgrounds e Imagens de Fundo (background-image, background-position);",
	},
];

const iconMap = {
	1: SiJavascript,
	2: SiTypescript,
	3: FaReact,
	4: FaNodeJs,
	5: SiExpress,
	6: SiAxios,
	7: SiJest,
	8: BiLogoPostgresql,
	9: SiMongodb,
	10: SiTailwindcss,
	11: FaGit,
	12: FaGithub,
	13: FaHtml5,
	14: FaCss3Alt,
};

const techMap = {
	1: "Javascript",
	2: "Typescript",
	3: "React",
	4: "Node.js",
	5: "Express",
	6: "Axios",
	7: "Jest",
	8: "PostgreSQL",
	9: "MongoDB",
	10: "TailwindCSS",
	11: "Git",
	12: "GitHub",
	13: "HTML5",
	14: "CSS3",
};

export default techItems;
export { iconMap, techMap };
