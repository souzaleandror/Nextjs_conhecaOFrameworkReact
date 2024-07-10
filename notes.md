##### 08/07/2024

Curso Next.js: conheça o framework React

```
npx create-next-app@14  
npm run dev   
```

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

#### 09/07/2024

@02-Criando um card para os posts

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode acessar o projeto da aula anterior, ou, se preferir, fazer o download do arquivo.

https://github.com/alura-cursos/3499-next-14-ssr-codeconnect/tree/aula-1

https://github.com/alura-cursos/3499-next-14-ssr-codeconnect/archive/refs/heads/aula-1.zip

@@02
Estruturando de forma semântica

Estamos construindo nosso site e já aprendemos algo sobre o componente image do Next. Agora, precisamos evoluir nossa aplicação. Vamos cuidar dos cards, onde temos vários cards, cada um representando um post do blog ou do post connect.
Começaremos a trabalhar nesse card.

Primeiro, criamos um componente React, como já conhecemos. Já temos nossa pasta de components e criaremos outra pasta. Como mencionado anteriormente, estamos usando inglês desta vez, então chamaremos esse componente de CardPost, com "C" e "P" maiúsculos.

A ideia do post é do post do blog. Dentro do CardPost, criaremos um index.jsx.

src
components
CardPost
index.jsx
Dentro desse jsx, faremos o export const CardPost. Isso é uma arrow function (função de seta). Iremos retornar, por padrão, algum HTML. Nossa marcação HTML do nosso jsx.

index.jsx
export const CardPost - {} => {
    return (
    
    )
}
COPIAR CÓDIGO
Vamos refletir sobre isso, estamos simplificando as coisas, então vamos dar uma analisada no Figma para ter uma noção do que esperar. No Figma, neste momento, no cartão, precisamos examinar a imagem principal, o título, o texto e o autor do post.

Poderíamos considerar ter esse item como um objeto de postagem (POST). Podemos passar esse post como propriedades, da mesma forma que faríamos com qualquer componente React. Podemos inserir "post" dentro das chaves de atribuição do CardPost.

O post terá o título, entre todas as propriedades que ele tem. Mas, sem pensar ainda nesse objeto, vamos pensar na nossa marcação. Se temos um post de um blog, podemos usar a tag HTML chamada article, que representa uma porção, um título, um conteúdo que funciona independentemente.

index.jsx
export const CardPost - ({ post }) => {
    return (
        <article>

        </article>
    )
}
COPIAR CÓDIGO
Todo o article terá uma porção semântica só para ele. E se o artigo não está diretamente relacionado, pode não estar diretamente relacionado com o que está ao lado. Pode ser uma sequência de artigos, mas trataremos neste caso cada um como individual.

Além disso, podemos separar as estruturas, podemos ter um header para o nosso article, e o nosso header terá a capa da imagem. Digitamos então uma tag figure, para conter essa imagem. Assim, teremos o nosso componente do Next, que já aprendemos como usar, que é o image. Por enquanto, vamos apenas marcar isso.

index.jsx
export const CardPost - ({ post }) => {
    return (
        <article>
            <header>
                <figure>
                    <Image />
                </figure>
            </header>
        </article>
    )
}
COPIAR CÓDIGO
Nessa sequência, teremos o corpo do nosso card, então podemos incluir uma section aqui dentro após o fechamento da tag header. Dentro da section teremos o corpo, o texto e o título. Deixaremos assim por enquanto apenas para marcar. Por último, em nossa estrutura HTML, teremos o footer.

index.jsx
export const CardPost - ({ post }) => {
    return (
        <article>
            <header>
                <figure>
                    <Image />
                </figure>
            </header>
            <section>
                titulo
                texto
            </section>
            <footer>
            
            </footer>
        </article>
    )
}
COPIAR CÓDIGO
O footer, voltando lá no nosso Figma, terá esse componente que é o avatar, que é o conjunto da imagem da pessoa usuária com o username da pessoa usuária. Poderíamos trazer isso para o código e escrever mais marcação, mas analisando ele, achamos que podemos extrair esse componente no componente chamado, por exemplo, Avatar.

Criando o componente Avatar
Na nossa pasta de componentes, criaremos um novo arquivo. Antes disso, vamos criar uma pasta chamada Avatar com a letra "A" maiúscula. Dentro dessa pasta, criaremos um arquivo chamado index.jsx.

src
components
Avatar
index.jsx
O que esse Avatar conterá? Nosso componente React, export const Avatar, será uma função de flecha que receberá diretamente o nome da pessoa autora. Além disso, desejamos receber a imagem, especificamente o seu source (src). São essas duas informações que queremos incluir ali. Vamos retornar um elemento JSX.

Como temos duas informações, vamos trabalhar com um ul, com uma lista de itens. Na primeira será o nosso componente Image. Podemos inserir o src, porque já temos o src.

O VSCode não importou o img do Next, então importaremos agora. O src, agora ele nos deu autocomplete, vai ser o imageSrc. E o segundo item de lista vai ser o arroba e o nosso name que recebemos lá: @{name}. Ao optarmos por name, teremos a seguinte estrutura:

index.jsx
import Image from "next/image"

export const Avatar = ({name, imageSrc}) => {
    return <ul>
        <li>
            <Image src={imageSrc} />
        </li>
        <li>
            @{name}
        </li>
    </ul>
}
COPIAR CÓDIGO
Agora que nossa estrutura do Avatar está pronta. No arquivo index do CardPost, podemos usar "Ctrl + barra" em Avatar para importar esse componente Avatar, utilizando as facilidades do VSCode. Além disso, importamos o componente img do next/image.

index.jsx
import Image from "next/image"
import { Avatar } from "../Avatar"

export const CardPost - ({ post }) => {
    return (
        <article>
            <header>
                <figure>
                    <Image />
                </figure>
            </header>
            <section>
                titulo
                texto
            </section>
            <footer>
                <Avatar />
            </footer>
        </article>
    )
}
COPIAR CÓDIGO
Então, com todos os dados devidamente importados, é hora de considerar nosso post. No futuro, planejamos consumir uma API que fornecerá esses dados, então já temos a estrutura e as propriedades com as quais poderemos trabalhar. Assim, precisaremos copiar um grande JSON contendo essas propriedades. Para evitar digitar tudo manualmente, há um link disponível para você copiar facilmente.

JSON
        {
            "id": 1,
            "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
            "title": "Introdução ao React",
            "slug": "introducao-ao-react",
            "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
            "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
            "author": {
                "id": 101,
                "name": "Ana Beatriz",
                "username": "anabeatriz_dev",
                "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
            }
        }
COPIAR CÓDIGO
Vamos copiar esse objeto, uma entrada no JSON, e trazê-lo para onde chamamos o componente CardPost. Em nossa estrutura do lado esquerdo, há um arquivo chamado page.js .

page.js
export default function Home() {
  return (
    <main>
      Olá mundo
    </main>
  )
}
COPIAR CÓDIGO
Esse componente page, será retornado na raiz de nossa aplicação. Portanto, ao acessar a barra de endereço, ou seja, nossa página inicial, esse é o componente que será retornado. Em seguida, o Next monta o layout e o entrega.

Então esse componente Home, podemos criar no topo do arquivo, porque ele não tem nada a ver com o nosso componente React. Criamos uma const chamada post, que vai receber aquele objeto que pegamos do JSON.

page.js
const post = {
  "id": 1,
  "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
  "title": "Introdução ao React",
  "slug": "introducao-ao-react",
  "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
  "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
  "author": {
      "id": 101,
      "name": "Ana Beatriz",
      "username": "anabeatriz_dev",
      "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
  }
}

export default function Home() {
  return (
    <main>
      Olá mundo
    </main>
  )
}
COPIAR CÓDIGO
Ele contém campos como id, cover (que é a capa), title, slug, body (que utiliza Markdown) e as informações do autor. Agora que temos os dados do post, podemos chamar nosso componente CardPost, passando o post como propriedade.

