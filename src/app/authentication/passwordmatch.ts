import { FormGroup, Validator } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class passwordmatch implements Validator {

    validate(fg: FormGroup) {
        const { password, passwordconfirmation } = fg.value

        if (password === passwordconfirmation) {
            return null
        }
        else {
            return { passwordnotmatched: true }
        }
    }

}
