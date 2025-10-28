import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
  NgForm,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  sending = false;
  emailSent = false;
  emailError = false;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl(''),
    message: new FormControl(''),
  });

  onSubmit() {
    // console.log(this.contactForm.value);

    if (!this.contactForm.valid) return;
    this.sending = true;

    emailjs
      .send(
        'service_z1b6f5d',
        'template_1n5w06o',
        {
          name: this.contactForm.value.name,
          email: this.contactForm.value.email,
          message: this.contactForm.value.message,
          phoneNumber: this.contactForm.value.tel,
        },
        'p36eWslKvgpZkhePt'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('SUCCESS!', result.text);
          this.emailSent = true;
          this.emailError = false;
          this.contactForm.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          this.emailError = true;
        }
      )
      .finally(() => {
        this.sending = false;
      });
  }
}
