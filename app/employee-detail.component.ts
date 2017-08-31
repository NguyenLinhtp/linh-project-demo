import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
    selector:'employeedetail-component',
    templateUrl:'app/employee-detail.component.html'
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy{
    // creat 2 bien de lay tham so tren Url xuong
    public _id: number;
    public subscription:any;
    //  viet cconstructorde inject router vao 
    constructor(private router:Router, private activatedroute: ActivatedRoute){

    }
    ngOnInit(){
        // get _id from url 

        this.subscription = this.activatedroute.params.subscribe(params=>{
            this._id = params['id'];
            alert (this._id);
        });
    }
    Gotoemployee(){
        this.router.navigate(['employees']);
    }
    ngOnDestroy(){
        // huy 
        this.subscription.unsubscrible();
    }
}