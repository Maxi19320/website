---
title: '$emojiExists'
description: '$emojiExists will check if the given emoji exists.'
id: emojiExists
---

`$emojiExists` will check if the given emoji exists.

## Modo de uso

```php
$emojiExists[emojiResolver]
```

## Parámetros

| Campo         | Tipo   | Parámetros                            | Requerido |
| ------------- | ------ | ------------------------------------- |:---------:|
| emojiResolver | string | Emoji you want to check if it exists. | verdadera |

## Ejemplo(s)

This will return `true` as the ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) emoji exists:

```javascript
bot.command({
    name: 'emojiExists',
    code: `
  $emojiExists[<:LerefMoney:1003365344724910191>]
  `
});
```