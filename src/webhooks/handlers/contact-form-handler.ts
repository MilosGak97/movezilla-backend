import { Injectable } from '@nestjs/common';
import { WebhookPayload } from '../dto/webhook-payload.interface';

@Injectable()
export class ContactFormHandler {
  async handler(payload: WebhookPayload): Promise<any> {
    const { fullName, phoneNumber, email, message } = payload;
  }
}
