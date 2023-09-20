import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { passwordmatch } from '../passwordmatch';
import { Usernamecheck } from '../usernamecheck';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  formauth = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[a-z0-9A-Z@]+$/)],
      [this.checkusername.validate]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(12)]),
    passwordconfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(12)])
  }, { validators: this.matchpassword.validate })



  constructor(private matchpassword: passwordmatch,
    private checkusername: Usernamecheck) {

  }
  onsubmit(){
    if(this.formauth.invalid)
    return
    else{
  console.log(this.formauth.value)
    }
  }


}
