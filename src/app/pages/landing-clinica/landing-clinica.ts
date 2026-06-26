import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-clinica',
  standalone: true,
  imports: [],
  templateUrl: './landing-clinica.html',
  styleUrl: './landing-clinica.css'
})
export class LandingClinica {
  menuAberto = false;
  whatsappNumber = '5511986579246';

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu(): void {
    this.menuAberto = false;
  }

  abrirWhatsApp(): void {
    const mensagem = encodeURIComponent(
      'Olá! Vim pelo Instagram e gostaria de agendar uma avaliação odontológica.'
    );

    window.open(`https://wa.me/${this.whatsappNumber}?text=${mensagem}`, '_blank');
  }
}
