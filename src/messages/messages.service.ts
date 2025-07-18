import { MessagesRepository } from './messages.repository';

export class MessagesService {
  constructor(private messagesRepository: MessagesRepository) {
    this.messagesRepository = new MessagesRepository();
  }

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
