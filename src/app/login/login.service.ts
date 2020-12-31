import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  UserLogin(data: any) {
    if (data.email == "1" && data.password == "1") {
      return true;
    } else { return false };
  }
}
