---
title: $addButton
description: $addButton añadirá un botón al mensaje del bot.
id: addButton
---

`$addButton` añadirá un botón al mensaje del bot.

## Uso

```aoi
$addButton[index;label;style;customID;disabled?;emoji?]
```

## Parámetros

| Campo     | Tipo                                                                                                | Descripción                                                                                                              | Requerido |
| --------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | :-------: |
| index     | number   | En qué fila (de acción) aparece el botón.                                                                                 |   sí      |
| label     | string   | El texto que se mostrará en el botón como etiqueta.                                                                      |   sí      |
| style     | string   | El **estilo** del botón. |   sí      |
| customID  | string   | El ID personalizado usado para identificar el botón.                                                                     |   sí      |
| disabled? | boolean | ¿Hacer que el botón sea inusable/desactivado? <br /> 1. **true** <br /> 2. **false** (por defecto)                        |  no       |
| emoji?    | string   | El emoji mostrado en el botón.                                                                                           |  no       |

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
    name: "addButton",
    code: `
    ¡Hola!
    $addButton[1;¡Botón de Ejemplo!;primary;exampleButton;false;💔]
    $addButton[1;¡Botón de Ejemplo!;link;https://discord.gg;false]
  `
});
```

```javascript
module.exports = [
    {
        name: "exampleButton",
        type: "interaction",
        prototype: "button",
        code: `
    $interactionReply[¡Interacción de Botón Increíble!]
  `
    }
];
```
