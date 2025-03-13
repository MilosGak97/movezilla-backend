import { WebhookType } from '../../enums/webhook-type.enum';

export interface WebhookPayload {
  webhookType: WebhookType;

  [key: string]: any;
}
