import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent  {
 
  
  
  imagenAccion:boolean=true;
  termino:string=''
  hayError:boolean=false;
  capital: Country[]=[]
  constructor(private capitalService:PaisService) { }
  buscar(termino:string){

    this.hayError=false;
    this.termino=termino
    this.imagenAccion=false;


    this.capitalService.buscarCapital(this.termino).subscribe({
      next: 
      capital=>{
        console.log(capital)
        this.capital=capital
      },
      error: err=>{
        this.hayError=true,
        this.capital=[]
      }
      

    })

  }
  sugerencias(termino:string){
    this.hayError=false;

  }

  ngOnInit(): void {
  }

}
