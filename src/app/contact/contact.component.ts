import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      const body = [
        `form-name=contact`,
        ...Object.keys(this.formData).map(
          (key) =>
            encodeURIComponent(key) + '=' + encodeURIComponent(this.formData[key as keyof typeof this.formData])
        ),
      ].join('&');

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
        .then(() => window.location.href = '/success')
        .catch((err) => alert('Submission error: ' + err));
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
