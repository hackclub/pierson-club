# Toolbox

## HTML

What are some tags at our disposal?

<hr>

**div** defines a basic block of text

**code:** 

```html
<div>
  a basic block of text
</div>
```

**result:** 

<div>
  a basic block of text
</div>

<hr>

**a** defines a link

**code:** 

```html
<a href="https://www.google.com">google</a>
```

**result:** 

<a href="https://www.google.com">google</a>

<hr>

**strong** makes text bold

**code:** 

```html
<strong>bold</strong>
```

**result:** 

<strong>bold</strong>

<hr>

**em** make text italic

**code:** 

```html
<em>italic</em>
```

**result:** 

<em>bold</em>

<hr>

**marquee** makes text scroll

**code:** 

```html
<marquee>wheeee!</marquee>
```

**result:** 

<marquee>wheeee!</marquee>

<hr>

**img** add images to your site, to get image src go to google images and right click then hit "Copy Image Address"

**code:** 

```html
<img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308404421/1800" alt="tern" height="200">
```

**result:** 

<img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308404421/1800" alt="tern" height="200">

<hr>


### Custom Components

These will behave just like regular components except we made them just for you.

<hr>

**hash-check** will only display if the route matches the url you can link to it with an **a** tag

**code:** 

```html
<hash-check route="page0">
  <div>hash-check content</div>
</hash-check>

<!-- which can be linked to with -->

<a href="./#/page0">link to page0</a>
```
<hr>

**follow-mouse** the contents will follow your mouse around

**code:** 

```html
<follow-mouse>
  <div>follow me!</div>
</follow-mouse>

<follow-mouse x>
  <div>follow only on x</div>
</follow-mouse>

<follow-mouse y>
  <div>follow only on y</div>
</follow-mouse>
```

<hr>

**wc-blink** give people seizures

**code:** 

```html
<wc-blink>
  <div>flash</div>
</wc-blink>

<wc-blink rate="0.5s">
  <div>set the rate with an attribute</div>
</wc-blink>
```

<hr>

**click-through** make a slideshow that you can click through

**code:** 

```html
<click-through>
  <div>first thing</div>
  <div>second thing</div>
  <div>third thing</div>
</click-through>
```

<hr>

## CSS

[Here](https://jgthms.com/web-design-in-4-minutes/) is a great intro to quickly working magic with css from the creator of a popular CSS library (Bulma).

Here are some common CSS properties you'll want to look into:

- border
- border-radius
- box-sizing
- margin
- padding
- background
- color
- font
- grid
- flexbox
- position
- transform

## Dev Tools

- inspect element
- change styles
- view dom








