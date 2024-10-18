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

| Campo  | Tipo                                                                                              | Descripción  | Requerido |
| ------ | ------------------------------------------------------------------------------------------------- | ------------ | :-------: |
| number | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | El número.   |    sí     |

## Ejemplo(s)

Esto devolverá el valor absoluto de `-151.5`:

```js
client.command({
    name: "abs",
    code: `$abs[-151.5]`
});
```
```