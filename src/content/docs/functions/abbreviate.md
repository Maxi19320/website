---
title: $abbreviate
description: $abbreviate te permitirá abreviar números grandes.
id: abbreviate
---

`$abbreviate` te permitirá abreviar números grandes.

## Uso

```aoi
$abbreviate[num;dec?]
```

## Parámetros

| Fila | Tipo                                                                                              | Descripción                     | Requerido |
| ---- | ------------------------------------------------------------------------------------------------- | ------------------------------- | :-------: |
| num  | [number] | Número a abreviar.              |   sí      |
| dec? | [number] | Decimal entre la abreviatura.   |   no      |

## Ejemplo(s)

Esto devuelve: `20k`

```javascript
client.command({
    name: "abbreviate",
    code: `
  $abbreviate[20000]
  `
});
```

Esto devuelve: `20.0k`

```javascript
client.command({
    name: "abbreviate",
    code: `
  $abbreviate[20000;1]
  `
});
```
```