import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private restDatasource: RestDataSource) {
  }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.restDatasource.authenticate(username, password);
  }

  get authenticated(): boolean {
    return this.restDatasource.auth_token != null;
  }

  clear() {
    this.restDatasource.auth_token = null;
  }
}
