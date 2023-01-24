import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(
    private HttpClient:HttpClient
  ) { }

  public getRegisters(){
    const url = "../assets/register.json";
    return this.HttpClient.get<Register[]>(url)
  }
}
