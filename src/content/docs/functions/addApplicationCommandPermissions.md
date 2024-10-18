---
title: $addApplicationCommandPermissions
description: $addApplicationCommandPermissions cambiará los permisos de un comando de barra.
id: addApplicationCommandPermissions
---

## Uso

```aoi
$addApplicationCommandPermissions[guildID/global?;id;...perms]
```

## Parámetros

| Campo          | Tipo                                                                                                                                                                                                 | Descripción                                                                 | Requerido |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | :-------: |
| guildID/global | string, number | Tipo de comando de aplicación. <br/> 1. **global** <br/> 2. **guildID específico** |    sí     |
| id             | number                                                                                                    | ID del comando de aplicación.                                               |    sí     |
| ...perms       | string                                                                                                    | Permisos.                                                                   |    sí     |

## Ejemplo(s)

Esto deshabilitará el comando de barra para todos en el gremio (asegúrate de reemplazar "ID" con el ID real del comando de barra):

```javascript
client.command({
    name: "addApplicationCommandPermissions",
    code: `
    $addApplicationCommandPermissions[$guildID;ID;[
  {
    id: '$guildID',
    type: 'ROLE',
    permission: false
  }
]]`
});
```
```