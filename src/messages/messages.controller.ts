import { Controller, Get, Post, Param, Body } from '@nestjs/common';
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
  getMessageById(@Param('id') id: string) {
    return this.messagesService.getMessageById(id);
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('Creating a new message', body);
    return this.messagesService.createMessage(body.content);
  }
}
