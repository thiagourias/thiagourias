import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
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
      const encoded = [
        `form-name=contact`, // Adiciona o nome do formulário
        ...Object.keys(this.formData).map(
          (key) =>
            encodeURIComponent(key) + '=' + encodeURIComponent(this.formData[key as keyof typeof this.formData])
        ),
      ].join('&');

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(this.formData).toString(),
      })
        .then(() => {
          window.location.href = '/success';
        })
        .catch((error) => alert(error));
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}