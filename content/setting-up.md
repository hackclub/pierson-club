# Setting Up

Here is a minimal HTML set-up.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- you can ignore these -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">

    <!-- imports, this you can ignore too -->
    <script type="module" src="https://component-host.maxwofford.repl.co/components.js"></script>

    <!-- this is the title you see inthe tab -->
    <title>NAME HERE</title>

    <!-- this changes how the page looks -->
    <style>
      
    </style>

  </head>

  <body>

  </body>
</html>
```

Take not of these different sections but it's okay to copy the scaffold to get started.

You can also start with this website.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>simple-site</title>
  <script src="https://hackclub.github.io/pierson-oct-21-2021/exports.js" type="module"></script>
  <style>
    body {
      margin: 0px;
    }

    .main {
      display: grid;
      height: 100vh;
      width: 100vw;
      grid-template: 
        "menu content" 100%
        / 150px 1fr;
    }

    .menu {
      grid-area: menu;
      display: flex;
      flex-direction: column;
      background: purple;
      height: 100%;
      justify-content: center;
      align-content: stretch;
      align-items: center;
    }

    .link {
      color: white;
      padding: 5px;
      cursor: pointer;
      text-decoration: none;
    }

    .link:hover {
      opacity: .8;
      text-decoration: underline;
    }

    .content {
      padding: 20px;
      overflow-y: scroll;
      background: lightcoral;
    }

  </style>
</head>
<body>
<div class="main">
  <div class="menu">
    <a class="link" href="./">home</a>
    <a class="link" href="./#/page-0">Page 0</a>
  </div>

  <div class="content">

    <hash-check route="">
      <div>home page content</div>
    </hash-check>

    <hash-check route="page-0">
      <div>Page 0 Content</div>
    </hash-check>

  </div>
</div>
</body>
</html>
```