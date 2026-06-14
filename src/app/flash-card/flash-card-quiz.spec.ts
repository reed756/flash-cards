import { TestBed } from '@angular/core/testing';

import { FlashCardQuiz } from './flash-card-quiz';

describe('FlashCardQuiz', () => {
  let service: FlashCardQuiz;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashCardQuiz);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('nextQuestion', () => {
    it('Should update currentCardIdx when called', () => {
      service.nextQuestion();
      expect(service.quizCardProgress().currentCardIdx).toBe(1);
    })
    it('Shouldn\'t update quizCardProgress if called when currentCardIdx is equal to totalCards minus one', () => {
      service.quizCardProgress.set({
        currentCardIdx: 19,
        totalCards: 20,
        showAnswer: false
      })
      service.nextQuestion();
      expect(service.quizCardProgress().currentCardIdx).toBe(19);
    })
  });

  describe('prevQuestion', () => {
    it('Should update quizCardProgress when called', () => {
      service.quizCardProgress.set({
        currentCardIdx: 19,
        totalCards: 20,
        showAnswer: false
      });
      service.prevQuestion();
      expect(service.quizCardProgress().currentCardIdx).toBe(18);
    })
    it('Shouldn\'t update quizCardProgress if called when currentCardIdx is equal to zero', () => {
      service.prevQuestion();
      expect(service.quizCardProgress().currentCardIdx).toBe(0);
    })
  });

  describe('toggleCard', () => {
    it('Toggles showAnswer to true when it\'s false', () => {
      service.toggleCard();
      expect(service.quizCardProgress().showAnswer).toBe(true);
    });
  });
});
