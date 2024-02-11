# Instalação

## Instalando o pacote do swiper

Para instalar o pacote do swiper, basta executar o comando abaixo:

```bash
npm install swiper
```

De acordo com a documentação do swiper, se eu quero importar elementos customizados a partir do node_modules, eu preciso registrar manualmente. No caso do react, para facilitar o uso, importarei os elementos customizados swiper-container e swiper-slide no componente que eu quero usar.

```javascript
import { register } from "swiper/element";
register();
```

e então poderá utilizar os elementos customizados:

```javascript
<swiper-container>
	<swiper-slide>Slide 1</swiper-slide>
	<swiper-slide>Slide 2</swiper-slide>
	<swiper-slide>Slide 3</swiper-slide>
</swiper-container>
```

em caso de typescript, é necessário criar um arquivo de declaração para o swiper, para que o typescript entenda o que está sendo importado. Para isso, crie um arquivo chamado swiper.d.ts e adicione o seguinte conteúdo:

```typescript
declare namespace JSX {
	interface IntrinsicElements {
	    'swiper-container': any;
	    'swiper-slide': any;
	  }
  }
```

## Parâmetros como Atributos

Todos os parâmetros estão disponíveis no formato kebab-case no swiper-container. Por exemplo:

```javascript
<swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>
```

Todos os parâmetros que podem ser passados como objetos podem ser passados como atributos. Por exemplo, a configuração:

```javascript
new Swiper('.swiper', {
  slidesPerView: 3,
  grid: {
    rows: 3,
  },
  mousewheel: {
    forceToAxis: true,
  },
});
```

pode ser passada como:

```javascript
<swiper-container slides-per-view="3" grid='{"rows": 3}' mousewheel='{"forceToAxis": true}'>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>
```

## Parâmetros como Propriedades

Em alguns casos mais complexos, por exemplo quando temos breakpoints, nós podemos passar os parâmetros como propriedades. Por exemplo, no caso abaixo, utilizamos init="false" para que o swiper não seja inicializado automaticamente. Somento após a atribuição dos parâmetros, chamamos o método initialize() para inicializar o swiper.

```javascript
<swiper-container init="false">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  ...
</swiper-container>
<script>
  // swiper element
  const swiperEl = document.querySelector('swiper-container');

  // swiper parameters
  const swiperParams = {
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    on: {
      init() {
        // ...
      },
    },
  };

  // now we need to assign all parameters to Swiper element
  Object.assign(swiperEl, swiperParams);

  // and now initialize it
  swiperEl.initialize();
</script>
```

* Atributos: São como as especificações básicas de um carro, definidas no momento da compra, como cor, modelo e tipo de combustível. No HTML do Swiper, você define atributos para ajustes diretos e básicos, como a largura do slider ou se ele deve iniciar automaticamente.

* Parâmetros: São como os ajustes personalizados que você faz em um carro após a compra, como instalar um sistema de som personalizado ou alterar a suspensão. No JavaScript do Swiper, os parâmetros permitem configurações avançadas e detalhadas, como definir breakpoints para responsividade ou habilitar efeitos especiais.

* Propriedades: São como as características de um carro que você pode ajustar a qualquer momento, como ajustar o banco ou o volante. No JavaScript do Swiper, as propriedades permitem ajustes dinâmicos e instantâneos, como alterar a largura do slider ou adicionar novos slides.

## Atualizando parâmetros

Os parâmetros do Swiper podem ser atualizados diretamente alterando os atributos do elemento Swiper ou as propriedades do HTMLElement (se ele foi inicializado com props).

```html
<swiper-container slides-per-view="1">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>

</swiper-container>

<button>Update</button>

<script>
  const swiperEl = document.querySelector('swiper-container');
  const buttonEl = document.querySelector('button');

  buttonEl.addEventListener('click', () => {
	// Se isso foi inicializado com atributos
    swiperEl.setAttribute('slides-per-view', '3');

	// ou se foi inicializado com props
    swiperEl.slidesPerView = 3;
  });
</script>
```
## Acesso à instância do Swiper

