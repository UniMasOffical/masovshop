const TelegramBot = require('node-telegram-bot-api');

const token = '7044573213:AAEfcernFLOO-Xp4YLKIIRTtCL5Jz7TJxzc';

const bot = new TelegramBot(token, {polling: true});

const WebAppUrl = 'https://unimasoffical.github.io/masovshop.tg/'


bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start') {
        await bot.sendMessage(chatId, 'Ниже появиься кнопка, заполни форму ^-^', {
            reply_markup: {
                keyboard: [
                    [{text: 'Заполнить форму'}]
                ]
            }
        })

        await bot.sendMessage(chatId, 'Заходи в наш магазинчик по ссылочке', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Сделать зазказ', web_app: {url: WebAppUrl}}]
                ]
            }
        })
    }
});
