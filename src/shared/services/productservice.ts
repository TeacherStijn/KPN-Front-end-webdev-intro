import {Product} from "../models/product.model";
import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {catchError} from "rxjs/internal/operators";
import {Observable, of} from "rxjs";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient){}

  getProducten(): Observable<Product[]>{
    return this.http.get<Product[]>("assets/producten.json")
    .pipe(
        catchError((err)=>{
          console.log("Er is iets misgegaan!");
          return of([]); // een gegenereerde lege Observable;
        }
        )
      );
  }
}
