`$title` agregar un título a un embed.

## Uso

```aoi
$title[index?;title;URL?]
```

## Ejemplo

Esto creará un embed con un título.:

```javascript
client.command({
    name: "title",
    code: `
   $title[Hola!;https://aoi.js.org]
   $description[El título contiene un hyperlink..]`
});
```
