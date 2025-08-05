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
      console.log('Form Data:', this.formData);
      alert('Mensagem enviada com sucesso!');
      } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}