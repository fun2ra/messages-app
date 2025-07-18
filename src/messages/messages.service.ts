import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private readonly messagesRepository: MessagesRepository) {}

  async getMessages() {
    return this.messagesRepository.findAll();
  }

  async getMessageById(id: string) {
    return this.messagesRepository.findOne(id);
  }

  async createMessage(content: string) {
    return this.messagesRepository.create(content);
  }
}
