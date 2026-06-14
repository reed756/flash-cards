import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashCard } from './flash-card';
import { FlashCardQuiz } from './flash-card-quiz';

describe('FlashCard', () => {
  let component: FlashCard;
  let fixture: ComponentFixture<FlashCard>;
  let p: HTMLParagraphElement;
  let prevBtn: HTMLButtonElement;
  let nextBtn: HTMLButtonElement;
  let service: FlashCardQuiz;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashCard],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashCard);
    service = TestBed.inject(FlashCardQuiz);
    component = fixture.componentInstance;
    p = fixture.nativeElement.querySelector('p');
    prevBtn = fixture.nativeElement.querySelector('.prevBtn');
    nextBtn = fixture.nativeElement.querySelector('.nextBtn');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('HTML Elements', () => {
    it('p tag shows question when showAnswer is false', () => {
      expect(p.textContent).toContain(service.quizData()[service.quizCardProgress().currentCardIdx].question);
    });

    it('p tag shows answer when showAnswer is true', () => {
      service.quizCardProgress.set({
        currentCardIdx: 0,
        totalCards: 20,
        showAnswer: true
      });
      fixture.detectChanges();
      expect(p.textContent).toContain(service.quizData()[service.quizCardProgress().currentCardIdx].answer);
    });

    it('previous button is disabled when currentCardIdx is zero', () => {
      expect(prevBtn?.disabled).toBeTruthy();
    });

    it('previous button is enabled when currentCardIdx is greater than zero', () => {
      service.nextQuestion();
      fixture.detectChanges();
      expect(prevBtn?.disabled).toBeFalsy();
    });

    it('next button is enabled when currentCardIdx plus one is less than totalCards', () => {
      expect(nextBtn?.disabled).toBeFalsy();
    });

    it('next button is disabled when currentCardIdx plus one is the same as totalCards', () => {
      service.quizCardProgress.set({
        currentCardIdx: 19,
        totalCards: 20,
        showAnswer: false
      });
      fixture.detectChanges();
      expect(nextBtn?.disabled).toBeTruthy();
    });
  });
});
