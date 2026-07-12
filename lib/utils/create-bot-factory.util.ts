import { Telegraf } from 'telegraf';
import { TelegrafModuleOptions } from '../interfaces';
import { Logger } from '@nestjs/common';

export async function createBotFactory(
  options: TelegrafModuleOptions,
): Promise<Telegraf<any>> {
  const bot = new Telegraf<any>(options.token, options.options);

  bot.use(...(options.middlewares ?? []));
  bot.catch((err, ctx) =>
    Logger.error(err, `Telegraf: ${ctx.botInfo.username}`),
  );

  if (options.launchOptions !== false) {
    bot
      .launch(options.launchOptions)
      .catch((err: Error) =>
        console.error(
          "Bot launch error. It won't be available until the app restarts.\n",
          err,
        ),
      );
  }

  return bot;
}
