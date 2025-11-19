import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EplScoresService } from './services/epl-scores.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EplScoresService]
})
export class AppComponent {
  title = 'epl-scores';
  date: string = '';
  scores: any[] = [];

  constructor(private scoresService: EplScoresService) {}

  fetchScores() {
    this.scoresService.getScores(this.date).subscribe(data => {
      this.scores = data;
    });
  }
}
