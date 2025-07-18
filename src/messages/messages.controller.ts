import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  getMessages() {
    return this.messagesService.getMessages();
  }

  @Get('/:id')
  async getMessageById(@Param('id') id: string) {
    const message = await this.messagesService.getMessageById(id);

    if (!message) {
      throw new NotFoundException();
    }
    return message;
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('Creating a new message', body);
    return this.messagesService.createMessage(body.content);
  }
}
