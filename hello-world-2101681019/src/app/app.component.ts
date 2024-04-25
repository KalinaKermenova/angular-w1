import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-world-2101681019';

  selectedIndex: number = -1;

  items: { header: string; type?: string; content: string }[] = [
    {
      header: 'За мен',
      content:
        'Казвам се Калина Керменова и съм студент, 3-ти курс, специалност Софтуерни технологии и дизайн в Пловдивски университет "Паисий Хилендарски", както и фрийланс Графичен дизайнер за момента.',
    },
    {
      header: 'Хобита и интереси',
      content: 'Много обичам да се разхождам сред природата и да творя.',
    },
    {
      header: 'Любим YouTube канал',
      type: 'link',
      content: 'https://www.youtube.com/@GloryArtDraws',
    },
    {
      header: 'Моят канал',
      content: 'В моя канал показвам туториали за работа с различни програми.',
    },
    {
      header: 'Резюме',
      content: 'Аз съм креативен човек, който обича да твори и да бъде сред природата.',
    },
  ];

  toggleAppearance(index: number): void {
    if (this.selectedIndex === index) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }
}