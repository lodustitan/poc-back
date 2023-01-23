
# Yu-gi-oh Cards Creator

Esta POC é um micro-projeto onde é possivel 
adicionar, remover e listar cards, de yu-gi-oh 



# Documentação da API

### Retornar uma ou todas as cards
Requisição:
```http
  GET /cards/:id
  GET /cards 
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id`        | `number`   | **Opcional.** busca pela card especifica, deve ser um número |

Resultado:
```json
  {
  "status": true,
  "result": [
    {
      "id": 2,
      "nome": "Meteor B. Dragon",
      "image_url": "",
      "atk": 3500,
      "def": 2000,
      "description": "esta carta poderosa rivaliza com o dragão branco de olhos azuis"
    },
    {
      "id": 3,
      "nome": "Red Eyes Black Dragon",
      "image_url": "",
      "atk": 2400,
      "def": 2000,
      "description": "Um dragão furioso com um ataque mortal"
    }
  ]
}
```

### Criar um Card
Requisição:
```http
  POST /cards/
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string`   | **Obrigatório**. nome da card |
| `image_url` | `string`   | **Obrigatório**. url da imabem da card |
| `atk`       | `number`   | **Obrigatório**. valor do ataque da card |
| `def`       | `number`   | **Obrigatório**. valor da defesa da card |
|`description`| `string`   | **Obrigatório**. descrição sobre a criatura da card |

Exemplo:
```json
{
  "nome": "Red Eyes Black Dragon",
  "image_url": "https://i.pinimg.com/originals/b9/55/dc/b955dca9ad2f3984975069e896184e12.jpg",
  "atk": 2400,
  "def": 2000,
  "description": "Um dragão furioso com um ataque mortal"
}
```
Resultado:

```json
{
  "status": true,
  "result": [
    {
      "id": 4
    }
  ]
}
```

### Deletar uma card
Requisição:
```http
  DELETE /cards/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id`        | `number`   | **Opcional.** deleta card especifica, deve ser um número |

Resultado:
```json
{
  "status": true,
  "result": [
    {
      "id": 1
    }
  ]
}
```
## FAQ

#### Onde está o Front?

Não sei também haha

#### O projeto sera avançado?

Provavelmente não.

