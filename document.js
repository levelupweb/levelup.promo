const config = require("./config");

const dist = config.client.static;

const document = () =>
	`<!DOCTYPE html>
  <html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="manifest" href="${dist}/manifest.json" />
    <link rel="shortcut icon" href="${dist}/favicon.ico" />
    <link rel="apple-touch-icon" sizes="57x57" href="${dist}/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="${dist}/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="${dist}/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="${dist}/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="${dist}/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="${dist}/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="${dist}/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="${dist}/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="${dist}/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="${dist}/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="${dist}/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="${dist}/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="${dist}/favicon/favicon-16x16.png">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&amp;subset=cyrillic" rel="stylesheet" />
    <link rel="stylesheet" href="${dist}/css/core.css" />
    <link rel="stylesheet" href="${dist}/css/headers.css" />
    <link rel="stylesheet" href="${dist}/css/layout.css" />
    <link rel="stylesheet" href="${dist}/css/buttons.css" />
    <link rel="stylesheet" href="${dist}/css/animations.css" />
    <link rel="stylesheet" href="${dist}/css/modifications.css" />
    <link rel="stylesheet" href="${dist}/css/typo.css" />
    <link rel="stylesheet" href="${dist}/css/lists.css" />
    <link rel="stylesheet" href="${dist}/css/prices.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Levelup SMM - Продвижение в социальных сетях</title>
  </head>
  <body>
    <noscript>
      Для работы данной страницы вам необходимо включить Javascript
    </noscript>
    <div id="root"></div>
    <script>window.global = ${JSON.stringify(config.client)};</script>
    <script src="${dist}/bundle.js"></script>
  </body>
</html>
`;
module.exports = document;
