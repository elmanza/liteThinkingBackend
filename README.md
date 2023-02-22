## Endpoints

### SignUp

```http
  POST http://localhost:4000/user
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `name`     | `string` | **Required**. |
| `username` | `string` | **Required**. |
| `password` | `string` | **Required**. |

#### Response

```json
{
  "user": {
    "id": 1,
    "name": "Andres",
    "lastname": "Manzano Ramirez",
    "username": "ar.manzano.94@gmail.com",
    "password": "$2b$10$IMJ.tOXdCfDpv52hE1C/hebMP7NQUecptOSCRkEdFOt1YtTVJxoBa",
    "photo": "tmp/userFiles/pexels-magda-ehlers-1337388 (1).jpg",
    "phone": "343-443-4334",
    "token": null,
    "last_activity_at": null,
    "enabled": true,
    "language_app": "es",
    "createdAt": "2023-02-21",
    "updatedAt": "2023-02-21"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc3MDIxNDcwLCJleHAiOjE2ODA2MjE0NzB9.9OMEWZBBFAm_soehc_a29aDHt8VsDwEK9UKDUSW0AOo",
  "type": "Bearer",
  "expires_in": "3600"
}
```

Debes de pegar en el navegador el campo `redirect` para otorgarnos los permisos con tu usuario de generar request a la API de TMDB.
Tambien debes guarda el token para todos los demas request. Es un token de tipo `Barer`

### Login

```http
  POST http://localhost:4000/auth
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `username` | `string` | **Required**. |
| `password` | `string` | **Required**. |

#### Response

```json
{
  "user": {
    "id": 1,
    "name": "Andres",
    "lastname": "Manzano Ramirez",
    "username": "ar.manzano.94@gmail.com",
    "password": "$2b$10$IMJ.tOXdCfDpv52hE1C/hebMP7NQUecptOSCRkEdFOt1YtTVJxoBa",
    "photo": "tmp/userFiles/pexels-magda-ehlers-1337388 (1).jpg",
    "phone": "343-443-4334",
    "token": null,
    "last_activity_at": null,
    "enabled": true,
    "language_app": "es",
    "createdAt": "2023-02-21",
    "updatedAt": "2023-02-21"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc3MDIxNDcwLCJleHAiOjE2ODA2MjE0NzB9.9OMEWZBBFAm_soehc_a29aDHt8VsDwEK9UKDUSW0AOo",
  "type": "Bearer",
  "expires_in": "3600"
}
```

`Recuerde enviar el token en cada uno de los request, de no hacerlo retornará un error de tipo No Autorizado`

#### Crear compañia

```http
  GET http://localhost:4000/company
```

#### Obtener lista de compañias

```http
  GET http://localhost:4000/company
```

#### Actualizar compañia

```http
  GET http://localhost:4000/company
```

#### Eliminar Compañia

```http
  GET http://localhost:4000/company
```

#### Crear un articulo por compañia

```http
  GET http://localhost:4000/company
```

| Parameter  | Type     | Description      |
| :--------- | :------- | :--------------- |
| `language` | `string` | **No Required**. |
| `page`     | `string` | **No Required**. |

#### Obtener lista de articulos por compañia

```http
  GET http://localhost:4000/company
```

| Parameter  | Type     | Description      |
| :--------- | :------- | :--------------- |
| `language` | `string` | **No Required**. |
| `page`     | `string` | **No Required**. |
