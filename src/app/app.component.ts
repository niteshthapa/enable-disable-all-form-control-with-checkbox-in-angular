import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFormSubmit: boolean = false;
  isDisabled: boolean = true;
  iScheckBoxDisabled: boolean = false;
  sendVaultForm = new FormGroup({
    name: new FormControl({ value: '', disabled: this.isDisabled },Validators.required),
    country: new FormControl({ value: 'select', disabled: this.isDisabled },this.DropdownSelectValidation),
    date: new FormControl({ value: '', disabled: this.isDisabled },Validators.required),
    time: new FormControl({ value: '', disabled: this.isDisabled },Validators.required),
  })   
  DropdownSelectValidation(control: AbstractControl) {
    if (control.value === "select") {
      return { 'required': true }
    }
    else {
      return null;
    }
  }
  toggleShow(e: any) {
    this.isDisabled = !this.isDisabled;
    this.iScheckBoxDisabled = e.target.checked;
    if (this.iScheckBoxDisabled) {
      this.sendVaultForm.get('name')!.enable();
      this.sendVaultForm.get('country')!.enable();
      this.sendVaultForm.get('date')!.enable();
      this.sendVaultForm.get('time')!.enable();
    } else {
      this.sendVaultForm.get('name')!.disable();
      this.sendVaultForm.get('date')!.disable();
      this.sendVaultForm.get('country')!.disable();
      this.sendVaultForm.get('time')!.disable();
    }
  }
  onSubmit() {
    this.isFormSubmit = true;
    if (!this.sendVaultForm.valid) {
      console.log("error");
    }
    else {
      console.log(this.sendVaultForm.value)
    }
  }
}
