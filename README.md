# Z-BOT

A simple and multifunctional bot for WhatsApp!

## Requisitos

- Node.js (versão 18.x.x)
- npm (ou um gerenciador de pacotes do Node.js)

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/Ahosall/Z-BOT.git
cd Z-BOT
npm install
```

3. Configuração
   A configuração é simples, crie um arquivo `.env` na raíz do projeto, e adicione as seguintes informações.

```cs
# BOT PREFIX
PREFIX=
# PHONE
PHONE=
# STICKER
STK_PACK_ID=
STK_PACK_NAME=
STK_PACK_PUBLISHER=
```

- O prefixo do bot pode ser definido por você, mas caso não defina, o padrão é `z!`.
- Caso você coloque o número de telefone, será enviado para você o código de acesso ao WhatsApp por SMS.
- Sticker:
  - Pack ID: Url do pacote
  - Pack Name: Nome do pacote
  - Pack Publisher: Publicador do pacote
  - > ⚠ Caso não preencha, será estabelecido um valor padrão. ⚠
- Uso:
  ```
  npm start
  ```
  > **Divirta-se!**

## Comandos

Utilize o comando `z!ajuda` para consultar todos os comandos do bot.

## Contribuições

Sinta-se à vontade para contribuir com novos recursos, correções de bugs ou melhorias.

## Licença

Este projeto está licenciado sob a [Licença MIT](./LICENSE).

<div align='center'>
  <hr/>
  Made with 🤍 by <a href="https://github.com/Ahosall"><b>Ahosall</b></a>!
</div>