A instância inicializada do Swiper está disponível como propriedade swiper do HTMLElement do Swiper.

* Obs: Veja que o querySelector está buscando por 'swiper-container' e não por 'swiper'. Isso porque o querySelector busca por elementos HTML e não por componentes React.

```html
<swiper-container slides-per-view="1">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  ...
</swiper-container>

<button>Slide Next</button>

<script>
  const swiperEl = document.querySelector('swiper-container');
  const buttonEl = document.querySelector('button');

  buttonEl.addEventListener('click', () => {
    swiperEl.swiper.slideNext();
  });
</script>
```

## Eventos

Todos os eventos do Swiper estão disponíveis como eventos DOM nativos, mas com nomes em minúsculas e prefixo swiper (configurável via parâmetro events-prefix). Por exemplo, slideChange se torna swiperslidechange.

Todos os argumentos do manipulador de eventos são passados como array em event.detail:

* Obs: Não tem motivo nenhum pra ser um array, só usaram isso pra deixar confuso mesmo. Se tu quer saber o que tá vindo, tem que olhar a documentação ou dar um console.log(event) e ver o que tá vindo.

```html
<swiper-container>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>

<script>
  const swiperEl = document.querySelector('swiper-container');

  swiperEl.addEventListener('swiperprogress', (event) => {
    const [swiper, progress] = event.detail;
  });

  swiperEl.addEventListener('swiperslidechange', (event) => {
    console.log('slide changed');
  });
</script>
```

Também é possível prefixar os nomes dos eventos emitidos para evitar conflitos com outras bibliotecas ou eventos nativos usando o atributo/parâmetro events-prefix:

```html
<swiper-container events-prefix="swiper-">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>

<script>
  const swiperEl = document.querySelector('swiper-container');

  swiperEl.addEventListener('swiper-progress', (event) => {
    const [swiper, progress] = event.detail;
  });

  swiperEl.addEventListener('swiper-slidechange', (event) => {
    console.log('slide changed');
  });
</script>
```

## Paginação, Navegação, Barra de Rolagem

Basicamente, se você não passar os elementos de módulos em parâmetros, o Swiper os renderizará automaticamente. Mas se você quer ter controle sobre eles, você deve passar os elementos de módulos em parâmetros, como mostrado abaixo:

```html
<!-- habilitar navegação, paginação, barra de rolagem -->
<swiper-container navigation="true" pagination="true" scrollbar="true">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>
```

Obviamene, você pode passar como false para desabilitar a navegação, paginação e barra de rolagem.

## Lazy Loading (Carregamento Tardio)

* O carregamento tardio de imagens é uma técnica que adia o carregamento de imagens não essenciais até que elas sejam necessárias. Isso pode ser útil para reduzir o tempo de carregamento da página e economizar largura de banda, algum cliente

Se você usar imagens de carregamento tardio, é necessário adicionar o elemento de pré-carregador preguiçoso a cada slide. O componente swiper-slide pode fazer isso automaticamente adicionando o atributo lazy="true":

```html
<swiper-container>
  <!-- o atributo lazy="true" renderizará automaticamente o elemento de pré-carregador -->
  <swiper-slide lazy="true">
    <img src="..." loading="lazy" />
  </swiper-slide>
  <swiper-slide lazy="true">
    <img src="..." loading="lazy" />
  </swiper-slide>
  <swiper-slide lazy="true">
    <img src="..." loading="lazy" />
  </swiper-slide>
</swiper-container>
```

## Slides Virtuais

Temos 2 opções para usar slides virtuais nos componentes web Swiper.

* Slides virtuais no Swiper são uma técnica para otimizar o desempenho e a experiência do usuário em sliders com um grande número de slides. Em vez de renderizar todos os slides na tela de uma só vez, os slides virtuais são renderizados apenas quando necessário, à medida que o usuário navega pelo slider.

