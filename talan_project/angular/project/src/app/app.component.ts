import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import studentsData from './students.json';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';

interface Student {  
  id: Number;  
  name: String;  
  email: String;  
  gender: String;  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{

  constructor (private http: HttpClient) {

  }

  private fileTmp:any;

  getFile($event: any): void {
    //TODO esto captura el archivo!
    const [ file ] = $event.target.files;
    this.fileTmp = {
      fileRaw:file,
      fileName:file.name
    }
  }

  sendFile():void{

    const body = new FormData();
    body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
    body.append('email','test@test.com')

    this.sendPost(body)
    .subscribe(res => console.log(res))

    console.log('File Uploaded')
  }

  sendPost(body:FormData):Observable<any>{
    return this.http.post(`http://localhost:3000/api/consultor/upload`, body)
  }

  pageData: any;
  postId: any;

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/api/consultor').subscribe(data => {
      this.pageData = data;
    });
  }

  getRequest() {
    this.http.get<any>('http://localhost:3000/api/consultor').subscribe(data => {
      this.pageData = data;
    });
    console.log(this.pageData);
  }

  postRequest() {
    this.http.post<any>('http://localhost:3000/api/consultor', studentsData).subscribe( data => {
      this.postId = data.body;
    })
  }

  students: Student[] = studentsData;

  widthImg = 10;
  name = 'David';
  age = 28;
  img = 'https://source.unsplash.com/random';
  buttonDisabled = true;
  person = {
    name: 'David',
    age: 28,
    avatar: 'https://source.unsplash.com/random',
  }

  names: string[] = ['David', 'Natalia', 'Santi'];
  newName = '';
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://source.unsplash.com/random'
    }
  ]

  toggleButton () {
    this.buttonDisabled = !this.buttonDisabled;
  }

  increaseAge () {
    this.person.age += 1;
  }

  onScroll (event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changueName (event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName () {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName (index: number) {
    this.names.splice(index, 1)
  }

  saveId(event: Event) {
    const id = event.target as HTMLInputElement;
    studentsData[0].id = id.valueAsNumber;
  }

  saveName(event: Event) {
    const name = event.target as HTMLInputElement;
    studentsData[0].name = name.value;
  }

  saveEmail(event: Event){
    const email = event.target as HTMLInputElement;
    studentsData[0].email = email.value;
  }

  saveToJson () {
    this.http.post<any>('http://localhost:3000/api/consultor', studentsData).subscribe( data => {
      this.postId = data.body;
    })
  }
}
