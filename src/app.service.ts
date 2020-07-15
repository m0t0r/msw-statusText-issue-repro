import {
  Injectable,
  HttpException,
  HttpStatus,
  HttpService,
} from '@nestjs/common';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpService) {}

  getHello() {
    return this.http.get('http://localhost:1234/hello').pipe(
      map(response => {
        return {
          ...response.data,
          statusText: response.statusText,
        };
      }),
    );
  }

  getError() {
    return this.http.get('http://localhost:1234/error').pipe(
      map(response => {
        if (response.status === 200) {
          return response.data;
        }
      }),
      catchError(({ response }) => {
        throw new HttpException(
          `${response.statusText}: ${response.data.message}`,
          HttpStatus.BAD_REQUEST,
        );
      }),
    );
  }
}
