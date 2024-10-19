---
title: $addButtonTo
description: $addButtonTo añadirá un botón a un mensaje específico.
id: addButtonTo
---

`$addButtonTo` añadirá un botón a un mensaje específico.

## Uso

```aoi
$addButtonTo[channelId;messageId;index;label;style;customID;disabled?;emoji?]
```

## Parámetros

| Campo     | Tipo                                                                                                | Descripción                                                                                                              | Requerido |
| --------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | :-------: |
| channelId | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | El ID del canal.                                                                                                         |   sí      |
| messageId | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | El ID del mensaje.                                                                                                       |   sí      |
| index     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | En qué fila (de acción) aparece el botón.                                                                                |   sí      |
| label     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | El texto que se mostrará en el botón como etiqueta.                                                                      |   sí      |
| style     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | El **[estilo](https://discord.com/developers/docs/interactions/message-components#button-object-button-styles)** del botón. |   sí      |
| customID  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | El ID personalizado usado para identificar el botón.                                                                     |   sí      |
| disabled? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | ¿Hacer que el botón sea inusable/desactivado? <br /> 1. **true** <br /> 2. **false** (por defecto)                        |   no      |
| emoji?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | El emoji mostrado en el botón.                                                                                           |   no      |

:::danger[Edición]

Esta función solo funciona si el Cliente es el autor original del mensaje.

:::

<details open>
    <summary><h3>Tipos de Botones</h3></summary>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Valor</th>
          <th>Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Primario</td>
          <td>1</td>
          <td>blurple</td>
          <td><code>$addButton[1;¡Botón de Ejemplo!;primary;customID;false]</code></td>
        </tr>
        <tr>
          <td>Secundario</td>
          <td>2</td>
          <td>gris</td>
          <td><code>$addButton[1;¡Botón de Ejemplo!;secondary;customID;false]</code></td>
        </tr>
        <tr>
          <td>Éxito</td>
          <td>3</td>
          <td>verde</td>
          <td><code>$addButton[1;¡Botón de Ejemplo!;success;customID;false]</code></td>
        </tr>
        <tr>
          <td>Peligro</td>
          <td>4</td>
          <td>rojo</td>
          <td><code>$addButton[1;¡Botón de Ejemplo!;danger;customID;false]</code></td>
        </tr>
        <tr>
          <td>Enlace</td>
          <td>5</td>
          <td>gris, navega a una URL</td>
          <td><code>$addButton[1;¡Botón de Ejemplo!;link;https://discord.gg;false]</code></td>
        </tr>
        <tr>
          <td>Emoji Personalizado</td>
          <td>cualquiera</td>
          <td>cualquiera</td>
          <td><code>$addButton[1;¡Botón de Ejemplo!;link;customID;false;emojiName/emojiId/emojiString]</code></td>
        </tr>
        <tr>
          <td>Emoji Unicode</td>
          <td>cualquiera</td>
          <td>cualquiera</td>
          <td><code>$addButton[1;¡Botón de Ejemplo!;link;customID;false;😀]</code></td>
        </tr>
      </tbody>
    </table>
</details>

## Ejemplo(s)

Esto añade un botón primario y de enlace al mensaje del bot:

```javascript
client.command({
    name: "addButtonTo",
    code: `
    ¡Hola!
    $addButtonTo[$channelId;$messageId;1;¡Botón de Ejemplo!;primary;exampleButton;false;💔]
    $addButtonTo[$channelId;$messageId;1;¡Botón de Ejemplo!;link;https://discord.gg;false]
  `
});
```

```javascript
client.interactionCommand({
    name: "exampleButton",
    prototype: "button",
    code: `
    $interactionReply[¡Interacción de Botón Increíble!]
  `
});
```
