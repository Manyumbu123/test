import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder){


  }
  

  get alternatePassword(){
return this.regForm.get('alternatePassword') as FormArray

  }

  addAlternatePassword(){


    this.alternatePassword.push(this.fb.control(''))
  }

regForm=this.fb.group({
email:['',[Validators.required,Validators.minLength(3)]],
password:['',[Validators.required]],
alternatePassword: this.fb.array([])

});


onSubmit(){

  console.log(this.regForm.value)
  console.log('PASSWORD'+this.regForm.get('password').value)
}


}
