import { Injectable } from '@nestjs/common';
import { WebhookPayload } from '../dto/webhook-payload.interface';

@Injectable()
export class InstantQuoteFormHandler {
  handler(payload: WebhookPayload) {
    console.log('Handling Instant Quote Form:', payload);
    return true;
  }
}
