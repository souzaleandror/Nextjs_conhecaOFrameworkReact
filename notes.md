##### 08/07/2024

Curso Next.js: conheça o framework React

@01-Criando o projeto 

@@01
Apresentação

Olá! Hoje vamos falar de Next.js com Vinny Neves, instrutor da Alura.
Audiodescrição: Vinicios Neves é um homem de pele clara com rosto oval. Tem olhos castanho-escuros, sobrancelhas grossas, nariz comprido e boca larga. Tem a cabeça raspada, usa barba e bigode, óculos de grau com armação quadrada preta. Está com uma camisa preta e sentado em uma cadeira cinza. Ao fundo, há uma parede onde são projetadas luzes nas cores azul e roxo.
Neste curso, vamos trabalhar e entender as principais diferenças entre desenvolver uma aplicação React que roda do lado da cliente e desenvolver uma aplicação Next, que roda majoritariamente do lado do servidor. Vamos dar uma olhada no projeto que vamos desenvolver.

Temos aqui um projeto no Figma (ferramenta de design) muito bonito, o nome da aplicação é Code Connect, e vamos lidar com posts. Vamos listar vários posts de forma paginada, e além disso, vamos trabalhar com a página de detalhe do post.

Este é o primeiro curso que vai utilizar o Code Connect como projeto, virão mais no futuro. Com essas duas páginas e esses componentes, vamos passar por todos os principais recursos e técnicas utilizadas pelo Next.

Requisitos do curso
Para acompanhar melhor este curso você deve conseguir utilizar pela primeira vez esse lado do servidor, ou seja, nós já estamos acostumados a desenvolver com React. Essa é a base que você precisa ter, estar acostumado com React.js. Agora vamos migrar, sair do lado do cliente para o lado do servidor, entendendo como o Next faz todo esse roteamento.

Esperamos que você esteja tão animado ou animada quanto nós para desenvolver o Code Connect, e nós estaremos esperando você no próximo vídeo!

@@02
Preparando o ambiente

Olá!
É muito bom receber você neste curso.

Espero que seja uma experiência de aprendizado incrível e que possamos vencer todos os desafios. Como o curso é focado no Next.js 14, é super importante que você já possua uma boa base sobre o React e seu ecossistema.

Para este curso, é preciso que você tenha o NodeJS e para garantir uma boa experiência de estudo, recomendo que baixe e utilize a versão 20.x. Assim você fica com a mesma versão que eu e isso vai melhorar a sua jornada de aprendizado.

Ainda sobre o Node, vou deixar aqui 3 artigos pra você:

Como instalar o Node.js no Windows, Linux e macOS, da Iasmin Araújo e da Rafaela SIlvério, pra te ajudar a entender melhor como funciona a instalação do Node;
Node.JS: Descomplicando o trabalho com diferentes versões, do Jonilson Sousa, pra te ajudar a entender como o NVM funciona e como podemos manter diferentes versões do Node em nossos computadores;
Node.js para Frameworks Front-end, do Antônio Evaldo, que vai visitar temas como uso do terminal, package.json e NPM.
Com o node instalado, podemos pôr a mão na massa. No primeiro vídeo nós vamos configurar o projeto inicial usando o seguinte comando:

npx create-next-app@14
COPIAR CÓDIGO
Repara que aqui já começamos a utilizar uma versão específica, sempre pensando em manter o nosso ambiente de desenvolvimento o mais parecido possível.

Com tudo instalado, podemos agora baixar os arquivos estáticos que vamos utilizar no decorrer do curso:

posts.json
logo
E por último, o Figma. Sinta-se livre para passear um pouco por ele e explorar a aplicação que vamos iniciar.

Tudo pronto? Bora codar :)

https://nodejs.org/dist/v20.11.0/

https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos

https://www.alura.com.br/artigos/descomplicando-o-trabalho-com-node

https://www.alura.com.br/artigos/nodejs-para-frameworks-front-end

https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts.json

https://raw.githubusercontent.com/viniciosneves/3499-next-14-ssr-codeconnect/aula-2/src/components/Aside/logo.png

