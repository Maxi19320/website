---
title: $abs
description: $abs devuelve el valor absoluto del número.
id: abs
---

`$abs` devuelve el valor absoluto del número.

## Uso

```aoi
$abs[number]
```

## Parámetros

| Campo  | Tipo   | Descripción  | Requerido |
| ------ | -------| ------------ | :-------: |
| number | number | El número.   |    sí     |

## Ejemplo(s)

Esto devolverá el valor absoluto de `-151.5`:

```js
client.command({
    name: "abs",
    code: `$abs[-151.5]`
});
```
