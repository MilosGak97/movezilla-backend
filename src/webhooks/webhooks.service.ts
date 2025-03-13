import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InstantQuoteFormHandler } from './handlers/instant-quote-form.handler';
import { WebhookPayload } from './dto/webhook-payload.interface';
import { WebhookType } from '../enums/webhook-type.enum';
import { ContactFormHandler } from './handlers/contact-form-handler';
import { BasicQuoteFormHandler } from './handlers/basic-quote-form.handler';

@Injectable()
export class WebhooksService {
  constructor(
    private readonly instantQuoteFormHandler: InstantQuoteFormHandler,
    private readonly contactFormHandler: ContactFormHandler,
    private readonly basicQuoteFormHandler: BasicQuoteFormHandler,
  ) {}

  handleWebhook(payload: WebhookPayload) {
    const webhookType: WebhookType = payload.webhookType;

    if (!Object.values(WebhookType).includes(webhookType)) {
      throw new HttpException('Webhook type not allowed', HttpStatus.NOT_FOUND);
    }

    switch (webhookType) {
      case WebhookType.CONTACT_FORM:
        return this.contactFormHandler.handler(payload);
      case WebhookType.INSTANT_QUOTE_FORM:
        return this.instantQuoteFormHandler.handler(payload);
      case WebhookType.BASIC_QUOTE_FORM:
        return this.basicQuoteFormHandler.handler(payload);
      default:
        console.log(payload);
        throw new HttpException(
          'Webhook type not allowed',
          HttpStatus.BAD_REQUEST,
        );
    }
  }
}