A primeira opção é passar slides na matriz virtual.slides, mas exigirá o uso de propriedades do elemento para inicializar o elemento Swiper:

```html
<swiper-container init="false"></swiper-container>
<script>
  // elemento swiper
  const swiperEl = document.querySelector('swiper-container');
  // parâmetros do swiper
  const swiperParams = {
    virtual: {
      // slides virtuais
      slides: ['Slide 1', 'Slide 2', 'Slide 3'],
    },
  };
  // atribuir todos os parâmetros ao elemento Swiper
  Object.assign(swiperEl, swiperParams);

  // e agora inicialize-o
  swiperEl.initialize();
</script>
```

Desde a versão 9, os slides virtuais do Swiper podem funcionar com slides originalmente renderizados no DOM. Na inicialização, ele os removerá do DOM, armazenará em cache e, em seguida, reutilizará os que são necessários:

```html
<!-- é suficiente adicionar o atributo virtual="true" -->
<swiper-container virtual="true">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>
```

## Thumbs

* Thumbs são miniaturas de imagens que são usadas para navegar rapidamente entre slides em um slider. Eles são úteis para fornecer uma visão geral rápida de todos os slides disponíveis e permitir que os usuários naveguem diretamente para um slide específico.

Na versão 9, thumbs.swiper também aceita o seletor CSS dos thumbs swiper. Portanto, para fazer ambos com elementos Swiper, podemos usar o seguinte:

```html
<!-- swiper principal, passar thumbs swiper como seletor CSS -->
<swiper-container thumbs-swiper=".my-thumbs"> ... </swiper-container>

<!-- thumbs swiper -->
<swiper-container class="my-thumbs"> ... </swiper-container>
```

## Controlador

Assim como com Thumbs, o Controlador na versão 9 também aceita o seletor CSS:

```html
<swiper-container class="swiper-1" controller-control=".swiper-2">
  ...
</swiper-container>

<swiper-container class="swiper-2" controller-control=".swiper-1">
  ...
</swiper-container>

```

## Injetando Estilos

Se você precisar adicionar estilos ao escopo do shadow DOM, poderá usar os parâmetros injectStyles ou injectStylesUrls, por exemplo:

```html
<swiper-container init="false"> ... </swiper-container>

<script type="module">
  import { register } from 'swiper/element/bundle';

  register();

  const swiperEl = document.querySelector('swiper-container');

  const params = {
    // array com estilos CSS
    injectStyles: [
      `
      :host(.red) .swiper-wrapper {
        background-color: red;
      }
      `,
    ],

    // array com urls CSS
    injectStylesUrls: ['path/to/one.css', 'path/to/two.css'],
  };

  Object.assign(swiperEl, params);

  swiperEl.initialize();
</script>
```

## Versão do Core e Módulos

Também há uma versão Core do elemento Swiper disponível (sem módulos adicionais).

Ele pode ser importado dos módulos node:

```javascript
// importar função para registrar elementos personalizados do Swiper Core
import { register } from 'swiper/element';
// registrar elementos personalizados do Swiper
register();
```

Para adicionar módulos, precisamos usar o parâmetro modules como de costume para incluir scripts de módulos, e também precisamos adicionar estilos de módulos globalmente e também injetar estilos de módulos no shadow DOM

```html
<swiper-container init="false"> ... </swiper-container>

<script>
  import { register } from 'swiper/element';
  import { Navigation, Pagination } from 'swiper/modules';

  register();

  const swiperEl = document.querySelector('swiper-container');

  const params = {
    modules: [Navigation, Pagination],
    // injetar estilos de módulos no shadow DOM
    injectStylesUrls: [
      'path/to/navigation-element.min.css',
      'path/to/pagination-element.min.css',
    ],
  };

  Object.assign(swiperEl, params);

  swiperEl.initialize();
</script>
```

