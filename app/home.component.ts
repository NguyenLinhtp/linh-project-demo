import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector:'home-component',
    template:`<h2>This is home component</h2>
    <button (click)="Gotoemployee()" >Go to Employeee</button>
    `
})
export class HomeComponent{
    //  viet cconstructorde inject router vao 
    constructor(private router:Router){

    }
    Gotoemployee(){
        this.router.navigate(['employees']);
    }
}