page.js
import { CardPost } from "@/components/CardPost"

const post = {
  "id": 1,
  "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
  "title": "Introdução ao React",
  "slug": "introducao-ao-react",
  "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
  "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
  "author": {
      "id": 101,
      "name": "Ana Beatriz",
      "username": "anabeatriz_dev",
      "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
  }
}

export default function Home() {
  return (
    <main>
      <CardPost post={post} />
    </main>
  )
}
COPIAR CÓDIGO
Criamos um objeto chamado post e o passamos para nosso CardPost.

Com isso feito, podemos começar a aprimorar a estrutura do componente CardPost, que anteriormente estava codificado de forma rígida. Então, faremos as mudanças diretamente no código.

Vamos começar pelo src da imagem. O src será post.cover. De onde veio esse post.cover? Do page, que tem o nosso post, que tem a propriedade cover. Deixarei os arquivos do lado do outro na tela, que vai ficar fácil entender essa referência das propriedades, de onde estão vindo.

Temos uma sequência, o título. Então pensando que podemos ter um h1 que tenha a ver com a aplicação inteira, o título do post pode ser o h2 e de onde ele vem? post.title. Tem o corpo do texto, que pode ser um parágrafo, e vamos colocar que ele vem do post.body.

De onde vieram title e body? Está aqui do lado o post, que tem uma propriedade chamada body, com todo o texto que a pessoa autora escreveu. E tem também lá o title, que é o título daquele post.

Por último, temos que passar para o Avatar. Teclamos "Ctrl + Espaço", que ele vai gerar o autocomplete para nós. O imageSrc do Avatar e o name. O imageSrc vai ser post.author.avatar.

index.jsx
export const CardPost = ({ post }) => {
  return (
    <article>
      <header>
        <figure>
          <Image src={post.cover} />
        </figure>
      </header>
      <section>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer>
        <Avatar imageSrc={post.author.avatar} name={} />
      </footer>
    </article>
  );
}
COPIAR CÓDIGO
O que mais temos que passar? O name. Possuímos o name como ana beatriz e o username como anabeatriz__dev. Conforme indicado no Figma, essa é a informação que buscamos.

Optamos por adicionar quebras de linha no componente Avatar para melhor organização. Adicionamos uma quebra de linha para imageCrc, outra para name e, por fim, uma última quebra de linha no fechamento do componente. Assim, o atributo name será obtido do post.author.username.

index.jsx
export const CardPost = ({ post }) => {
  return (
    <article>
      <header>
        <figure>
          <Image src={post.cover} />
        </figure>
      </header>
      <section>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer>
        <Avatar 
                imageSrc={post.author.avatar} 
                name={post.author.username} 
            />
      </footer>
    </article>
  );
}
COPIAR CÓDIGO
Em teoria, tudo isso deveria funcionar. Vamos revisar? Analisaremos o componente page para garantir que tudo esteja correto. No page, importamos o CardPost, passamos o post como propriedade para o CardPost e vamos verificar se está tudo em ordem.

Vamos verificar o resultado disso. Retornamos ao** **Chrome, acessamos o localhost na porta 3000 e nos deparamos com um grande erro.

Unhandled Runtime Error
Error: Image with src "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png" is missing required "width" property.

Ele indica que estamos utilizando uma src que não foi importada de forma estática, ou seja, uma imagem externa. O Next não consegue ler os metadados dessa informação e está nos alertando que a propriedade width (largura) está ausente.

Podemos obter essa largura do Figma, então vamos verificar a imagem do post; ela tem uma largura de 438 pixels (clicamos sobre o que representa o post na imagem do Figma). Agora, vamos para o VSCode e adicionaremos isso. Estamos no arquivo CardPost, onde precisamos definir a largura como 438 pixels.

E tem um detalhe, já vamos adiantar, a altura também é necessária, porque o Next não tem acesso a essas informações, como ela é uma URL externa, diferente da logo que importamos o arquivo, e o Next poderia ler tudo o que ele precisa. Nesse caso aqui não tem, então vamos passar também a nossa altura. Vamos analisar no Figma qual ela é, 133, e agora sim.

index.jsx
export const CardPost = ({ post }) => {
  return (
    <article>
      <header>
        <figure>
          <Image src={post.cover} width={438} height={133} />
        </figure>
      </header>
      <section>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer>
        <Avatar 
                imageSrc={post.author.avatar} 
                name={post.author.username} 
            />
      </footer>
    </article>
  );
}
COPIAR CÓDIGO
Também utilizamos o image no Avatar, então ajustaremos isso. No Avatar, o image tem dimensões de 32 por 32 (para verificar isso, selecionamos o avatar no protótipo do Figma).

Portanto, dentro do index em Avatar, a largura da imagem é definida como 32 e a altura como 32, totalizando 320.

index.jsx
import Image from "next/image"

export const Avatar = ({name, imageSrc}) => {
    return <ul>
        <li>
            <Image src={imageSrc} width={32} height={32}/>
        </li>
        <li>
            @{name}
        </li>
    </ul>
}
COPIAR CÓDIGO
Essa alteração deve resolver o problema das props obrigatórias. Verificaremos se o Next agora nos permite visualizar o resultado.

Voltaremos ao localhost:3000 e recarregaremos a página. Aqui, está indicando que essa propriedade, o hostname raw.githubusercontent.com, não está mais configurado dentro do image no next.config.

Conclusão e Próximos Passos
Deixamos esse erro intencionalmente para destacar um ponto importante. Ao usar o Next e o componente image.next, é importante tomar todas as precauções necessárias, especialmente em relação à segurança. Isso inclui configurações específicas, como autorizar o download de imagens de fontes confiáveis.

Nesse caso, o githubusercontent.com, ele é um hostname que podemos usar, podemos confiar, então temos que informar para o Next, nas configurações do Next, como fazemos isso. Aprenderemos isso no próximo vídeo.

@@03
Configurando imagens externas

Estava tudo indo muito bem, até nós nos depararmos com um erro não tratado, que indica que o SRC da nossa imagem, que aponta para uma imagem externa, não foi permitido pelo Next, por uma questão de segurança.
O que precisamos fazer para ajustar isso, considerando que o Next entrega um ecossistema inteiro para nós, é entender o ponto da segurança.

Existem vários pontos, mas um dos principais é o seguinte: imagine que uma pessoa mal-intencionada possa usar o SRC da imagem para alterar e baixar coisas que não desejamos.

Nesse cenário, dentro das configurações do Next, precisamos informar que confiamos no hostname raw.githubusercontent.com. Especificamente neste, podemos permitir o download da imagem, pois confiamos e está tudo bem fazer downloads aqui.

Configurando a imagem no arquivo next.config.js
Vamos ao nosso projeto, especificamente no arquivo next.config.js .

next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
COPIAR CÓDIGO
O next.config.js fica na raiz do projeto, e até agora não fizemos nenhuma configuração. Esta será a nossa primeira.

Existem várias coisas que conseguimos configurar dentro deste arquivo, uma delas é a images: {}. Note que temos o autocomplete do VSCode neste cenário. A imagem é um objeto, podemos continuar com o autocomplete, existem vários autocompletes que podemos usar.Um desses é o domains.

No entanto, observe que na minha tela do VSCode, onde ele sugere o domains, ele está riscado, tem uma linha em cima. Isso acontece porque essa propriedade está depreciada.

Antigamente, o que fazíamos era domains, que são todos os domínios que permitimos. Este é um array (especificado com []), e então colocamos a string dentro, pegamos o texto, o raw.githubusercontent.com, desejamos copiar para ficar exatamente igual, pois podemos errar essa digitação.

Assim, ficaríamos com:

next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
                'raw.githubusercontent.com'
        ]
    }

}

