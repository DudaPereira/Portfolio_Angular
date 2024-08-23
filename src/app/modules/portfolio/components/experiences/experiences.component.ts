import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Estágio em Front-end',
        p: 'Grupo Globo | Fev 2024 - Atual',
      },
      text: '<p>Trabalho com desenvolvimento Front-end, atuando na melhoria da plataforma para o pequeno grande anúnciante no Globo Ads <br> HTML, CSS, JS, Angular</p>',
    },
  ]);
}
