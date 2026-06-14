import { Component, computed, inject } from '@angular/core';
import { FlashCardQuiz } from '../flash-card-quiz';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss',
})
export class ProgressBar {
  protected flashCardQuiz = inject(FlashCardQuiz);

  progressBarTxt = computed(() => {
    const progress = this.flashCardQuiz.quizCardProgress();
    return `${progress.currentCardIdx + 1} of ${progress.totalCards}`
  });
}