https://www.figma.com/file/k2uVg4mzbUmXMwHFQKzfLr/CodeConnect--%7C-Formação-Next?node-id=378%3A7151&mode=dev

@@03
Preparando o projeto

Está na hora de começarmos a programar e transformar o Code Connect de um simples desenho para uma versão funcional de uma aplicação Next. Para fazer isso, precisamos iniciar a nossa aplicação.
Vamos iniciar do zero, sem um projeto base para começar. Precisaremos da ajuda do Next desde o início.
E para fazer isso, sempre podemos começar consultando a documentação.

Instalando o Next
No navegador, no endereço nextjs.org/docs, estamos na seção Getting Started - Installation para começar a instalação. A própria equipe do Next recomenda que executemos o comando npx create-next-app@latest para realizar nosso setup, ou seja, baixar e configurar tudo o que o Next precisa para funcionar corretamente.

Vamos rodar este comando de forma parecida com uma pequena diferença. Neste curso, vamos focar e utilizar a versão 14 do Next. Portanto, não podemos pedir a versão mais recente.

Quando dizemos que queremos a versão 14, estamos dizendo para o npx que queremos que a versão principal (major) seja a 14. Contanto que comece com "14.", pode ser a mais recente, mas deve ser a versão 14. Mesmo que saiam versões 15, 16, 17, 18, queremos usar a versão 14 neste momento.

Voltando para o terminal, já estamos na nossa área de trabalho. Vamos rodar um pwd, que indica que estamos na pasta de usuário dentro do desktop, que é onde gostamos de criar os projetos.

Vamos executar o comando npx create-next-app@14, seguido da tecla Enter. Este comando vai fazer algumas perguntas. A primeira pergunta é "qual é o nome do seu projeto?". Podemos usar code-connect que é o nome disponível para nós. Então, ele irá perguntar se queremos usar TypeScript, ESLint ou Tailwind CSS, e nossa resposta para todas será "não".

Porém, quando perguntado se queremos usar o diretório src, a resposta será "sim", pois nossa aplicação ficará dentro deste diretório. Ele também perguntará se queremos usar o App Router, que atualmente é a versão mais recente do roteador, uma forma de trabalhar com roteamento no Next, e vamos dizer que sim. Não queremos customizar o atalho @ para fazer os imports.

Após inicializar o projeto, ele vai instalar o React, o React DOM e o Next. Uma vez que ele terminar de fazer tudo o que precisa, vamos acessar cd code-connect/, ou seja, entrar dentro desta pasta, vamos limpar o terminal, e testar para ver se essa instalação do Next está funcionando.

Testando e rodando o Next
Para fazer isso, para iniciar o ambiente de desenvolvimento do Next, vamos usar o comando npm run dev. Esse comando vai garantir que tudo funcione como deveria. Quando estiver tudo pronto, estará disponível na porta 3000 do seu localhost.

Clicaremos com o botão direito do mouse sobre a URL http://localhost:3000 e selecionaremos a opção Open Link. Essa opção está disponível a depender do sistema operacional que você use.

Acessando http://localhost:3000 no navegador, a página apresentará detalhes sobre o Next e uma instrução semelhante ao que temos quando criamos uma aplicação React. De modo geral, ele dirá que, para começar a trabalhar, podemos editar o arquivo que está dentro de src, chamado page.js.

Limpando o projeto no VS Code
Agora, podemos começar a desenvolver. Precisamos abrir o VS Code. Após abri-lo, fecharemos o projeto que está aberto e pediremos para ele abrir a pasta que acabamos de criar, clicando em Open Folder. Dentro de Desktop, temos o code-connect, e pediremos para ele abrir este projeto.

Já com a pasta aberta, podemos começar a trabalhar e fazer uma limpeza clássica. Quando vem no React, seja com o Vite ou com o Create React App, sempre tem algumas coisas que o script entrega para nós para mostrar mais ou menos como funciona. E agora, vamos limpar tudo isso.

