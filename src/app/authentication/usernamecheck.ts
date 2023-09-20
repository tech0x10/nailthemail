import { FormControl, AsyncValidator } from "@angular/forms";
import { Injectable } from "@angular/core";
import{ HttpClient} from '@angular/common/http'
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Usernamecheck implements AsyncValidator {
    constructor(private http:HttpClient){}

    validate=(control: FormControl) =>{
        const {value} = control

       return this.http.post<any>('https://api.angular-email.com/auth/username',{
uername:value
    })

}}

