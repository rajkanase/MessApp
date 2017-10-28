import { Injectable } from '@angular/core';
import {User} from './user';
import {Http} from '@angular/http';

// declare var firebase;
@Injectable()
export class SignupService {

  constructor(
    private http: Http
  ) { }

  saveUser(user:User){
    return this.http.post('https://firstdemo-8092a.firebaseio.com/newUser.json',{user});
  }

  // createNewUser(user:User){
  //   firebase.auth().createUserWithEmailAndPassword(user.email, user.pass).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // ...
  //   });
  // }

}
