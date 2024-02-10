# Instalação

## Instalando o pacote do swiper

Para instalar o pacote do swiper, basta executar o comando abaixo:

```bash
npm install swiper
```

De acordo com a documentação do swiper, se eu quero impportar elementos customizados a partir do node_modules, eu preciso registrar manualmente. No caso do react, para facilitar o uso, importarei os elementos customizados swiper-container e swiper-slide no componente que eu quero usar.

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