Há as seguintes importações de estilos de módulos de elementos disponíveis:

* swiper/element/css/a11y - estilos necessários para o módulo A11y
* swiper/element/css/autoplay - estilos necessários para o módulo Autoplay
* swiper/element/css/controller - estilos necessários para o módulo Controller
* swiper/element/css/effect-cards - estilos necessários para o módulo Cards Effect
* swiper/element/css/effect-coverflow - estilos necessários para o módulo Coverflow Effect
* swiper/element/css/effect-creative - estilos necessários para o módulo Creative Effect
* swiper/element/css/effect-cube - estilos necessários para o módulo Cube Effect
* swiper/element/css/effect-fade - estilos necessários para o módulo Fade Effect
* swiper/element/css/effect-flip - estilos necessários para o módulo Flip Effect
* swiper/element/css/free-mode - estilos necessários para o módulo Free Mode
* swiper/element/css/grid - estilos necessários para o módulo Grid
* swiper/element/css/hash-navigation - estilos necessários para o módulo Hash Navigation
* swiper/element/css/history - estilos necessários para o módulo History
* swiper/element/css/keyboard - estilos necessários para o módulo Keyboard
* swiper/element/css/manipulation - estilos necessários para o módulo Manipulation
* swiper/element/css/mousewheel - estilos necessários para o módulo Mousewheel
* swiper/element/css/navigation - estilos necessários para o módulo Navigation
* swiper/element/css/pagination - estilos necessários para o módulo Pagination
* swiper/element/css/parallax - estilos necessários para o módulo Parallax
* swiper/element/css/scrollbar - estilos necessários para o módulo Scrollbar
* swiper/element/css/thumbs - estilos necessários para o módulo Thumbs

## Slots

Por padrão, todos os filhos do swiper-container são renderizados como filhos do elemento .swiper-wrapper. Se você precisar adicionar elementos antes ou depois, existem dois slots disponíveis:

* container-start - será renderizado antes de .swiper-wrapper
* container-end - será renderizado após .swiper-wrapper

```html
<swiper-container>
  <div slot="container-start">Renderizado antes do wrapper</div>
  <div slot="container-end">Renderizado após o wrapper</div>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  ...
</swiper-container>
```

## Partes

Existem as seguintes partes CSS disponíveis para estilização:

* container - estilos para <div class="swiper">
* wrapper - estilos para <div class="swiper-wrapper">
* button-prev - estilos para botão de navegação anterior <div class="swiper-button-prev">
* button-next - estilos para botão de navegação seguinte <div class="swiper-button-next"> 
* pagination - estilos para contêiner de paginação <div class="swiper-pagination">
* bullet - estilos para elemento de bullet de paginação
* bullet-active - estilos para elemento de bullet de paginação ativo
* scrollbar - - estilos para contêiner de barra de rolagem <div class="swiper-scrollbar">

Por exemplo:

```css
swiper-container::part(bullet-active) {
  background-color: red;
}
```

## Parâmetros de Registro 

Desde a versão 9.1.0, há uma nova função global window.SwiperElementRegisterParams para registrar novos (ou extras) parâmetros que não fazem parte dos parâmetros padrão do Swiper. Isso pode ser necessário se você usar o elemento Swiper com alguns plugins personalizados que estendem os parâmetros do Swiper.

```javascript
// registrar props do HTMLElement swiper-container para serem tratados como parâmetros do Swiper

window.SwiperElementRegisterParams(['foo', 'bar']);

const swiperEl = document.querySelector('swiper-container');

Object.assign(swiperEl, {
  foo: 1,
  bar: 2,
});

swiperEl.initialize();
``` 

## Uso com React

O React ainda não oferece suporte total para componentes web (a partir da versão 18). Portanto, o uso é basicamente o mesmo que no HTML:

```javascript
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

export const MyComponent = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // ouvir eventos do Swiper usando addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="3"
      navigation="true"
      pagination="true"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
  );
};
``` 