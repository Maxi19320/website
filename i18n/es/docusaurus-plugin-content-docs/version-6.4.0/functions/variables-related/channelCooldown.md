---
title: '$channelCooldown'
description: '$channelCooldown will set a cooldown bound to a specific channel after execution of the command.'
id: channelCooldown
---

`$channelCooldown` will set a channel-based cooldown.

## Modo de uso

```php
$channelCooldown[time;errorMessage]
```

* You are able to retrieve the remaining cooldown in the `$channelCooldown` function by using **`%time%`** or any of the following below.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%`, `%ms%`, `%fullTime%`

## Parámetros

| Campo        | Tipo     | Parámetros                                               | Requerido |
| ------------ | -------- | -------------------------------------------------------- |:---------:|
| tiempo       | consulta | Timer of the cooldown                                    | verdadero |
| errorMessage | consulta | Error message when given cooldown timer is still active. |    no     |

## Ejemplo(s)

This will set a cooldown for a command in the channel where the command was executed in and returns the remaining cooldown:

```javascript
bot.command({
    name: 'channelCooldown',
    code: `
  hello
  $channelCooldown[2m;Please wait %time% to execute this command again.]
  `
});
```