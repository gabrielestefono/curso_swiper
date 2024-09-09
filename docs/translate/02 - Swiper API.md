# Swiper API

## Swiper Full HTML Layout

```jsx
<!-- Slider main container -->
<div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>
```

## Styles

Swiper package contains different sets of CSS, Less and SCSS styles:

### CSS Styles

CSS styles for bundle version:

- `swiper-bundle.css` - all Swiper styles including all modules styles (like Navigation, Pagination, etc.)
- `swiper-bundle.min.css` - same as previous but minified

CSS styles for bundle version (package imports):

- `swiper/css` - all Swiper styles including all modules styles (like Navigation, Pagination, etc.)
- `swiper/css/bundle` - same as previous but minified

CSS styles for core version and modules (package imports):

- `swiper/css` - only core Swiper styles
- `swiper/css/a11y` - styles required for A11y module
- `swiper/css/autoplay` - styles required for Autoplay module
- `swiper/css/controller` - styles required for Controller module
- `swiper/css/effect-cards` - styles required for Cards Effect module
- `swiper/css/effect-coverflow` - styles required for Coverflow Effect module
- `swiper/css/effect-creative` - styles required for Creative Effect module
- `swiper/css/effect-cube` - styles required for Cube Effect module
- `swiper/css/effect-fade` - styles required for Fade Effect module
- `swiper/css/effect-flip` - styles required for Flip Effect module
- `swiper/css/free-mode` - styles required for Free Mode module
- `swiper/css/grid` - styles required for Grid module
- `swiper/css/hash-navigation` - styles required for Hash Navigation module
- `swiper/css/history` - styles required for History module
- `swiper/css/keyboard` - styles required for Keyboard module
- `swiper/css/manipulation` - styles required for Manipulation module
- `swiper/css/mousewheel` - styles required for Mousewheel module
- `swiper/css/navigation` - styles required for Navigation module
- `swiper/css/pagination` - styles required for Pagination module
- `swiper/css/parallax` - styles required for Parallax module
- `swiper/css/scrollbar` - styles required for Scrollbar module
- `swiper/css/thumbs` - styles required for Thumbs module
- `swiper/css/virtual` - styles required for Virtual module
- `swiper/css/zoom` - styles required for Zoom module

## SCSS Styles

SCSS styles are also separate styles for core version and modules (package imports):

- `swiper/scss` - only core Swiper styles
- `swiper/scss/bundle` - all Swiper styles including all modules styles (like Navigation, Pagination, etc.)
- `swiper/scss/a11y` - styles required for A11y module
- `swiper/scss/autoplay` - styles required for Autoplay module
- `swiper/scss/controller` - styles required for Controller module
- `swiper/scss/effect-cards` - styles required for Cards Effect module
- `swiper/scss/effect-coverflow` - styles required for Coverflow Effect module
- `swiper/scss/effect-creative` - styles required for Creative Effect module
- `swiper/scss/effect-cube` - styles required for Cube Effect module
- `swiper/scss/effect-fade` - styles required for Fade Effect module
- `swiper/scss/effect-flip` - styles required for Flip Effect module
- `swiper/scss/free-mode` - styles required for Free Mode module
- `swiper/scss/grid` - styles required for Grid module
- `swiper/scss/hash-navigation` - styles required for Hash Navigation module
- `swiper/scss/history` - styles required for History module
- `swiper/scss/keyboard` - styles required for Keyboard module
- `swiper/scss/manipulation` - styles required for Manipulation module
- `swiper/scss/mousewheel` - styles required for Mousewheel module
- `swiper/scss/navigation` - styles required for Navigation module
- `swiper/scss/pagination` - styles required for Pagination module
- `swiper/scss/parallax` - styles required for Parallax module
- `swiper/scss/scrollbar` - styles required for Scrollbar module
- `swiper/scss/thumbs` - styles required for Thumbs module
- `swiper/scss/virtual` - styles required for Virtual module
- `swiper/scss/zoom` - styles required for Zoom module

## Initialize Swiper

Now, when we have Swiper's HTML, we need to initialize it using the following function:
new Swiper(swiperContainer, parameters)- initialize swiper with options

- swiperContainer - HTMLElement or string (with CSS Selector) of swiper container HTML element. Required.
- parameters - object - object with Swiper parameters. Optional.
- **Method returns initialized Swiper instance**
-

For example:

```javascript
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
});
```

**After** you initialize Swiper it is possible to access to Swiper's instance on its HTMLElement. It is `swiper`
property of Swiper's HTML container element:

````javascript
const swiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
swiper.slideNext();
````

## Parameters

Let's look on list of all available parameters:

---

| Name                     | Type                   | Default  | Description                                                                                                                                                                                                                                                                                                       |
|--------------------------|------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| a11y                     | 	any                   |          | Object with a11y parameters or boolean true to enable with default settings.                                                                                                                                                                                                                                      |
| allowSlideNext           | 	boolean               | 	true    | Set to false to disable swiping to next slide direction (to right or bottom)                                                                                                                                                                                                                                      |
| allowSlidePrev           | boolean                | true     | Set to false to disable swiping to previous slide direction (to left or top)                                                                                                                                                                                                                                      |
| allowTouchMove           | boolean                | true     | If false, then the only way to switch the slide is use of external API functions like slidePrev or slideNext                                                                                                                                                                                                      |
| autoHeight               | boolean                | false    | Set to true and slider wrapper will adapt its height to the height of the currently active slide                                                                                                                                                                                                                  |
| autoplay                 | any                    |          | Object with autoplay parameters or boolean true to enable with default settings                                                                                                                                                                                                                                   |
| breakpoints              | object                 |          | Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which do not require different layout and logic, like slidesPerView, slidesPerGroup, spaceBetween, grid.rows. Such parameters like loop and effect won't work |
| breakpointsBase          | 'container' - 'window' | 'window' | Base for breakpoints (beta). Can be window or container. If set to window (by default) then breakpoint keys mean window width. If set to container then breakpoint keys treated as swiper container width                                                                                                         |
| cardsEffect              | 	any                   |          | Object with Cards-effect parameters                                                                                                                                                                                                                                                                               |
| centerInsufficientSlides | boolean                | 	false   | When enabled it center slides if the amount of slides less than slidesPerView. Not intended to be used loop mode and grid.rows                                                                                                                                                                                    |
