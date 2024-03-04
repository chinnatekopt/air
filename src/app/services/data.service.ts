import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getLocalStorage(arg0: string): import("../models/customer").Customer {
    throw new Error('Method not implemented.');
  }
  setLocalStorage(arg0: string, data: any) {
    throw new Error('Method not implemented.');
  }
  loggedCust: any;
  clearLocalStorage() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
