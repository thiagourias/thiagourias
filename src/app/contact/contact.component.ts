import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact', // Ou o seletor do seu componente
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData = {
    nome: '',
    email: '',
    mensagem: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Codifique os dados do formulário para envio
      const encoded = Object.keys(this.formData)
        .map(
          (key) =>
            encodeURIComponent(key) + '=' + encodeURIComponent(this.formData[key as keyof typeof this.formData])
        )
        .join('&');

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded,
      })
        .then(() => {
          // Redireciona para a página de sucesso após o envio
          window.location.href = '/sucesso';
        })
        .catch((error) => alert(error));
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}