import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Serve running! \n Please Check http://localhost:3333/api for Swagger docs...';
  }
}
