import { Injectable } from '@angular/core';
import data from '../../assets/record.json';
@Injectable({
    providedIn: 'root'
})
export class MockService {

    constructor() { }

    getPerson(){
        return data;
    }
}
