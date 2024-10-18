---
title: $abbreviate
description: $abbreviate will allow you to abbreviate large numbers.
id: abbreviate
---

`$abbreviate` Te permitirá abreviar números grandes.

## Uso

```aoi
$abbreviate[num;dec?]
```

## Parámetros

| Fila | Tipo                                                                                              | Descripción                     | Requerido |
| ---- | ------------------------------------------------------------------------------------------------- | ------------------------------- | :-------: |
| num  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Número a abreviar.              |   sí      |
| dec? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal entre la abreviatura.   |   no      |

## Example(s)

This returns: `20k`

```javascript
client.command({
    name: "abbreviate",
    code: `
  $abbreviate[20000]
  `
});
```

This returns: `20.0k`

```javascript
client.command({
    name: "abbreviate",
    code: `
  $abbreviate[20000;1]
  `
});
```
