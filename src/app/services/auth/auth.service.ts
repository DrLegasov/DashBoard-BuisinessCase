import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject < string > ;

  constructor() {
    this.token = new BehaviorSubject < string > ('');
  }


  signin(email: string, password: string): Promise < void | string > {
    return new Promise < void | string > ((resolve, reject) => {
      setTimeout(() => {
        if(email ==='LaFaceCachéeDeLaLune' && password === "Issou2021"){

        this.token.next('azertyui');
        resolve();
      } else {
        reject('Les indentifiants sont incorrects.')
      }
    }, 500);
    })
  }
  signout(): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        this.token.next('');
        resolve();
      }
    );
  }
}
