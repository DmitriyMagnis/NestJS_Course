import { Module } from '@nestjs/common';
import { MessagesController } from './controller/messages.controller';
import { MessagesRepository } from './repository/messages.repository';
import { MessagesService } from './service/messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
