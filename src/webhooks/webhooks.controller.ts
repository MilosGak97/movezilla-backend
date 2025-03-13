import { Body, Controller, Post } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { WebhookPayload } from './dto/webhook-payload.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('webhook')
@Controller('webhook')
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  // This handles POST requests at "/"
  @Post()
  handleWebhook(@Body() payload: WebhookPayload) {
    return this.webhooksService.handleWebhook(payload);
  }
}
