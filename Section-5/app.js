var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //private name: string;
        this.employees = [];
        //this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, "): (").concat(this.name, ") "));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'Dev') || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Nasief') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var development = new ITDepartment('N1', ['Nasief']);
development.addEmployee('Riyaaz');
development.addEmployee('Ahmed');
development.addEmployee('Ammarah');
//accounting.employees[0] = 'Nasief'
development.describe();
development.printEmployeeInformation();
console.log(development);
var accounting = new AccountingDepartment('A1', []);
accounting.addReport('Something Went Wrong!');
accounting.addEmployee('Nasief');
accounting.addEmployee('Feisan');
accounting.printReports();
accounting.printEmployeeInformation();
// const accountingCopy = { name: 'Nasief', describe: accounting.describe}
// accountingCopy.describe()