Acessaremos src > globals.css, que são estilos globais da aplicação. Queremos remover todo o código que está nesse arquivo, os estilos globais serão definidos por nós, não pelo Next. Ele tem também um page.module.css, que também vamos limpar. Não precisamos excluir esse arquivo, pois provavelmente vamos usá-lo. Vamos deixá-lo ali, mas sem estilos, porque não vamos ver nada que não seja coisas que nós escrevemos ali na tela.

Depois, vamos para page.js e ele tem toda a marcação HTML. Repare, o Home, que está dentro do page.js, é um componente React normal, como conhecemos. Portanto, vamos excluir tudo o que tem dentro das chaves e deixar só a tag main. Vamos renderizar um "Olá Mundo".Portanto, a nossa página Home só vai exibir esse "Olá Mundo". Podemos limpar os imports. Portanto, dentro do page, ficou o nosso "Olá Mundo".

export default function Home() {
    return {
        <main>
            Olá mundo
        </main>
    }
}
COPIAR CÓDIGO
O Next já oferece, por padrão, um layout.js. Este é o layout base de toda a aplicação. Por padrão, ele já existe. Ele faz import de fontes do Google e tem algumas informações ali de metadata. Por enquanto, não queremos dar atenção a isso. Vamos deletar todos os imports que ele fazia.

Não queremos que o título seja "Create Next App". Queremos criar o "Code Connect". Portanto, vamos trocar o title. E aqui, estamos falando da metainformação, que é o título que fica ali na aba, 'Code Connect'. Quanto à descrição, podemos criar uma agora, "Uma rede social para devs". E isso ficará como meta description da página.

Por último, dentro da função RootLayout, temos o idioma, lang, que está como em inglês, mas nossa aplicação terá conteúdo em português brasileiro ('pt-br'). Agora, podemos tirar o className, porque não fazemos mais a importação da fonte router. Portanto, ficamos com nosso layout base do Next, apenas com a tag html e a tag body, passando o título para dentro.

