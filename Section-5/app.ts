class Department {
    name: string;
    employees: string[] = [];

    constructor(n: string){
        this.name = n;
    }

    describe(this: Department){
        console.log('Department: ' + this.name)
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

const accounting  = new Department('Accounting');

accounting.addEmployee('Riyaaz')
accounting.addEmployee('Ahmed')
accounting.addEmployee('Ammarah')

accounting.employees[0] = 'Nasief'

accounting.describe()
accounting.printEmployeeInformation()

// const accountingCopy = { name: 'Nasief', describe: accounting.describe}
// accountingCopy.describe()