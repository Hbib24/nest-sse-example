import { Injectable } from "@nestjs/common";
import { Observable, Subject } from "rxjs";

interface eventData {
  data: {};
}

@Injectable()
export class SSEService {
  private eventSubject = new Subject<MessageEvent>();

  pushEvent(data: eventData) {
    this.eventSubject.next(data as MessageEvent);
  }

  sse(): Observable<MessageEvent> {
    return this.eventSubject.asObservable();
  }
}
