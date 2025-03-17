import { Module } from '@nestjs/common';
import { MessagesController } from './controller/messages.controller';

@Module({
  controllers: [MessagesController],
})
export class MessagesModule {}
