export const angularFlashcards = [
  {
    id: 1,
    question: "What is the main difference between Standalone Components and NgModules?",
    answer: "NgModules group components and manage dependencies globally via a central file. Standalone Components eliminate this boilerplate by managing their own dependencies directly inside their @Component imports array, making them easier to tree-shake and lazy-load."
  },
  {
    id: 2,
    question: "How do parent and child components communicate in modern Angular?",
    answer: "Parent to Child: Via @Input() properties or the modern input() signal. Child to Parent: Via @Output() events using EventEmitter or the modern output() API."
  },
  {
    id: 3,
    question: "What is ng-content and how do you use multi-slot content projection?",
    answer: "ng-content acts as a placeholder for passing raw HTML or components from a parent into a child. For multi-slot projection, use the select attribute (e.g., <ng-content select=\".header\">) to target specific elements by class, tag, or attribute."
  },
  {
    id: 4,
    question: "What is the difference between a Component and a Directive?",
    answer: "A Component is a directive with an attached HTML template (@Component) used to build UI views. A Directive (@Directive) lacks a template and is used to modify the behavior or appearance of an existing DOM element."
  },
  {
    id: 5,
    question: "What are Angular Signals and why were they introduced?",
    answer: "Signals are a synchronous reactive primitive that tracks state changes. They provide fine-grained reactivity, telling Angular exactly which DOM nodes need to update when state changes, eliminating the need to check the entire component tree."
  },
  {
    id: 6,
    question: "In Angular Signals, what is the difference between computed() and effect()?",
    answer: "computed() creates a read-only signal derived from other signals and caches the value until dependencies change. effect() runs side-effects (like logging or DOM updates) asynchronously whenever its internal signals change."
  },
  {
    id: 7,
    question: "When should you use an RxJS Observable vs. an Angular Signal?",
    answer: "Use RxJS Observables for asynchronous streams of data over time (e.g., HTTP requests, WebSockets). Use Signals for synchronous runtime state management and UI-bound values."
  },
  {
    id: 8,
    question: "How does changeDetection: ChangeDetectionStrategy.OnPush optimize performance?",
    answer: "It disables automatic change detection for that component. Angular will only re-render the component if a new reference is passed to an @Input(), an internal event fires, or a bound Observable/Signal updates."
  },
  {
    id: 9,
    question: "Why is it bad practice to call regular functions directly inside an Angular template expression?",
    answer: "Angular re-executes template functions during every single change detection cycle to check for updates, creating a massive performance bottleneck. Solution: Use pure Pipes or computed() signals instead."
  },
  {
    id: 10,
    question: "What are the advantages of the modern @for template syntax over *ngFor?",
    answer: "@for runs up to 90% faster due to a built-in optimization algorithm, forces you to provide a tracking key via track to prevent unnecessary DOM re-renders, and includes an integrated @empty block for empty arrays."
  },
  {
    id: 11,
    question: "How do you lazy-load a Standalone Component in the Angular Router?",
    answer: "Use the loadComponent property paired with a dynamic import() statement inside your route configuration: { path: 'home', loadComponent: () => import('./home.component').then(m => m.HomeComponent) }"
  },
  {
    id: 12,
    question: "What are functional Route Guards and name three common types.",
    answer: "Lightweight, function-based logic used to protect routes. Common types: CanActivate (controls entry), CanDeactivate (controls exit/unsaved changes check), and CanMatch (controls route matching)."
  },
  {
    id: 13,
    question: "What is the correct execution order of the 4 primary lifecycle hooks?",
    answer: "1. ngOnChanges (runs when inputs change), 2. ngOnInit (runs after component initialization), 3. ngAfterViewInit (runs after UI view is fully loaded), 4. ngOnDestroy (runs right before component cleanup)."
  },
  {
    id: 14,
    question: "Briefly explain how Angular’s Hierarchical Dependency Injection works.",
    answer: "Angular searches for dependencies from the bottom up. It checks the component's local injector first; if not found, it walks up the parent component tree, and finally looks in the root environment injector."
  },
  {
    id: 15,
    question: "What is the difference between providedIn: 'root' and component-level providers: []?",
    answer: "providedIn: 'root' creates an app-wide, tree-shakable singleton instance of a service. Component-level providers create a unique instance exclusively for that component lifecycle, destroying it when the component is destroyed."
  },
  {
    id: 16,
    question: "What is the benefit of the functional inject() API over traditional constructor injection?",
    answer: "inject() simplifies TypeScript inheritance (no need to call super(deps) in child classes), makes code cleaner, and can be used directly inside functional route guards and interceptors where constructors aren't available."
  },
  {
    id: 17,
    question: "What are the main differences between Template-driven and Reactive Forms?",
    answer: "Template-driven forms rely heavily on directives (ngModel) in the HTML template and are asynchronous. Reactive Forms are defined synchronously in TypeScript using strongly-typed FormGroup and FormControl objects, making them highly testable."
  },
  {
    id: 18,
    question: "What is the difference between a Pure Pipe and an Impure Pipe?",
    answer: "A Pure Pipe (default) only executes when its input reference or primitive value changes. An Impure Pipe ({ pure: false }) executes during every single change detection cycle, which can severely slow down the app if overused."
  },
  {
    id: 19,
    question: "What is the difference between JIT and AOT compilation?",
    answer: "JIT (Just-In-Time) compiles template code to JavaScript in the browser at runtime (slower startup). AOT (Ahead-Of-Time) compiles everything during the build process, resulting in faster rendering and early template error detection."
  },
  {
    id: 20,
    question: "How does Angular’s HttpClient protect against Cross-Site Request Forgery (CSRF/XSRF)?",
    answer: "It automatically looks for a cookie named XSRF-TOKEN on the current domain. If present, it attaches its value to a secure custom header named X-XSRF-TOKEN for all mutating backend requests (POST, PUT, DELETE)."
  }
];