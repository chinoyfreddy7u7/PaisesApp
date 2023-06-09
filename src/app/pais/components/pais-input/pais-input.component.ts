import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit  {
  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).
    subscribe(valor=>{ this.onDebounce.emit(valor) } );
  }


  @Output() onEnter: EventEmitter<string>= new EventEmitter()
  @Output() onDebounce: EventEmitter<string>= new EventEmitter()

  @Input() placeholder:string=''

  debouncer: Subject<string> = new Subject()

 termino:string='';

 buscar(){
  this.onEnter.emit(this.termino)
  console.log('hola mundo')
 

 }
 teclaPresionada(){
  this.debouncer.next(this.termino)
 }

 
  

}
