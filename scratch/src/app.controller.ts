import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/home")
  getRootRoute() {
    return "hi there";
  }

  @Get("/about")
  getBySomething() {
    return "hi there2";
  }
}
