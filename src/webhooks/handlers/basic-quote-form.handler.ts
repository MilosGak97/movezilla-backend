import { Injectable } from '@nestjs/common';
import { WebhookPayload } from '../dto/webhook-payload.interface';

@Injectable()
export class BasicQuoteFormHandler {
  handler(payload: WebhookPayload) {
    console.log('Basic Quote form: ' + JSON.stringify(payload, null, 2));
    return true;
  }
}
