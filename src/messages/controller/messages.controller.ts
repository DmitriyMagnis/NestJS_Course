import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from '../dto/create-message.dto';
import { MessagesService } from '../service/messages.service';

@Injectable()
@Controller('messages')
export class MessagesController {
  constructor(private readonly service: MessagesService) {}

  @Get()
  listMessages() {
    return this.service.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.service.create(body.content);
  }

  @Get('/:id')
  async getMessages(@Param('id') id: string) {
    const message = await this.service.findOne(id);

    if (!message) throw new NotFoundException('message Not Found');

    return message;
  }
}
