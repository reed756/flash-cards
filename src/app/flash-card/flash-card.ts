import { Component, computed, inject } from '@angular/core';
import { ProgressBar } from './progress-bar/progress-bar';
import { FlashCardQuiz } from './flash-card-quiz';

@Component({
  selector: 'app-flash-card',
  imports: [ProgressBar],
  templateUrl: './flash-card.html',
  styleUrl: './flash-card.scss',
})
export class FlashCard {
  protected flashCardQuiz = inject(FlashCardQuiz);

  currCardText = computed(() => {
    const data = this.flashCardQuiz.quizData();
    const progress = this.flashCardQuiz.quizCardProgress();
    const currCard = data[progress.currentCardIdx];

    return progress.showAnswer ? currCard.answer : currCard.question;
  });

  showHideBtnLabel = computed(() => {
    const progress = this.flashCardQuiz.quizCardProgress();

    return progress.showAnswer ? 'Hide Answer' : 'Show Answer';
  });
}
