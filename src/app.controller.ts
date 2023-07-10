import { Body, Controller, Get, Param, Post, Sse } from "@nestjs/common";
import { AppService } from "./app.service";
import { Observable, Subject } from "rxjs";
import { SSEService } from "./sse.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sseService: SSEService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  ssePost(@Body() body: any) {
    this.sseService.pushEvent(body);
  }

  @Sse("sse/:id")
  sse(@Param("id") id): Observable<MessageEvent> {
    console.log(id);
    return this.sseService.sse();
  }
}
