"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var employee_component_1 = require("./employee.component");
var notfount_component_1 = require("./notfount.component");
var employee_detail_component_1 = require("./employee-detail.component");
var routing = [
    // tu dong chuyen trang nay sang trang khac khi khong co redirecTo: 
    { path: '', component: home_component_1.HomeComponent },
    { path: 'employees', component: employee_component_1.EmployeeListComponent },
    { path: 'employees-detail/:id', component: employee_detail_component_1.EmployeeDetailsComponent },
    { path: '**', component: notfount_component_1.NotFountComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map