export const metadata = {
  title: 'Code Connect',
  description: 'Uma rede social para devs!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
COPIAR CÓDIGO
Fizemos várias alterações de código. Inclusive, na pasta pública, podemos excluir o logo da versão do Next. Não vamos usar essas imagens. E agora, se voltarmos ao navegador, deveríamos ter algo parecido com o nosso "Olá mundo".

Voltando ao navegador, temos o texto "Olá mundo". Vamos pedir para o Google Chrome abrir o Developer Tools clicando com o botão direito do mouse sobre a página e clicando em Inspecionar.

Gostamos de estar sempre olhando para o console. Se ele indicar algum erro em vermelho, conseguimos ver o que fizemos de errado ou o que aconteceu. E, além disso, também ficamos de olho no terminal. Por quê? O principal ponto do Next é que temos coisas acontecendo do lado do servidor. No React, a maioria das coisas, vão acontecer do lado do cliente. Então, se aconteceu algo errado, o terminal, onde rodamos o nosso npm run dev, pode dar alguma dica para ver o que aconteceu.

Agora que já criamos a aplicação base, fizemos uma limpeza nela, podemos começar a evoluir o nosso Code Connect.

@@04
Criando o componente Aside

Agora que nossa aplicação está limpa e pronta para receber o código que queremos escrever, vamos estilizá-la, começar a trabalhar e deixá-la com a aparência do Code Connect que temos no Figma.
Vamos começar estilizando o body. Queremos que o fundo fique com a cor que nossa pessoa designer, a Isa, preparou. Com o Figma aberto, clicamos no fundo, estamos com o Dev Mode ligado e conseguimos pegar esse background que é um gradiente linear. Vamos copiar esse estilo que o próprio Figma está nos oferecendo e voltar agora para o VS Code.

Ajustando a cor de fundo
Vamos fechar tudo que está aberto, exceto o globals.css. Lembrem-se que esse arquivo será responsável pelos estilos globais da aplicação. Nesse arquivo, que está limpo, vamos selecionar o body e aqui estamos falando de CSS normal. Depois, vamos colar o estilo que veio do Figma.

A única coisa que vamos fazer é limpar essa variável CSS que o Figma sugere, mas que não estamos usando. Basicamente, o que fizemos foi aplicar um background para o body. Além disso, vamos remover a margem que ele já tem por padrão e definir que a altura mínima é 100vh, ou seja, pega tudo que está disponível para o body, pelo menos. Se ultrapassar, deixa passar, mas a altura mínima será essa.

body {
  background: linear-gradient(180deg, #0E1112 0%, #00090E 100%);
  margin: 0;
  min-height: 100vh;
}
COPIAR CÓDIGO
Depois de escrever esses estilos, vamos importá-los novamente. Então, mudamos para o arquivo layout.js e na primeira linha vamos fazer um import './'. Não queremos page.module.css, como o VS Code está sugerindo, mas o globals.css.

import './globals.css'
COPIAR CÓDIGO
Assim, personalizamos os estilos globais e ajustamos no layout. Vamos ver se isso funciona? Vamos voltar ao navegador, no Code Connect na porta 3000 e ele já aparece para nós com um fundo azulado, muito parecido com o que temos no Figma.

Criando o componente Aside
Voltando ao Figma, vamos criar um componente para começar a montar nosso layout. Vamos trabalhar nesse projeto em vários cursos diferentes durante a formação. Então, ele vai evoluir junto com nossas habilidades.

Vamos começar pelo Aside, que é um componente que fica ao lado. Basicamente, ele tem a logo do Code Connect e várias opções. Por enquanto, só vamos colocar a logo ali dentro.

Já fizemos o download da logo. Em "Preparando o Ambiente", tem todos os links que você precisa para baixar as imagens e tudo que vamos usar durante o curso. Então, qualquer dúvida, volte lá e pegue sua logo.

Vamos arrastar o arquivo da logo diretamente da pasta de Downloads para dentro do VS Code. E onde vamos colocá-la? Lembrem-se, estamos vindo do mundo do React, seja com o Vite ou com o próprio Create React App, já temos esse conceito de pasta pública, que é a pasta pela qual o Next vai prover os arquivos estáticos. Então, a logo é um desses arquivos, vamos arrastar o logo.png para dentro da pasta public, que é justamente onde tinha a logo do Next e da Vercel.

Com a logo no lugar, podemos criar nosso primeiro componente. Aqui, vamos começar a organizar o projeto. Dentro de src, vamos criar uma pasta clicando com o botão direito sobre ele e selecionando New Folder.

Vamos criar uma pasta com o nome de components. Dessa vez, vamos escrever um código em inglês para ficar bem parecido com o que vemos no mercado. Então, dentro da pasta components, vamos criar o componente Aside. Vamos colocar a primeira letra maiúscula, porque ele é um componente React. E ali dentro, vamos criar um arquivo chamado index.jsx. Então o caminho todo será src > components > Aside > index.jsx. Isso vai nos ajudar a importar esse componente mais facilmente.

Vamos criar uma constante dentro do arquivo index.jsx. Essa constante vai se chamar Aside. Antes de criar, vamos inserir um export, assim já criamos exportando. Essa constante vai receber uma arrow function (função de seta).

O Vinny Neves costuma criar componente React sempre com arrow function. Se você cria como function direto, não tem problema. Vai funcionar do mesmo jeito.
Então, esse Aside vai fazer o retorno de algum HTML. Vamos colocar entre parênteses. E vamos retornar um <aside>. E aqui dentro, podemos colocar nossa logo. Como a temos disponível na pasta pública, podemos usar a tag img. O src dela vai ser absoluto, ou seja, /, que é a raiz do nosso endereço, logo.png.

Vamos colocar um texto alternativo. Vamos chamar de "Logo da Code Connect, que é a nossa rede social. Vamos importá-lo e colocá-lo no nosso layout.

A ideia do layout é colocar ali dentro o código que vai ser comum a toda a aplicação.
export const Aside = () => {
    return (<aside>
        <img src="/logo.png" alt="Logo da Code Connect" />
    </aside>)
}
COPIAR CÓDIGO
Vamos dar uma olhada no Figma para ter certeza de que o Aside vai estar sempre disponível. Então, estamos olhando para a página inicial e o Aside está ali. Vamos olhar mais para baixo no Figma. E dentro da página de detalhe do que foi postado ali no blog, também tem o Aside.

Então, esse componente realmente é um bom candidato para ficar no nosso layout. Ou seja, independentemente da página, vamos exibir esse componente. Então, para não ficar replicando, correndo o risco de esquecê-lo, vamos montar nosso layout base.

Voltando para o layout.js, antes de chamar o children, que é onde vai vir a aplicação, quebramos a linha para ficar a abertura da tag body, children e o fechamento da tag body em linhas separadas.

Antes de chamar o children, chamamos o Aside. O VS Code já está sugerindo como primeira opção o Aside que está dentro da pasta de componentes que se chama Aside.

Antes de mostrar o resultado, repare que, na linha 1, temos o import do Aside. E repare que ele começa com um arroba. Quando fomos criar nossa aplicação, lembra que falamos do alias, do apelido, do atalho? Essa é a ideia desse arroba.

O arroba quer dizer que é a pasta src, ou seja, o arroba significa src independentemente de onde estejamos na hierarquia. Assim sendo, dentro desse src, temos uma pasta chamada components e uma pasta chamada Aside. Percebeu como que o arroba funciona? O arroba aponta diretamente para esse src.

import { Aside } from '@/components/Aside'
import './globals.css'

export const metadata = {
  title: 'Code Connect',
  description: 'Uma rede social para devs!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className='app-container'>
          <Aside />
          {children}
        </div>
      </body>
    </html>
  )
}
COPIAR CÓDIGO
Nosso componente está importado, devidamente escrito no nosso JSX. Vamos ver o resultado no navegador. Voltamos para o Google Chrome, voltamos para o Code Connect. Vamos tirar o zoom da aplicação. E está lá o Code Connect. Ainda está sem estilo, está colado no canto. Vamos evoluir esse estilo devagar. Aí podemos começar estilizando essa caixinha que fica aí em volta. Ou seja, eles têm um container, com a borda arredondada, uma cor diferente da do fundo. Então, vamos fazer isso.

Usando os módulos CSS
No Figma, clicamos no componente Aside. No menu lateral direito, vamos descer um pouco até o título Style, para localizar os estilos do componente. Ele já nos informa o border radius e o background. Então, podemos copiar o código e voltar para a nossa aplicação.

O Next permite que estilizemos a aplicação de várias formas diferentes. Tanto que ele até sugeriu o Tailwind no nosso primeiro vídeo, onde começamos a criar a nossa aplicação.

Optamos por não utilizar o Tailwind. Vamos usar o que o Next oferece por padrão, que são CSS modules. Ou seja, módulos CSS. Isso faz com que consigamos escrever CSS no escopo dos componentes sem que isso vaze para fora do componente. Evitando que afetemos outros lugares da aplicação, com cores e estilos no geral.

Dentro do Aside, vamos pedir um novo arquivo, clicando com o botão direito sobre a pasta Aside no menu Explorer e selecionando New Folder. Vamos chamar de aside.module.css, com letras minúsculas.

Dentro aqui desse arquivo aside.module.css, vamos criar uma classe .aside, que vai representar os nossos estilos. Vamos colar o que veio do Figma. Então, temos uma border-radius: 8px e o background.

Vamos remover o conceito de variável que o Figma está sugerindo, porque não temos isso. E também temos um padding. Voltamos ao navegador para resgatar qual é o padding.

Para cima e para baixo, o padding é 40. Para o lado e para o outro, é 16. Vamos aplicar isso. Então, temos o nosso padding, que é 40 pixels para cima e para baixo, 16 pixels para um lado e para o outro. Isso vai estilizar e começar a apresentar o formato, as cores e a borda que precisamos.

.aside {
    border-radius: 8px;
    background: #171D1F;
    padding: 40px 16px;
}
COPIAR CÓDIGO
Então, como é que fazemos para importar e aplicar esses estilos dentro do nosso componente? Lá no arquivo index.jsx, que está dentro de Aside e de components, vamos importar usando o import.

Precisamos dar um nome para o que vamos importar. Vamos chamar de styles (estilos). Então, import styles from './'. Reparem que o VS Code já nos sugeriu aside.modules.css. Confirmaremos pressionando a tecla Enter.

import styles from './aside.modules.css'
COPIAR CÓDIGO
E para aplicar esse estilo é CSS Modules da mesma forma que usamos no React. Vamos chamar o className e ao invés de passar uma classe, por exemplo, Aside, para ele aplicar os estilos, vamos fazer diferente.

Vamos passar do objeto que acabamos de pegar, styles., seguido do nome da classe que criamos, aside. O objeto CSS do CSS Modules vai conter todos os estilos que pegarmos. E estamos pegando o aside. Reparem que esse .aside tem a ver com a classe que criamos no nosso CSS.

Se criássemos no arquivo aside.module.css, ao invés de Aside, cambalhota, o nome que teríamos de pegar lá no nosso componente dentro de index.jsx seria cambalhota.

O nome da classe que colocamos em className é o nome da propriedade que vamos pegar no styles.
Com isso, na teoria, vamos ter o nosso componente estilizado. Vamos ver? Voltando ao Google Chrome, no Code Connect, que está rodando na 3.000. Ele está esticado porque ele está com o display block, pegando toda a aplicação, mas ele já está com o padding que pedimos. Abrindo o Inspecionar, já conseguimos ver o padding de 40 para cima e 40 para baixo, 16 para um lado e 16 para o outro. E lá dentro tem uma imagem.

Então, com isso, criamos um componente React e usamos os CSS modules. Detalhe: o Next oferece isso por padrão. Só usamos. Então, agora, ainda temos coisa para fazer, mas continuamos no próximo vídeo.

@@05
Componente Image do Next.js

Iniciamos a montagem do nosso Aside, que está nos estilos, onde temos o nosso logotipo. Vamos dar um F5 no localhost:3000, mas precisamos montar o nosso layout.
Então, vamos voltar ao Figma e entender o nosso cenário. Vamos focar na implementação de desktop, então não vamos dar atenção para a versão tablet e nem para celular. Fica o desafio se você quiser dar uma olhada, porque isso é CSS.

O que queremos entender é o tamanho do nosso frame, da nossa aplicação. E o que o Figma sugere para nós é uma largura fixa máxima de 1.200 pixels. Então, selecionando a aplicação, temos 1.200 pixels de largura e tem uma margem para cima e para baixo de 56 pixels. Então, 1.200 de largura e 56 para cima e para baixo.

Montando o layout da página
Vamos começar a montar esse layout. Vamos voltar ao VSCode, fechar tudo que está aberto e abrir o layout.js, o layout da nossa aplicação inteira. Dentro do layout, temos o nosso body e vamos criar uma div.

Tentamos fazer um atalho do Emmet, mas como o layout.js não tem o x no final, o Emmet não vai completar do jeito que queríamos, então vamos criar a div manualmente. Dentro dessa div, vamos colocar o Aside e o children.

Como estamos falando aqui de layout global, não vamos trabalhar com CSS Modules, queremos que isso seja mesmo global da nossa aplicação. A nossa div vai ter um className e vamos chamar de app-container, ou seja, é o container de toda a nossa aplicação.

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className='app-container'>
          <Aside />
          {children}
        </div>
      </body>
    </html>
  )
}
COPIAR CÓDIGO
E no nosso globals.css, depois de fazer os estilos do body, vamos escrever .app-container e vamos aplicar justamente aqueles estilos que mencionamos. A nossa largura é de 1.200 pixels, a nossa margem é de 56 para cima e para baixo, para esquerda e para direita, automático.

