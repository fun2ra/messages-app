import { readFileSync, writeFile } from 'fs';

export class MessagesRepository {
  async loadMessages() {
    try {
      const data = await readFileSync('messages.json', 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      throw new Error('Could not load messages: ' + error);
    }
  }

  async findOne(id: string) {
    const messages = await this.loadMessages();
    console.log(messages, messages[id]);
    return messages[id];
  }

  async findAll() {
    return await this.loadMessages();
  }

  async create(content: string) {
    const id = Math.floor(Math.random() * 1000);

    const messages = await this.loadMessages();
    messages[id] = { id, content };
    try {
      await writeFile('messages.json', JSON.stringify(messages), (e) =>
        console.log('New Message added: ', e),
      );
    } catch (error) {
      throw new Error('Could not save message: ' + error);
    }
  }
}
