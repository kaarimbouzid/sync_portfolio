import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/shared/services/projects.service';

@Component({
  selector: 'contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  id!: string;

  form: FormGroup;
  name: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  subject: FormControl = new FormControl('', [Validators.required]);
  message: FormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(256),
  ]);
  honeypot: FormControl = new FormControl(''); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage!: string; // the response message to show to the user

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      subject: this.subject,
      honeypot: this.honeypot,
    });
  }

  onSubmit() {
    if (this.form.status == 'VALID' && this.honeypot.value == '') {
      // console.log('this.form', this.form.value);
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append('name', this.form.get('name')?.value || '');
      formData.append('email', this.form.get('email')?.value || '');
      formData.append('message', this.form.get('message')?.value || '');
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
    }
  }
}