module.exports = nextConfig
COPIAR CÓDIGO
Era assim que fazíamos antigamente.

Analisando a aplicação, no endereço localhost:3000, recarregamos a página. Isso porque tivemos uma alteração no next.config.js. Observe que o texto foi exibido e a imagem também. No entanto, temos uma mensagem informando que está faltando o alt do lado direito, podemos tratar isso depois, mas o .net carregou a imagem.

Porém, lembre-se que mencionamos anteriormente, precisamos ficar de atentos no console do navegador e no console do nosso terminal, pois como coisas acontecem do lado do servidor, o que acontece do lado do servidor, não vamos verificar aqui no console do Chrome, e sim no nosso terminal.

Trecho indicado pelo instrutor no console do terminal:
The "images.domains" configuration is deprecated. Please use "images.remotePatterns" configuration instead.
Analisando o console do terminal, na penúltima entrada do terminal, ele informa: image.domain está depreciado. Em vez disso, você pode usar o image.remotepatterns, ou seja, os padrões permitidos para a imagem remota. Isso está na documentação do net.

remotePatterns
Eu já deixei aberto convenientemente, mas ele fica dentro da documentação de imagens e vai ter lá especificamente explicando como que configuramos o remote patterns das imagens.

Exemplo retirado da documentação:
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
}
COPIAR CÓDIGO
Trecho copiado pelo instrutor da documentação:
remotePatterns: [
    {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/account123/**',
    },
],
COPIAR CÓDIGO
Copiamos o exemplo que o next disponibiliza na documentação. O remote patterns também é um array, mas ele é quebrado em várias partes.

Após copiarmos, voltamos ao VSCode, inserimos uma vírgula, teclamos "Enter" e colamos após o fechamento dos colchetes.

next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
                'raw.githubusercontent.com'
        ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
    }

}

module.exports = nextConfig
COPIAR CÓDIGO
Solicitamos ao VSCode para formatar o documento. Para isso, clicamos com o botão direito no arquivo e escolhemos a opção "Format Document". Comentamos o domains para ficar armazenado, dependendo da versão do Next, você pode ver isso configurado pelo mundo afora. No caso, iremos apenas ajustar.

Esse remotePatterns está informando o protocolo: 'https'. Está certo. O hostname é exatamente aquele que acabamos de configurar, raw.githubusercontent.com.

A porta deixamos vazia usando apenas aspas simples, porque 80 é a padrão, não temos um prefixo. O que informaremos será: a partir desse hostname, o que chegar não é algo preocupante. É isso que esses dois asteriscos estão dizendo.

next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: [
        //     'raw.githubusercontent.com'
        // ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '**',
            },
        ],
    }
}

module.exports = nextConfig
COPIAR CÓDIGO
Voltando no terminal, ele disse que encontrou uma alteração no next.config.js, reiniciou o servidor.

Agora, não temos mais aquele console de, em um ponto do images.domains está depreciado, só tem lá o antigo. Vamos garantir que realmente não temos mais.

Paramos o processo teclando "Ctrl + C", voltamos e executamos o comando npm run dev no terminal.

npm run dev
COPIAR CÓDIGO
Com isso, rodamos na porta 3000, e está tudo pronto. Vamos ao Chrome, no CodeConnect (que está rodando na porta 3000). Recarregamos a página, e não temos mais aquele erro, e está tudo de acordo com o que o Next pede.

Configurando o texto alternativo
Agora, configuramos o texto alternativo para tirar aquele erro do console. Navegamos para "components > avatar > index.jsx".

No arquivo index.jsx , inserimos como texto alternativo dentro da tag Image.

Podemos colocar entre chaves para fazer uma interpolação na string, depois "Avatar do(a)" e na sequência concatenamos dentro o nome que recebemos, name.

index.jsx
// código omitido

<Image src={imageSrc} width={32} height={32} alt={`Avatar do(a) ${name}`}/>

// código omitido
COPIAR CÓDIGO
E temos que também colocar um alt no nosso cardPost. Navegamos para "src > components > CardPost > index.jsx".

Na linha 9 temos a image, que está faltando inserir o texto alternativo. Utilizaremos o mesmo conceito, entre chaves, "Capa do post de titulo", e usamos a interpolação ${post.title}.

Podemos quebrar umas linhas para cada propriedade do image, para ficar bem legível. O src ou index, que é a altura, alt e fecha o image no final.

index.jsx
// código omitido

<Image 
        src={post.cover} 
        width={438} 
        height={133} 
        alt={`Capa do post de titulo: ${post.title}`} 
/>

// código omitido
COPIAR CÓDIGO
Voltamos ao Chrome e recarregamos a página. Agora sim, sem erros no console, podemos seguir com a nossa implementação.

Próximos Passos
Precisamos estilizar esse cardPost. Ele tem que ficar bonito, igual temos lá no Figma. E analisando no Figma, no texto do post, está indicando que usaremos uma fonte chamada prompt (sugestão).

E o prompt não está disponível para todos nas máquinas por aí, então precisamos importar essa fonte. Mas, novamente, a importação de fontes é algo importante, envolve baixar essa fonte, e o Next nos fornece uma forma específica de fazer isso.

Baseado no que o próprio Next entrega para nós, conseguimos configurar, principalmente do Google Fonts, uma fonte muito comum para fazer essa importação.Para configurar essa fonte, aguarde o próximo vídeo!

@@04
Importando fontes do google

Está tudo pronto para importarmos as fontes do Google. Já sabemos qual é a fonte que precisamos. No Figma, quando inspecionamos o texto, ele indica que a família de fontes é chamada Prompt.
Importando fontes do Google
Dentro da documentação do Next , ele já fornece uma forma de importarmos essa fonte. Inclusive, o exemplo da documentação é aquela fonte Inter, que removemos quando estávamos limpando nossa aplicação inicial.

Exemplo retirado da documentação:
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
COPIAR CÓDIGO
Então, qual é a sugestão do Next? Devemos importar a fonte para dentro do nosso arquivo app.js ou .ts, dependendo da estrutura da nossa aplicação, e então passar a classe correspondente como uma propriedade para o React.

Vamos seguir essa abordagem. Abrimos o VSCode e vamos para o nosso componente principal. Embora não tenhamos um componente chamado app, temos um chamado layout.js .

Outra coisa que vale mencionar. Voltamos à documentação do Next e, reparem, no lado esquerdo, abaixo do Adobe, temos uma mensagem indicando: Using Pages Router. Nós não estamos usando Pages Router, estamos usando o App Router.

Alteramos para "Using App Router" e obtemos outra configuração de página na documentação . Por isso que estamos vendo esse app.ts.

Descendo um pouco a página da documentação não é mais no app.js ou no .ts, no TypeScript, é no layout: app/layout.tsx.

Trecho de código retirado da documentação em "app/layout.tsx":
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
COPIAR CÓDIGO
Agora sim, estamos olhando para o lugar certo, tanto que tem lá o nosso root layout. Agora, seguimos o mesmo processo.

De volta ao VSCode no arquivo layout.js, já temos algumas importações na parte superior do arquivo. Teclamos "Enter" e na linha 1 faremos um import {}, abrindo e fechando as chaves.

Antes de informar o que desejamos importar, informamos de onde desejamos importar: from 'next/font/google'. E importamos uma fonte do Google. Que fonte é essa? É a fonte chamada Prompt.

layout.js
import { Prompt } from 'next/font/google'

// código omitido
COPIAR CÓDIGO
O Next estará atualizado aqui com esses casos de uso das fontes que podemos importar diretamente do Google.

Com a fonte importada, podemos dar sequência. Pegamos o exemplo da documentação. Nela, temos informando que quando tem uma fonte que é variante, não precisamos especificar quais são os pesos. Por exemplo, quanto mais bold ou mais negrito ou menos negrito, são pesos diferentes para a fonte. Existem fontes que sabem lidar com isso, por padrão, sem especificarmos e outras não conseguem.

A Prompt é uma delas. Como lidamos com esse tipo de fonte? Passamos uma propriedade que se chama weight, que é o peso, para quando fazemos a instanciação dessa classe.

A Prompt é uma classe e invocamos ela em uma função e passamos essa propriedade para dentro. Quando desejamos pegar múltiplos pesos, passamos um array.

Exemplo retirado da documentação:
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
COPIAR CÓDIGO
Aplicamos isso no código.

Temos na documentação o exemplo da Roboto. O que desejamos fazer é o exemplo da Prompt. No arquivo layout.js, após o const metadata, digitamos const prompt, sendo "prompt" com letra minúscula. O prompt receberá o resultado dessa função que vamos invocar, Prompt, passando um objeto: Prompt({}).

layout.js
// código omitido

const prompt = Prompt({

})

// código omitido
COPIAR CÓDIGO
Quais são as opções que temos que passar? Vamos voltar na documentação para verificar.

Neste momento, o instrutor apenas verificou as opções e já retornou ao VSCode para inseri-lo no código.
Primeiro é o peso, weight, que devemos usar os pesos 400 e os 600. Caso tenha algo diferente, conforme formos precisando, vamos adicionando. Além disso, temos que informar qual é o subset que desejamos. Como estamos falando do alfabeto latino, o subset é o latim.

Exemplo retirado da documentação:
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
COPIAR CÓDIGO
Os estilos não precisamos para já, que é normal ou itálico. Copiamos da documentação os subsets e o display. Colamos após o weight no arquivo layout.

layout.js
// código omitido

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

// código omitido
COPIAR CÓDIGO
No HTML, passamos o className={} dentro da tag, que será o nosso prompt.className.

layout.js
// código omitido

export default function RootLayout({ children }) {
  return (
        <html lang="pt-br" className={prompt.className}>

// código omitido
COPIAR CÓDIGO
Neste ponto, o Next irá aplicar essa fonte para toda a nossa aplicação.

Testando a aplicação
Vamos verificar isso funcionando? Importamos a fonte, invocamos a função, passamos as propriedades de configuração. Voltamos agora no Chrome, no Code Connect no seguinte endereço:

localhost:3000
COPIAR CÓDIGO
Recarregamos a página teclando "F5". Do lado direito, obtemos:

Console
► Image with src "https://ra warn-once.js:16w.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-reac t.png" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.
Read more: https://nextjs.org/docs/api-reference/next/image#priority
COPIAR CÓDIGO
Ele está mencionando novamente que detectou uma imagem que demora mais para carregar. Se quisermos dar prioridade, não vamos nos preocupar com isso agora. O que desejamos verificar é justamente o texto do card.

Clicamos no ícone de seta apontando para a diagonal superior esquerda do lado superior esquerdo do console. Ele está com fonte preta, mas o que desejamos fazer aqui é verificar para a fonte family.

Quando inspecionamos o elemento no título ou no parágrafo do card, ele já coloca uma fonte family, prompt, e adiciona um monte de caracteres, um hash, uma mistura de números e letras. Ele faz isso para garantir o cache.

Recapitulando
Resumindo, o que fizemos? Importamos a função prompt de next/fonte/google. Por que o Next oferece isso? Porque não é muito comum importarmos fonte diretamente do Google Fonts.

Importamos a fonte e executamos essa função passando quais são os pesos das fontes que vamos usar. Precisamos especificar exatamente o que desejamos: subset e o display. Com isso, temos o mínimo possível configurado para importar o className e com isso o Next irá aplicar essa fonte family.

Caso queira entender ao máximo como essa importação funciona, basta ler a documentação do Next. Vamos voltar nela. Temos o título "Font Optimization". Só tomando cuidado:

Lembre-se: na parte superior esquerda, estamos usando as aplicações novas da versão 13 online, sendo a "Using App Router".
Muito provavelmente já vão estar usando o app router. As aplicações mais antigas ou legadas vão usar o page router. De acordo com a aplicação que você quer importar nessa fonte, você tem que especificar corretamente na documentação qual é a versão que você quer apontar.

Conclusão e Próximos Passos
Tem mais coisas que precisamos fazer, que é o seguinte: o nosso card tem estilos: tamanho, uma caixa em cima que tem uma cor diferente da cor de baixo e uma borda arredondada.

Isso é pura e simplesmente CSS: CSS Modules. A dessa aula será escrever esse CSS. Não se preocupe: terá um gabarito se você precisar.

Mas a ideia é que você exercite um pouco do que você tem aprendido até agora. E quando nos referimos à CSS, não existe exatamente uma resposta certa. Tem várias formas de montar essa estilização. Então, esse é o seu desafio: estilizar esse card.

Caso você precise e queira comparar, terá o gabarito disponível. Posteriormente, você pode postar no Discord ou no fórum a sua versão desse card, explicando como você chegou nesses estilos. Estou sempre lendo as postagens lá e a comunidade vai ter acesso à sua versão do card de posts do Code Connect.

@@05
Mão na massa: estilos do card

Bora praticar CSS? No Code Connect estamos utilizando CSS Modules pra deixar os nossos componentes com o look and feel, com a identidade visual proposta pela designer no Figma:
A imagem mostra um modelo de design de interface do usuário para um aplicativo ou site. Na parte superior, há três janelas de visualização de interface com diferentes elementos de UI, como botões, ícones e barras de progresso, dispostos sobre um fundo gradiente suave. Abaixo, há um título em negrito que diz "Título do post em duas linhas". Um texto de exemplo em latim segue-se sob o título, funcionando como um placeholder para conteúdo real, comumente usado em designs e layouts para demonstrar a tipografia e o design do texto. Na parte inferior da imagem, há um ícone de usuário com o nome "@julio". A composição sugere um post ou artigo em um blog ou rede social, com foco em design de UI/UX.

Vale comentar que não existe uma única resposta certa para essa atividade, então, sinta-se livre para compartilhar a sua versão no fórum e no Discord.

E aproveitando que a gente está falando de estilizar componentes, super recomendo você dar uma olhada no artigo CSS com Next.js que cobre diversas formas de aplicar estilos em nossos componentes. Depois me diz o que achou!

05
Mão na massa: estilos do card

Bora praticar CSS? No Code Connect estamos utilizando CSS Modules pra deixar os nossos componentes com o look and feel, com a identidade visual proposta pela designer no Figma:
A imagem mostra um modelo de design de interface do usuário para um aplicativo ou site. Na parte superior, há três janelas de visualização de interface com diferentes elementos de UI, como botões, ícones e barras de progresso, dispostos sobre um fundo gradiente suave. Abaixo, há um título em negrito que diz "Título do post em duas linhas". Um texto de exemplo em latim segue-se sob o título, funcionando como um placeholder para conteúdo real, comumente usado em designs e layouts para demonstrar a tipografia e o design do texto. Na parte inferior da imagem, há um ícone de usuário com o nome "@julio". A composição sugere um post ou artigo em um blog ou rede social, com foco em design de UI/UX.

Vale comentar que não existe uma única resposta certa para essa atividade, então, sinta-se livre para compartilhar a sua versão no fórum e no Discord.

E aproveitando que a gente está falando de estilizar componentes, super recomendo você dar uma olhada no artigo CSS com Next.js que cobre diversas formas de aplicar estilos em nossos componentes. Depois me diz o que achou!

https://www.figma.com/file/k2uVg4mzbUmXMwHFQKzfLr/CodeConnect--%7C-Formação-Next?node-id=522%3A10942&mode=dev

https://www.alura.com.br/artigos/css-com-next-js

Então, como foi? Deixou o CardPost super estiloso? Essa rotina de pegar uma funcionalidade no Figma e transformar em componentes faz parte do nosso dia a dia enquanto pessoas desenvolvedoras que trabalham com front-end.
Mas não se preocupe, o dev careca e barbudo que você mais gosta aqui da Alura sempre deixa um gabarito pra você consultar sempre que precisar. Aqui no GitHub você consegue ver o meu commit com uma das possíveis soluções pra esse desafio.

O meu css ficou assim:

No src/app/globals.css:

* {
  box-sizing: border-box;
}
COPIAR CÓDIGO
O * é o nosso seletor de tudo. O box-sizing: border-box; é uma declaração de independência para os elementos, dizendo: "Quando eu definir um tamanho, isso inclui tudo – borda e padding!" Isso facilita a vida quando você está ajustando tamanhos e evita surpresas desagradáveis.

No src/components/Avatar/avatar.module.css:

.avatar {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    color: #888888;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; 
}
COPIAR CÓDIGO
No .avatar, estamos lidando com a lista que exibe o avatar do usuário e seu nome. A magia do display: flex; aqui faz com que tudo se alinhe como uma equipe bem treinada. justify-content: flex-end; alinha os itens à direita, enquanto align-items: center; garante que tudo fique no meio verticalmente. O gap: 8px; dá um espacinho entre os itens, para que não fiquem muito juntinhos, e a cor, tamanho e estilo da fonte garantem que o nome do usuário seja legível e estiloso.

No src/components/CardPost/cardpost.module.css:

.card {
    width: 486px;
    border-radius: 8px;
    background: #171D1F;
}

.header {
    border-radius: 8px 8px 0px 0px;
    background: #888;
    padding: 24px;
}

.header figure {
    margin: 0;
}

.body {
    color: #BCBCBC;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.body h2 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; 
    margin: 0;
}

.body p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin: 0;
    flex-grow: 1;
}

.footer {
    padding: 16px;
}
COPIAR CÓDIGO
No .card, temos uma caixa elegante de 486px de largura, com cantos arredondados (border-radius: 8px;) e um fundo escuro (background: #171D1F;).

O .header é a parte superior do nosso card, com o mesmo arredondamento dos cantos superiores e um fundo mais claro (background: #888;). O padding dá um respiro interno para que o conteúdo não fique colado nas bordas.

A tag figure dentro do .header é um container para imagens, que nós deixamos sem margem (margin: 0;) para manter tudo alinhado.

O .body é onde o conteúdo principal do post vive. A cor (color: #BCBCBC;), o padding e o display: flex; com flex-direction: column; organizam o título e o corpo do post um após o outro verticalmente, com um espaço (gap) entre eles para respirar.

Dentro do .body, os estilos para h2 e p definem como o título e o corpo do texto serão apresentados. Eles garantem que o texto seja claro e visível, com tamanhos de fonte apropriados, pesos (font-weight) e altura de linha (line-height) para uma leitura confortável. O flex-grow: 1; no p permite que o parágrafo cresça para ocupar o espaço disponível, se necessário.

Por último, o .footer é o espaço dedicado para o nosso componente Avatar. Um padding simpático para não deixar nada grudado nas bordas e pronto!

https://github.com/alura-cursos/3499-next-14-ssr-codeconnect/commit/4c16e4bd9e4f3a310a653a8ec413d9ec69442daa

@@06
Para saber mais: importação de fontes otimizadas

Ah, as fontes! Esses pequenos detalhes fazem toda a diferença na estética e usabilidade de um site. Vamos começar com as Google Fonts, um repositório de fontes onde você pode escolher entre uma variedade de estilos para dar aquele toque especial ao seu projeto. Ao importar uma fonte do Google, temos algumas configurações que podem otimizar o carregamento e a apresentação no navegador.
Primeiro, a propriedade subset. Ela é como um filtro que seleciona apenas os caracteres específicos que você precisa, algo essencial se você está lidando com idiomas que têm seu próprio conjunto de caracteres, como o cirílico ou o grego. Isso mantém seu pacote enxuto e seu site ágil.

Depois, temos o display. Essa propriedade define como a fonte será exibida durante o carregamento. O valor swap é um truque mágico que diz ao navegador: "Ei, use a fonte de fallback primeiro e depois troque pela fonte do Google assim que ela estiver pronta!" Isso evita que os usuários vejam aquele efeito desagradável de texto invisível enquanto a fonte está carregando.

Agora, sobre as variantes. Algumas fontes são como um canivete suíço, vêm com um monte de variantes - negrito, itálico, light, e por aí vai. Quando uma fonte não tem variantes, precisamos ser específicos sobre os weights que queremos. Isso é como dizer ao Google: "Só me envie esses pesos específicos, porque é tudo que eu vou usar". Economiza tempo de carregamento e mantém tudo mais leve.

Mas e se você precisar sair do mundo online e usar fontes locais? Nesse caso, você pode importá-las diretamente no seu projeto Next.js. É um pouquinho de trabalho manual, mas nada que uma pessoa desenvolvedora não dê conta. Basta adicionar as fontes aos seus assets e referenciá-las no seu CSS com @font-face, especificando o font-family, src, e font-weight para cada variação que você vai usar:


import localFont from 'next/font/local'
 
const myFont = localFont({
  src: './my-font.woff2',
  display: 'swap',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}
COPIAR CÓDIGO
E voilà! Seja com Google Fonts ou com fontes locais, seu Next.js vai ser estiloso e rápido, com todos os caracteres e pesos que você precisar, prontinho para encantar pessoas usuárias com uma experiência visual sem igual.

@@07
Next.js e imagens remotas

Considerando o objetivo de carregar imagens de um repositório específico no Bitbucket em seu projeto Next.js, como você modificaria a configuração do next.config.js para permitir esse carregamento?
Selecione uma alternativa

Implementando o seguinte trecho de código no next.config.js:
const nextConfig = {
    images: {
        domains: ['bitbucket.org'],
    },
};
module.exports = nextConfig;
 
Alternativa correta
Alterando o next.config.js para:
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'cdn.bitbucket.org', pathname: '/myteam/myrepo/**' },
        ],
    },
};
module.exports = nextConfig;
 
Embora a configuração especifique o protocolo, o hostname e um caminho, ela é muito específica para um único repositório e equipe, o que não combina com a tarefa de permitir imagens de qualquer repositório no Bitbucket.
Alternativa correta
Modificando o next.config.js assim:
const nextConfig = {
    images: {
        remotePatterns: [],
    },
};
module.exports = nextConfig;
 
Alternativa correta
Configurando o next.config.js da seguinte forma:
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'bitbucket.org', pathname: '**' },
        ],
    },
};
module.exports = nextConfig;
 
Esta configuração é correta, pois especifica o protocolo, o hostname do Bitbucket e um padrão de caminho que permite qualquer imagem dentro de repositórios hospedados no Bitbucket.

@@08
Faça como eu fiz: fontes do Google e configurações de imagens

Agora você vai criar o componente CardPost. Lembre-se de ajustar o next.config.js para permitir imagens vindas do raw.githubusercontent.com e faça a importação da fonte Prompt diretamente do Google.
Fique à vontade para assistir novamente os vídeos que precisar. Caso queira ir se acostumando com a documentação, você pode consultar:

Image Remote Patterns
Font Optmization
E não se esqueça de codar os estilos do Card, na atividade “Mão na massa”. Sem isso feito, você não vai conseguir seguir pra próxima aula.

https://nextjs.org/docs/app/api-reference/components/image#remotepatterns

https://nextjs.org/docs/app/building-your-application/optimizing/fonts

E, como sempre, o gabarito tá super disponível pra você.
Não deixe de compartilhar o seu progresso e ir tomando as notas para que você consiga compartilhar nas redes sociais como tem sido a sua jornada com o Next.js. Pode usar a hastag #aprendi na alura e me marcar no LinkedIn ou no Instagram

https://github.com/alura-cursos/3499-next-14-ssr-codeconnect/compare/aula-1...aula-2?expand=1

https://www.linkedin.com/in/vinny-neves/

https://www.instagram.com/vinicios_neves/

@@09
O que aprendemos?

Nessa aula, você aprendeu como:
Utilizar imagens remotas no componente Image;
Configurar as props obrigatórias do componente Image;
Importar fontes do Google;
Analisar os logs e reagir a avisos de configurações do Next.js que estão depreciadas.

##### 10/07/2024

@03-Obtendo dados da API

@01
Projeto da aula anterior

Caso queira começar daqui, você pode acessar o projeto da aula anterior, ou, se preferir, fazer o download do arquivo.
 DISCUTIR NO FÓRUM

 https://github.com/alura-cursos/3499-next-14-ssr-codeconnect/tree/aula-2

https://github.com/alura-cursos/3499-next-14-ssr-codeconnect/archive/refs/heads/aula-2.zip

@@02
Preparando o ambiente

Bora preparar o backend? Vamos utilizar o json-server pra subir uma API mockada, então você pode se apoiar nesse artigo que eu escrevi.
Para maximizar a compatibilidade com o curso, eu super recomendo você:

fazer downlaod do posts.json
instalar a mesma versão que eu do json server:

npm i -g json-server@1.0.0-alpha.22
COPIAR CÓDIGO
Então, com o terminal aberto na pasta onde você salvou o posts.json, você pode subir a api:


json-server posts.json -p 3042
COPIAR CÓDIGO
A saída no terminal deve ser alguma coisa parecida com:


JSON Server started on PORT :3042
Press CTRL-C to stop
Watching posts.json...

(˶ᵔ ᵕ ᵔ˶)

Index:
http://localhost:3042/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:3042/posts
COPIAR CÓDIGO
Bora comigo e então fazemos tudo isso juntos?

https://www.alura.com.br/artigos/mockando-apis-rest-com-json-server

https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts.json

@@04
Criando função fetch

Agora que temos o card estilizado e a API rodando, como podemos conectar todas essas peças?
Atenção: o terminal deve executar tanto o json-server em uma aba, quanto o npm run dev em outra aba, levantando o servidor Next. Ambos devem estar em execução; caso contrário, não conseguiremos fazer essa comunicação acontecer. O endereço "localhost:3000" deve retornar a página de posts, enquanto o "localhost:3042/posts" deve retornar o JSON.
Uma função para a todos governar
Com tudo no lugar, vamos implementar uma função que irá obter esses dados. Para isso, vamos abrir o VS Code no code-connect, a parte em que estamos trabalhando no projeto.

Criando a função getAllPosts()
Uma vez aberto o VS Code, vamos acessar o arquivo page.js.

page.js:
import { CardPost } from "@/components/CardPost"

const post = {
  "id": 1,
  "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
  "title": "Introdução ao React",
  "slug": "introducao-ao-react",
  "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
  "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
  "author": {
      "id": 101,
      "name": "Ana Beatriz",
      "username": "anabeatriz_dev",
      "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
  }
}

export default function Home() {
  return (
    <main>
      <CardPost post={post} />
    </main>
  )
}
COPIAR CÓDIGO
Essa é a nossa página inicial (homepage), ou seja, é a página que vai obter todos os dados. Para isso, usaremos uma função JavaScript. Vamos declará-la? Na linha 18, após a declaração de const post, indicaremos que é uma função assíncrona (async function) chamada getAllPosts().

Essa função irá pegar todos os posts disponíveis na nossa API. Para isso, usaremos a função fetch(), que espera uma URL, ou seja, uma string ('') com o endpoint que queremos conectar.

Podemos pegar esse endpoint do próprio navegador.
A função fetch() devolverá uma resposta, então vamos atribuí-la a uma const chamada response, por exemplo. Como assinamos a função com async, podemos usar await antes de fetch().

// código omitido

async function getAllPosts () {
  const response = await fetch('http://localhost:3042/posts')
}

// código omitido
COPIAR CÓDIGO
Dessa forma, fazemos o fetch() e aguardamos pela resposta.

Criando o tratamento de erro
Feito isso, podemos esboçar um tratamento de erro. Nesse caso, fazemos uma condicional if para conferir se a resposta está OK e se não é um status 200 (if (!response.ok)). No escopo do bloco if, podemos chamar o método console.log() com a mensagem "Ops, alguma coisa correu mal".

Se tudo der certo, podemos fazer um return de response.json().

async function getAllPosts () {
  const response = await fetch('http://localhost:3042/posts')
  if (!response.ok) {
    console.log('Ops, alguma coisa correu mal')
  }
  return response.json()
}
COPIAR CÓDIGO
Isso fará com que a função getAllPosts() encapsule a fonte de dados. Portanto, quem for consumir essa função não se preocupará se isso vem de uma API, de um arquivo TXT, ou de um banco de dados.

Temos a opção de colapsar a função no código, para não nos preocuparmos com qual é a fonte de dados.
Conectando o componente à função
Agora precisamos conectar o componente a esta função, isto é, à obtenção de dados. É nesta etapa que o Next começa a brilhar, principalmente da versão 3 em diante.

Vamos obter esses dados do lado do servidor. Não haverá aquele processo que fazemos em aplicações React, de usar o useEffect() passando um array vazio, para quando aquele componente montar, fazermos esse pedido e montarmos a tela. Não funcionará dessa forma.

Quando alguém fizer o pedido para a página, o servidor do Next fará este pedido do lado do servidor, montar a tela, e devolver para o navegador. Como fazemos isso?

Nesta versão do Next, a única coisa que precisamos fazer é anotar o componente como assíncrono (async), porque sendo o componente assíncrono, conseguimos fazer chamadas assíncronas e o Next fará tudo o que for necessário para obter os dados do lado do servidor.

// código omitido

export default async function Home() {
  return (
    <main>
      <CardPost post={post} />
    </main>
  )
}
COPIAR CÓDIGO
Se a única ação necessária é adicionar async antes de function Home(), podemos dizer na linha 28, após a declaração da função, que const posts receberá o resultado de await getAllPosts().

Com isso, aguardamos a resposta de fetch(), e o que vier de resposta do JSON, irá virar o array de posts. Assim, podemos trabalhar o componente como trabalharíamos em uma aplicação React. Na tag <main>, faremos um {posts.map()}, onde teremos acesso ao post e retornaremos o <CardPost>.

export default async function Home() {
  const posts = await getAllPosts()
  return (
    <main>
      {posts.map(post =>  <CardPost post={post} />)}
    </main>
  )
}
COPIAR CÓDIGO
Detalhe: nesse momento, a constante post da linha 3 pode ser comentada. Não precisamos mais dela, porque agora vamos pegar todos os posts da nossa API.
// const post = {
//   "id": 1,
//   "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
//   "title": "Introdução ao React",
//   "slug": "introducao-ao-react",
//   "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
//   "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
//   "author": {
//       "id": 101,
//       "name": "Ana Beatriz",
//       "username": "anabeatriz_dev",
//       "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
//   }
// }
COPIAR CÓDIGO
Vamos testar? Após salvar, verificaremos no navegador se tudo funcionou corretamente. De volta à página do Code Connect, ao recarregar, teremos acesso a todos os posts.

Ainda precisamos ajustar um pouco o layout, pois os posts estão um abaixo do outro sem nenhum tipo de espaçamento, mas ele pegou todos os posts e renderizou na tela para nós.

Conclusão
Sendo assim, ainda temos algumas coisas para fazer, principalmente tratamento de erros e ajustes de layout, mas a nossa API já se comunica com a nossa aplicação Next.

Vamos continuar, pois temos muitas coisas interessantes para trabalhar!

@@05
Escrevendo logs

Já temos nossa aplicação Next consumindo dados da API. Vamos abrir o inspecionador de elementos no navegador, no endereço "localhost:3000", e observar alguns pontos juntos.
Escrevendo logs
Vamos deixar a aba "Network" aberta no Developer Tools. Quando recarregamos a página, notamos que vários pedidos são feitos, mas nenhum deles é um pedido para a API "/posts".

Fazendo um paralelo, se estivéssemos em uma aplicação React, esse pedido com os posts estaria visível nesta aba, que seria o navegador pedindo e não o back-end, isto é, o nosso Next.

Agora, antes de seguirmos e evoluirmos, absorvendo ainda mais a funcionalidade do Next, vamos abrir o VS Code e acessar a função getAllPosts() no arquivo page.js. O que fazemos é um console.log() com a mensagem "Ops, alguma coisa correu mal".

O Next.js é um framework full-stack (completo) que fará back-end, front-end, e uma das coisas indispensáveis para termos uma boa aplicação em execução e conseguirmos trabalhar em cima de resolução de bugs, é termos os logs bem organizados.

Portanto, esses métodos console.log() que costumamos usar, às vezes, não tem nada errado, mas neste cenário, não necessariamente teremos, por exemplo, acesso ao terminal, ao bash, ou ao servidor. Dessa forma, quem rodará o Next, que está na Vercel?

Nesse cenário, precisamos ter alguma forma de trabalhar com logs.

Conhecendo o winston
Vamos mostrar como podemos fazer isso. De volta ao navegador, conheceremos o winston. Basicamente, o logger winston é um pacote que fará várias coisas super bacanas relacionadas a escrever logs na aplicação. Vamos entender como ele funciona?

Em README.md, há um link para a documentação, um texto que diz qual é a motivação, e um exemplo de uso para criar um logger e passar a poder escrever com ele.

Não usaremos mais o método console.log(), mas sim os logs de verdade, robustos, preparados para fazer o log que chamamos de aplicacional, referente a coisas que acontecem na nossa aplicação, seja um log de erro, um log informativo, ou um log de aviso.

Conectando o log com a aplicação
Com o terminal aberto, acabamos de fazer o commit do que fizemos no último vídeo, e o que vamos fazer agora é instalar o winston. Para isso, digitamos o seguinte comando:

npm install winston
COPIAR CÓDIGO
Com esse comando, será instalado o winston no code-connect. Como retorno, temos a mensagem de que deu tudo certo, com zero vulnerabilidades, o que é bem legal, e agora podemos criar o nosso logger.

Criando o logger
Observe o que vamos fazer e onde vamos criar. Primeiramente, vamos acessar o exemplo de criação do logger na documentação do winston e trabalharemos em cima desse exemplo. Copiaremos o trecho de código abaixo e na sequência faremos as alterações necessárias.

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}
COPIAR CÓDIGO
No VS Code, dentro de "src", criaremos um novo arquivo chamado logger.js. Neste arquivo, vamos colar o que código que copiamos do exemplo. O que vamos fazer de diferente?

Primeiro, vamos remover o defaultMeta da linha 6, porque isso só aumenta informações que podemos colocar no logger. Também vamos remover da linha 16 à linha 24.

Em seguida, vamos ajustar um detalhe: na linha 1, é importado o winston com require(), e o próprio VS Code pergunta se queremos converter isso pra módulos do ECMAScript. Faremos esse ajuste.

Na sequência, vamos remover o apelido das importações format e transports, deixando somente o nome sem underscore. Feito isso, precisamos fazer é os nomes no código. Na linha 5, colocaremos format.json(), e nas linhas 11 e 12, transports.File().

Assim, importamos createLogger, format e transports, e configuramos a instância do logger.

Por último, precisamos exportar isso. Em vez de fazer um export logger, faremos export default logger. Por padrão, ele exporta logger se alguém quiser importar alguma coisa deste arquivo.

logger.js:
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});

export default logger
COPIAR CÓDIGO
O que o winston está fazendo nesse momento? O nível (level) do nosso logger é informativo (info), então se fizermos um log verboso e fizermos algo muito específico, ele vai ignorar e colocará apenas do nível info para cima. Deixaremos uma atividade a seguir que vai detalhar esses níveis e algumas boas práticas em relação ao log.

O formato (format) será o JSON, e o transports, que é a camada de onde ficará esse log, separa tudo o que for erro em um arquivo chamado error.log, e todo o restante em combined.log.

São esses os arquivos que vamos usar. A única coisa que faremos será criar estes arquivos na raiz do nosso projeto, ao lado do arquivo package.json. Na raiz, clicamos com o botão direito e selecionamos "New File…". Primeiro criamos error.log, e depois combined.log.

Atenção: devemos criar na raiz, não em "src".
Utilizando o logger
Agora, como consumir este arquivo? Vamos voltar ao arquivo page.js, dentro de "src > app". Na linha 21, temos um console.log() com a mensagem "Ops, alguma coisa correu mal".

Porém, não vamos usar mais o método console.log(); chamaremos logger.error(), pois se alguma coisa deu errado, teremos um log de erro. Quando fizermos isso, o VS Code importará automaticamente o logger na linha 2, com import logger from "@/logger".

Fora do bloco if, se está tudo bem, ou seja, se a resposta for OK, podemos fazer, por exemplo, um logger.info() recebendo a mensagem "Posts obtidos com sucesso".

page.js:
import { CardPost } from "@/components/CardPost"
import logger from "@/logger"

// código omitido

async function getAllPosts () {
  const response = await fetch('http://localhost:3042/posts')
  if (!response.ok) {
    logger.error('Ops, alguma coisa correu mal')
  }
  logger.info('Posts obtidos com sucesso')
  return response.json()
}

// código omitido
COPIAR CÓDIGO
Testando o código
Uma vez salvo, como testamos isso? De volta ao navegador, vamos recarregar a página traz todos os posts. No VS Code, o arquivo combined.log terá a mensagem "Posts obtidos com sucesso".

combined.log:
{"level":"info","message":"Posts obtidos com sucesso"}
{"level":"info","message":"Posts obtidos com sucesso"}
COPIAR CÓDIGO
Era isso que queríamos mostrar. Imagine que digitamos algo errado, por exemplo, no arquivo page.js, onde fazemos await fetch(). Suponha que digitamos "/postss", com dois "S" no final.

Recarregando a página no navegador, ele informa que há um token não esperado e que não é um JSON válido. Agora, no arquivo error.log temos a mensagem "Ops, alguma coisa correu mal".

error.log:
{"level":"error","message":"Ops, alguma coisa correu mal"}
{"level":"error","message":"Ops, alguma coisa correu mal"}
COPIAR CÓDIGO
Assim, temos o log error.log separado do combined.log, mas ainda podemos organizar para não ficar tudo em error.log. Também podemos fazer o seguinte: não queremos que nossa aplicação quebre se algo der errado, então se a resposta não for OK, retornamos um array vazio (return []) para não quebrar a aplicação em que estivermos construindo esses posts.

page.js:
// código omitido

async function getAllPosts () {
  const response = await fetch('http://localhost:3042/posts')
  if (!response.ok) {
    logger.error('Ops, alguma coisa correu mal')
    return []
  }
  logger.info('Posts obtidos com sucesso')
  return response.json()
}

// código omitido
COPIAR CÓDIGO
Dessa forma, não ocorrerá aquele tipo de erro que visualizamos na tela, tudo ficará conforme esperado, e poderemos consultar os arquivos de log (combined.log e error.log).

Conclusão
Neste vídeo, aprendemos a configurar o logger winston na aplicação Code Connect!

@@06
Mão na massa: montando o grid dos card

Chegou a sua hora! Nessa atividade você terá de organizar um grid com os cards. Mas não se preocupe que vou te ajudar nessa missão, se você precisar. O layout proposto é esse:
A imagem apresenta quatro repetições de um modelo de post para uma interface de usuário de rede social ou blog, estruturados de maneira idêntica. Cada modelo inclui uma seção superior com três visualizações de interface de usuário, mostrando elementos de design como botões e gráficos sobre um fundo gradiente. Abaixo das visualizações, há um título em negrito "Título do post em duas linhas" e um parágrafo de texto em latim, utilizado como texto de preenchimento. No canto inferior direito de cada modelo, há um ícone circular representando um usuário, acompanhado pelo nome de usuário "@julio". O design é limpo e moderno, com uma paleta de cores que varia do roxo ao rosa, sugerindo uma estética minimalista e focada em usabilidade.

Existem várias formas de fazer isso. Por exemplo:

Flexbox
Grid
Lembre-se que você vai ter um gabarito, se precisar. Mas eu super recomendo que você experimente, pratique e chegue a uma versão sua desse grid!

Tudo no lugar? Os cards ficaram todos bem posicionados? Missão cumprida! Parabéns.
https://media1.tenor.com/m/g5cyfFrLhD0AAAAC/despicable-me-minions.gif

Praticar é uma das melhores formas de aprender. Então to orgulhoso por você ter chegado ao seu resultado. E claro que eu também resolvi esse desafio, vou te passar o meu resultado: aqui no github você consegue ver exatamente os arquivos que eu alterei.

Vamos analisar juntos?

Pra montar o layout base, com o aside sempre a esquerda, eu fiz assim:

No arquivo src/app/globals.css:


* {
  box-sizing: border-box;
}
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
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
}
COPIAR CÓDIGO
E no arquivo:


// imports omitidos

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='app-container'>
          <div>
            <Aside />
          </div>
          <div className='main-content'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
COPIAR CÓDIGO
Repara que o main-content é o conteúdo principal da página, que vai crescer até a largura máxima disponível.

Pra montar o grid, eu fui de flebox:


.grid {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: space-between;
}
COPIAR CÓDIGO
O display: flex; alinha os elementos lado a lado. O gap: 24px; vai dar um espaço de respiro entre os cards, para que tudo não fique amontoado. O flex-wrap: wrap; permite que os elementos, ao chegarem no fim da linha, comecem uma nova, assim como quando você está escrevendo e chega no fim da margem do papel. E o justify-content: space-between; distribui os elementos ao longo do eixo horizontal (eixo x), garantindo que o espaço entre cada um seja igual. Prático, né?

E, pra fechar, eu adicionei um height: 100%; no Aside pra ele ficar com a altura máxima disponível!

https://www.alura.com.br/artigos/css-guia-do-flexbox

https://www.alura.com.br/artigos/criando-layouts-com-css-grid-layout

@@07
Para saber mais: a importância de bons logs

Desde os primeiros computadores, manter um registro sequencial dos processos é super importante para entendermos a ordem de execução das coisas e identificar falhas.
Logs economizam tempo e são essenciais na resolução de problemas e suporte de incidentes. Eles são fundamentais para rastrear o fluxo da informação e melhorar o desempenho, algo que a monitorização de desempenho de aplicativos (APM) não consegue sozinha.

A análise de log é crucial. Logs revelam comportamentos anormais e possíveis pontos de melhoria. Ferramentas apropriadas podem descobrir gargalos de desempenho e melhorias não visíveis durante o desenvolvimento. A análise prolongada de logs também ajuda a identificar falhas de segurança.

Existem dois tipos principais de logs: diagnóstico e auditoria. Logs de diagnóstico estão relacionados ao comportamento da aplicação e ao fluxo da informação - como por exemplo dizer que algo deu errado, quando e porquê, enquanto logs de auditoria registram transações (quem fez o que e quando), para requisitos de software ou simplesmente para o cumprimento de leis.

Um ponto importante: devemos sempre usar níveis apropriados de log para identificar a criticidade dos eventos.

Os níveis básicos são:

error - erro,
warning - aviso,
info - informação,
debug - depuração
trace - rastreamento.
Quando a gente precisa solucionar um problema em uma aplicação Node.js, os logs podem ser fundamentais para entender a gravidade e a causa do problema. Stack traces (rastros de pilha) e outros tipos de atividades podem ser capturados em logs e vinculados a IDs de uma sessão específica, ID de um usuário — qualquer coisa que ajude a monitorar sua aplicação de forma mais eficiente.

O Node.js já vem com recursos de registro de logs integrados, como o console.log, mas uma biblioteca dedicada de logs, como o Winston, oferece mais opções para escrever os registros da sua aplicação. E foi por isso que utilizamos ele!

Para conhecer mais sobre o winston, que tal uma olhada na documentação para ir mais fundo sobre o quão poderoso ele é.

https://github.com/winstonjs/winston

@@08
Tratamento de erros

Durante nossa aula, implementamos uma integração com a api que levantamos com o json-server:

async function getAllPosts () {
  const response = await fetch('http://localhost:3042/posts')
  if (!response.ok) {
    logger.error('Ops, alguma coisa correu mal')
    return []
  }
  logger.info('Posts obtidos com sucesso')
  return response.json()
}
COPIAR CÓDIGO
Como você poderia melhorar a função getAllPosts para garantir que ela lide de forma mais eficaz com possíveis erros de rede e respostas não esperadas do servidor?

Selecione 2 alternativas



async function getAllPosts () {
  return fetch('http://localhost:3042/posts')
    .then(response => response.json())
    .catch(error => {
      logger.error('Ops, algo correu mal');
      return [];
    });
}
 
Alternativa correta
async function getAllPosts () {
  try {
    const response = await fetch('http://localhost:3042/posts');
    if (!response.ok) throw new Error('Falha na rede');
    return response.json();
  } catch (error) {
    logger.error('Ops, algo correu mal: ' + error.message);
    return [];
  }
}
 
Esta alternativa adiciona um bloco try-catch para lidar com exceções lançadas durante a requisição, incluindo erros de rede, e utiliza a mensagem de erro para informar o problema.
Alternativa correta
async function getAllPosts () {
  const response = await fetch('http://localhost:3042/posts');
  if (!response.ok) {
    logger.error('Falha na resposta do servidor');
    return [];
  }
  return response.json();
}
 
Alternativa correta
async function getAllPosts () {
  const response = await fetch('http://localhost:3042/posts').catch(error => {
    logger.error('Erro de rede: ' + error.message);
    return null;
  });
  if (!response || !response.ok) {
    logger.error('Problema ao obter os posts');
    return [];
  }
  return response.json();
}
 
Esta alternativa utiliza o método .catch() para capturar erros de rede e verifica se response é um objeto válido e se response.ok é verdadeiro antes de tentar converter a resposta em JSON.

@@09
Faça como eu fiz: integração com a API

Bora então codar essa integração? A gente começa pelo JSON Server. Você pode baixar o arquivo posts.json:
posts.json
Instalar o json-server:


npm i -g json-server@1.0.0-alpha.22
COPIAR CÓDIGO
Então, com o terminal aberto na pasta onde você salvou o posts.json, você pode subir a api:


json-server posts.json -p 3042
COPIAR CÓDIGO
E agora é a hora de implementar o fetchque vai buscar todos os posts disponíveis para o Code Connect.

https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts.json

E, como sempre, o gabarito tá super disponível pra você.
Não deixe de compartilhar o seu progresso e ir tomando as notas para que você consiga compartilhar nas redes sociais como tem sido a sua jornada com o Next.js. Pode usar a hashtag #aprendinaalura e me marcar no LinkedIn ou no Instagram

https://github.com/alura-cursos/3499-next-14-ssr-codeconnect/compare/aula-2...aula-3?expand=1

https://www.linkedin.com/in/vinny-neves/

https://www.instagram.com/vinicios_neves/

@@10
O que aprendemos?

Nessa aula, você aprendeu como:
Subir uma API usando o json-server;
Obter dados do lado do Servidor;
Configurar o winton como o logger da Code Co