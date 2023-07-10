import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SSEService } from "./sse.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SSEService],
})
export class AppModule {}
