import { FormGroup } from "@angular/forms";

export function checkRePass(){
    return function(abc : FormGroup){
        let a = abc.controls.password;
        let b = abc.controls.re_password;

        if(b.errors && ! b.errors.repasserr)
        {
            return;
        }

        if(a.value != b.value)
        {
            b.setErrors({ repasserr : true });
        }
        else{
            b.setErrors(null);
        }
    }
}

export function checkNum(){
    return function(myForm : FormGroup){
        let a = myForm.controls.contact;

        if(a.errors && !a.errors.numerr)
        {
            return;
        }

        if(isNaN(a.value))
        {
            a.setErrors({ numerr : true });
        }
        else{
            a.setErrors(null);
        }
    }
}

export function checkLength(){
    return function(myForm : FormGroup){
        let a = myForm.controls.contact;

        if(a.errors && !a.errors.lengtherr)
        {
            return;
        }

        if(a.value.length != 10)
        {
            a.setErrors({ lengtherr : true });
        }
        else{
            a.setErrors(null);
        }
    }
}