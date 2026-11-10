const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.BOT_TOKEN;

if (!TOKEN) {
    throw new Error('BOT_TOKEN is missing');
}

const bot = new TelegramBot(TOKEN, {
    polling: true
});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id,
        '👋 Welcome to Success Data Hub!\n\n' +
        'Buy affordable data bundles in Nigeria.\n\n' +
        'Select your network:',
        {
            reply_markup: {
                keyboard: [
                    ['MTN 📱', 'Airtel 📱'],
                    ['Glo 📱', '9mobile 📱'],
                    ['Contact Admin']
                ],
                resize_keyboard: true
            }
        }
    );
});

console.log('Success Data Hub is running!');
