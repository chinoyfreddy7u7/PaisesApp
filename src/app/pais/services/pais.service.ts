import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, of, tap } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string='https://restcountries.com/v3.1'

     parametrosHttp = new HttpParams()
      .set('field', 'name')
      .set('field', 'capital')
      .set('field', 'population')
      .set('field', 'flags')
      .set('field', 'cioc');

  constructor(private http: HttpClient) { }


  buscarPais(termino:string): Observable<Country[]>{
    const url=  `${this.apiUrl}/name/${termino}`

    return this.http.get<Country[]>(url, {params:this.parametrosHttp})

  }
  buscarCapital(termino:string): Observable<Country[]>{
    const url= ` ${this.apiUrl}/capital/${termino}`

    return this.http.get<Country[]>(url, {params:this.parametrosHttp})

 

  }
  getPaisPorAlpha(id:string): Observable<Country[]>{
    const url= ` ${this.apiUrl}/alpha/${id}`

    return this.http.get<Country[]>(url, {params: this.parametrosHttp})

  }
  buscarRegion(region:string):Observable<Country[]>{


    const url= `${this.apiUrl}/region/${region}?= `
    return this.http.get<Country[]>(url,{params: this.parametrosHttp}).
    pipe( tap (
      console.log
    ) )
  }
}

