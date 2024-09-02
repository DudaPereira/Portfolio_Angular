import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/login-dark-light-mode.png',
      alt: 'Projeto',
      title: 'Tela de login dark and light mode',
      with: '150px',
      height: '150px',
      description:
        '<p>Este projeto é uma interface de tela de login que permite aos usuários alternar entre os modos claro e escuro. Ferramentas utilizadas HTML, CSS e JavaScript</p>',
      links: [
        {
          name: 'Conheça',
          href: 'https://logindarklightmode.netlify.app',
        },
      ],
    },

    {
      src: 'assets/img/projects/card-movies.png',
      alt: 'Projeto',
      title: 'Catálogo de Filmes Interativo',
      with: '200px',
      height: '150px',
      description:
        '<p>Este é um projeto web simples de um catálogo de filmes, onde cada filme é exibido como um card interativo. Os cards se expandem para revelar mais detalhes sobre o filme quando clicados. Ferramentas utilizadas HTML, CSS e JavaScript</p>',
      links: [
        {
          name: 'Conheça',
          href: 'https://cardmovies.netlify.app',
        },
      ],
    },

    {
      src: 'assets/img/projects/e-players.png',
      alt: 'Projeto',
      title: 'E-Players',
      with: '200px',
      height: '100px',
      description:
        '<p>Este foi meu primeiro projeto desenvolvido no curso técnico de Desenvolvimento de Sistemas. Ferramentas utilizadas HTML e CSS</p>',
      links: [
        {
          name: 'Conheça',
          href: 'https://e-players.netlify.app',
        },
      ],
    },
  ])

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
  }
}
