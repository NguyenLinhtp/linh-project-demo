import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'employee-list',
    templateUrl: './app/employee.component.html',
})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    public pages: number[];
    public currentPage: number;
    constructor(private employeeService: EmployeeService,
        private router: Router, private activatedRoute: ActivatedRoute) {

    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.currentPage = params['pageNumber'] || 1;
            console.log(this.currentPage);
            console.log(params['filter']);
        })
        this.LoadData();
        this.pages = [1, 2, 3, 4, 5];
    }
    Delete(id: number) {
        let confirmResult = confirm("Are you sure delete this employee!!!");
        if (confirmResult) {
            this.employeeService.Delete(id).subscribe(response => {
                if (response) {
                    alert("Delete ok!!!");
                    this.LoadData();
                }
            })

        }
    }
    LoadData() {
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
}