import { Injectable } from '@nestjs/common';
import { MessagesRepository } from '../repository/messages.repository';

@Injectable()
export class MessagesService {
  constructor(private readonly service: MessagesRepository) {}

  async findOne(id: string) {
    return this.service.findOne(id);
  }
  async findAll() {
    return this.service.findAll();
  }
  async create(content: string) {
    return this.service.create(content);
  }
}
