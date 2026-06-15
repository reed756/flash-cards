import { computed, Injectable, signal } from '@angular/core';
import { angularFlashcards } from './flash-card-data';

@Injectable({
  providedIn: 'root',
})
export class FlashCardQuiz {

  readonly quizData = signal(angularFlashcards);

  readonly quizCardProgress = signal({
    currentCardIdx: 0,
    totalCards: 20,
    showAnswer: false
  });

  readonly showHideBtnClicked = signal(false);

  quizCardProgressPercent = computed(() => {
    return (100 / this.quizCardProgress().totalCards) * (this.quizCardProgress().currentCardIdx + 1);
  });

  nextQuestion() {
    if (this.quizCardProgress().currentCardIdx === (this.quizCardProgress().totalCards - 1)) return;

    this.quizCardProgress.update((curr) => {
      return { ...curr, showAnswer: false, currentCardIdx: curr.currentCardIdx + 1 };
    })
  }

  prevQuestion() {
    if (this.quizCardProgress().currentCardIdx === 0) return;

    this.quizCardProgress.update((curr) => {
      return { ...curr, showAnswer: false, currentCardIdx: curr.currentCardIdx - 1 };
    })
  }

  toggleCard() {
    this.showHideBtnClicked.set(true);
    setTimeout(() => {
      this.quizCardProgress.update((curr) => {
        return { ...curr, showAnswer: !curr.showAnswer };
      });
      this.showHideBtnClicked.set(false);
    }, 333);
    setTimeout(() => {
      this.showHideBtnClicked.set(false);
    }, 1000);
  }
}
