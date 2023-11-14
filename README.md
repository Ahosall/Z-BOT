# Z-BOT

A simple and multifunctional bot for WhatsApp!

## Requirements

- Node.js (version 18.x.x)
- npm (or a Node.js package manager)

## Installation

1. Clone this repository:

```bash
git clone https://github.com/Ahosall/Z-BOT.git
cd Z-BOT
npm install
```

3. Configuration
   The configuration is simple, create a `.env` file at the root of the project, and add the following information.

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

- The bot prefix can be defined by you, but if not defined, the default is `z!`.
- If you enter your phone number, the WhatsApp access code will be sent to you via SMS.
- Stickers:
  - Pack ID: Package URL
  - Pack Name: Package name
  - Pack Publisher: Package publisher
  - > ⚠ If you do not fill in, a default value will be established. ⚠
- Usage:
  ```
  npm start
  ```
  > **Have fun!**

## Commands

Use the `z!ajuda` command to see all the bot's commands.

## Contributions

Feel free to contribute new features, bug fixes or improvements.

## License

This project is licensed under the [MIT License](./LICENSE).

<div align='center'>
   <hr/>
   Made with 🤍 by <a href="https://github.com/Ahosall"><b>Ahosall</b></a>!
</div>
