import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {

  imagenAccion:boolean=true;
  termino: string= ''
  hayError: boolean=false
  paises: Country[]=[]
  //inyecta el servicio PaisService
  constructor(private paisService: PaisService){}

  buscar(termino:string){
   this.hayError=false;
   this.termino=termino;
   this.imagenAccion=false;
   

    this.paisService.buscarPais(this.termino).subscribe(
      {
        next: paises=>{
          console.log(paises)
          this.paises=paises
        },
        error: err=>{
          this.hayError=true
          this.paises=[]
          }

      })

     
  } 
  sugerencias(termino:string){
    this.hayError=false;
  }
  
  }

  //  next: (resp)=>{console.log(resp);this.hayError=false},
  //error: (err)=>{this.hayError=true}
      
   
  

//paises=>{console.log(paises)}

 


