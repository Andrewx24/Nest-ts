import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  // Method to return a hello message
  getHello(): string {
    return 'Hello World! This is a NestJS app!';
  }

  // Method to return a goodbye message
  getGoodbye(): string {
    return 'Goodbye World! This is a NestJS app!';
  }
}
