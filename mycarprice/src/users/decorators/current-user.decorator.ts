import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUserDecorator = createParamDecorator(
  (data: never, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    console.log('request.session.userId -> ', request.session.userId);
    return request.currentUser;
  },
);
