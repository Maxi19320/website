---
title: $title
description: $title agregar un título a un embed.
id: title
---

`$title` agregar un título a un embed.

## Uso

```aoi
$title[index?;title;URL?]
```

## Parameters

| Field  | Type                                                                                              | Description                      | Required |
| ------ | ------------------------------------------------------------------------------------------------- | -------------------------------- | :------: |
| index? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The index of the embed.          |  false   |
| title  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The content of the embed title.  |   true   |
| URL?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | URL which will be the hyperlink. |  false   |

## Example(s)

Esto creará un embed con un título.:

```javascript
client.command({
    name: "title",
    code: `
   $title[Hola!;https://aoi.js.org]
   $description[El título contiene un hyperlink..]`
});
```
