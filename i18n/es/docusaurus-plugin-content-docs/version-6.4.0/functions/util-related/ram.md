---
title: '$ram'
description: '$ram will return the RAM usage of your bot.'
id: ram
---

`$ram` will return the RAM usage of your bot.

## Modo de uso

```php
$ram
```

## Ejemplo(s)

This will return the RAM usage and the available amount of RAM:

```javascript
bot.command({
    name: 'ram',
    code: `
  I'm currently using \`$ram%\` out of \`$maxRam%\`!
  `
});
```