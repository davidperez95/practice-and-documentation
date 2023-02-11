// define variables in typescript
// const username: string | number = 'david';

// writing a function in typescript
// standard function
/* function sum (a: number, b: number) {
    return a + b;
};
sum();
*/
// arrow function
// const sum = (a: number, b: number) => {
//     return a + b;
// }
// sum(1,2);

// classes in typescript
// class Person {
    // private property
//     private age: number;
//     lastName: string;

    //constructor function in typescript
//     constructor(age: number, lastName: string) {
//         this.age = age;
//         this.lastName = lastName;
//     }
// }

// const david = new Person(28, 'Perez');

// classes in one line
// class Car {
//     constructor(public model: string, private brand: string) {}
// }
// const audi = new Car('A3', 'audi');

// STRING INTERPOLATION
// variables rendered in the component.html and from the component.ts
// the properties must be public to render in the html
// {{ 1 + 1 }}
// {{ myVar }}
// <h2>{{ 'Hola Mundo'.repeat(5) }}</h2>
// <p>3 + 3 = {{ 3 + 3 }}</p>
// <img src={{img}} alt="image">

// PROPERTY BINDING
// <button [disabled]="buttonDisabled">Send</button>
// <input type="text" [value]="name">
// <progress max="100" [value]="age"></progress>
// <img width="100" [src]="img" alt="">
// using objects in the components.ts
// <input type="text" [value]="person.name">
// <progress max="100" [value]="person.age"></progress>

// EVENT BINDING
// <button (click)="toggleButton()">Toogle Button</button>

// ng Model
// combination of property and event binding
// <input type="text" required="" #nameInput="ngModel" [(ngModel)]="person.name">
// <p>Valid: {{ nameInput.valid }}</p>

// ngIf
// <p *ngIf="person.name === 'Natalia' && person.age === 28; else elseBlock">Soy Natalia</p>
// <ng-template #elseBlock>

// ngFor
// building an array in typescript
// names: string[] = ['str1', 'str2', 'str3']
// names: string[] | number[] = ['str1', 123]
// names: any[] = ['str1', 123, true]
// <li *ngFor="let name of names; index as i">

// ngFor for array of objects
// <div>
//   <div *ngFor="let product of products">
//     <img width="200" height="200" [src]="product.image" alt="image">
//     <h2>{{ product.price }}</h2>
//     <p>{{ product.name }}</p>
//   </div>
// </div>