body {
  background: linear-gradient(180deg, #0E1112 0%, #00090E 100%);
  margin: 0;
  min-height: 100vh;
}

.app-container {
  width: 1200px;
  margin: 56px auto;
COPIAR CÓDIGO
Voltando no navegador, no Code Connect, que é o local host da 3000, vamos dar uma recarregada na página, temos o nosso app-container. Agora conseguimos ver, quando colocamos o mouse em cima da div nos elementos da aba Inspecionar, ele mostra laranja a nossa margem, que é 56 para cima e 56 para baixo e o tamanho é de 1.200. Então vamos conseguir montar o layout de acordo com o que tem ali no Figma.

Mas tem mais um detalhe: temos que ficar com o Aside coladinho ali do lado. Então, para fazer isso, podemos usar o display: flex. Vamos voltar ao VSCode, o nosso app-container vai ter um display: flex.

Podemos colocar o gap, o espaçamento, podemos dar uma olhada no Figma para pegar esse valor. No Figma, ele já está aqui apontando uma distância de 27 pixels, podemos arredondar para 28 pixels.

Podemos dizer que queremos que a altura seja de 100vh, ou seja, pegue a altura toda disponível. Uma coisa que podemos fazer, para ter um mínimo de responsividade, é dizer que a largura é de 1.200, mas a largura máxima, o width, é de 90%, porque se ficar uma tela menor, ele não vai ficar vazando para fora, podemos tomar esse cuidado.

body {
  background: linear-gradient(180deg, #0E1112 0%, #00090E 100%);
  margin: 0;
  min-height: 100vh;
}

.app-container {
  width: 1200px;
  max-width: 90%;
  margin: 56px auto;
  display: flex;
  gap: 28px;
  height: 100vh;
}
COPIAR CÓDIGO
Voltamos ao Code Connect no navegador, ele já começou a montar a estrutura de acordo com o que precisamos. Repare que o nosso Aside agora está bem ali do ladinho e ele tem o nosso "Olá mundo".

Otimizando o carregamento de imagens com Next
E falando no Aside, antes de continuarmos codando, vamos mostrar uma das vantagens de se trabalhar com o Next. Vamos voltar ao VS Code, no componente Aside, então src > components/Aside > index.jsx. Na linha 5, temos a logo:

export const Aside = () => {
    return (<aside className={styles.aside}>
        <img src="/logo.png" alt="Logo da Code Connect" />
    </aside>)
}
COPIAR CÓDIGO
A imagem representa uma grande porção do peso do carregamento da nossa página, porque estamos falando de tamanho em bytes. Então, pensando em otimizar isso, o Next traz um componente focado em imagens. Podemos trocar a nossa abordagem para trabalhar de modo a usufruir com maior facilidade desse componente do Next.

Ao invés de deixar a logo na pasta pública, vamos clicar em logo.png no menu Explorer esquerdo e arrastá-la para dentro da pasta components/AsideO VS Code pergunta se temos certeza da ação, podemos clicar em Move para confirmar. Então a logo.png agora já está dentro de src > components/Aside > logo.png.

Vamos importá-la escrevendo no arquivo index.jsx: import logo from './logo.png. Agora vamos comentar esse img src, que vai ficar como referência para nós lembrarmos dessa diferença, e vamos chamar o componente do Next, que se chama Image.

Repare que o VS Code está sugerindo várias importações diferentes, mas queremos o Image do next/image. Então ele fez o import para nós, e o que temos que fazer agora é entregar o nosso src, de onde vem essa imagem.

A nossa imagem é essa logo que acabamos de importar. Passamos todas as instruções para o Next, e agora passamos a utilizar o componente Image por padrão, não precisamos fazer nada. Importamos a logo, importamos o componente, e está lá.

O Image já vai começar a otimizar as coisas da melhor maneira possível. Vamos voltar agora no Google Chrome. Ele já está reclamando alguma coisa aqui no console, mas o layout parece que está correto.

Vamos inspecionar o elemento para dar uma olhada em como ficou a imagem. A partir de que trocamos, está muito diferente a nossa tag img. Tem o loading, uma largura e uma altura, decoding, data-nimg, ou seja, o Next está trabalhando e não precisamos mais nos preocuparmos com isso.

Porém, tem um erro no console. Vamos abrir o console. Ele está apontando que usamos o Image, mas tem uma propriedade que está faltando, que é o texto alternativo.

Vamos importar e colocar o nosso texto alternativo. Vamos copiar o alt="Logo da Code Connect" da linha de cima e colá-lo logo após Image src=(logo).

import logo from './logo.png'

export const Aside = () => {
    return (<aside className={styles.aside}>
        {/* <img src="/logo.png" alt="Logo da Code Connect" /> */}
        <Image src={logo} alt="Logo da Code Connect"/>
    </aside>)
}
COPIAR CÓDIGO
Vamos salvar e voltar ao navegador para ver se nos livramos desse erro. Ele pediu para darmos prioridade para essa imagem. Por enquanto, não precisamos. Isso é só um aviso, não um erro. Então, podemos deixar dessa forma por enquanto.

Agora o nosso Code Connect começou a ganhar forma e, olhando para o Figma, temos que começar a construir esses cards que representam as postagens dentro da nossa aplicação. Vamos fazer isso, mas é só na próxima aula. Estamos te esperando lá!

@@06
Para saber mais: apresentando o Next.js

 
Enquanto o React é uma das mais famosas bibliotecas focadas no desenvolvimento de interfaces com as pessoas usuárias, o Next.js é um framework que estende as funcionalidades do React e nos permite construir aplicações fullstack.

Neste curso, vamos mergulhar na versão 14 do Next.js e desvendar suas funcionalidades padrão. É como abrir uma caixa de ferramentas cheia de recursos prontos para uso.

Esse framework que adiciona superpoderes ao React foi criado e é mantido pela Vercel.

Eu vou deixar aqui pra você o link pro artigo que eu escrevi que explica os principais conceitos do Next.js: https://www.alura.com.br/artigos/next-js. Nele a gente conversa sobre muita coisa bacana que o Next.js oferece pra gente, então sinta-se à vontade para ler e revisar sempre que necessário.

https://vercel.com/

https://www.alura.com.br/artigos/next-js

@@07
Entrevista técnica: CSS Modules no Next.js

Imagine que você está em uma entrevista para uma vaga dev front-end e Camila, a tech lead que é expert em Next.js, pergunta: 'Pode me contar sobre CSS Modules e como eles ajudam em Next.js?' Como você descreveria a funcionalidade e os benefícios dos CSS Modules??
Selecione uma alternativa

"Você deve evitar usar CSS Modules em NextJS, pois aumentam o tamanho do bundle final e reduzem o desempenho da aplicação."
 
Alternativa correta
"Os módulos CSS no NextJS são incompatíveis com a renderização no lado do servidor, o que torna a aplicação menos otimizada."
 
Alternativa correta
"Com CSS Modules, cada componente tem seu arquivo CSS correspondente que, quando importado, gera classes com nomes únicos automaticamente."
 
Esta é uma descrição correta de como CSS Modules funcionam em NextJS, proporcionando um escopo local para os estilos e gerando classes únicas para evitar sobreposição.
Alternativa correta
"CSS Modules permitem que você use estilos globais, evitando conflitos de nomes e facilitando a manutenção do código."

@@08
Faça como eu fiz: iniciando o Code Connect

Partiu codar?
Essa é a hora que você implementa a base do Code Connect.

Gera o projeto novo usando o script npx.
Limpa a aplicação base.
Aplica os estilos globais.
Cria o componente Aside, com a imagem de logo.

Se precisar, pode dar uma espiadinha aqui no gabarito.
Mas lembre-se: praticar é a melhor forma de absorver conhecimento. Então aproveite para usar o Next.js em, quem sabe, outras aplicações React que você já desenvolveu? Fica a dica, hein!

Vamos pra cima que ainda tem muita coisa legal pra vermos juntos.

https://github.com/alura-cursos/3499-next-14-ssr-codeconnect/compare/main...alura-cursos:3499-next-14-ssr-codeconnect:aula-1?expand=1

@@09
O que aprendemos?

Nessa aula, você aprendeu como:
Criar aplicações Next.js utilizando o npx;
Estilizar componentes utilizando CSS Modules;
Lidar com imagens na pasta public;
Otimizar o uso das imagens utilizando o componente Image do Next.js.
