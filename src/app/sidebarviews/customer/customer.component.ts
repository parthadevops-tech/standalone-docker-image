import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
      this.initForm();
  }

  private initForm(): void {
    this.userForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: [''],
        suite: [''],
        city: [''],
        zipcode: [''],
        geo: this.fb.group({
          lat: [''],
          lng: ['']
        })
      }),
      phone: [''],
      website: [''],
      company: this.fb.group({
        name: [''],
        catchPhrase: [''],
        bs: ['']
      })
    });
  }

  onSubmit(){
    console.log('Submitted value',this.userForm.value)
  }
}
