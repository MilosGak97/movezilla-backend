import { Module } from '@nestjs/common';
import { WebhooksController } from './webhooks.controller';
import { WebhooksService } from './webhooks.service';
import { InstantQuoteFormHandler } from './handlers/instant-quote-form.handler';
import { ContactFormHandler } from './handlers/contact-form-handler';
import { BasicQuoteFormHandler } from './handlers/basic-quote-form.handler';

@Module({
  controllers: [WebhooksController],
  providers: [
    WebhooksService,
    InstantQuoteFormHandler,
    ContactFormHandler,
    BasicQuoteFormHandler,
  ],
})
export class WebhooksModule {}
