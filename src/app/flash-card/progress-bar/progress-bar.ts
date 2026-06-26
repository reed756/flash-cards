import { Component, computed, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FlashCardQuiz } from '../flash-card-quiz';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss',
})
export class ProgressBar {
  protected flashCardQuiz = inject(FlashCardQuiz);

  progressBarContainer = viewChild<ElementRef>('progressBarContainer');

  width = signal(0);

  constructor() {
    effect(() => {
      const newWidth = this.progressBarContainer();

      this.width.set(newWidth?.nativeElement.offsetWidth);
    });
  }

  progressBarTxt = computed(() => {
    const progress = this.flashCardQuiz.quizCardProgress();
    return `${progress.currentCardIdx + 1} of ${progress.totalCards}`
  });

  progressBarContainerWidth = computed(() => {
    const elementWidth = this.progressBarContainer()?.nativeElement.offsetWidth;
    return elementWidth;
  });

  progressBarWidth = computed(() => {
    const percent = this.flashCardQuiz.quizCardProgressPercent();

    return ((this.progressBarContainerWidth() / 100) * percent) + 'px';
  });
}
