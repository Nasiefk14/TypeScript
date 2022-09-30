class Department {
    //private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name : string){
        //this.name = n;
    }

    describe(this: Department){
        console.log(`Department (${this.id}): (${this.name}) `)
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]){
        super(id, 'Dev');
        this.admins = admins
    }
}

class AccountingDepartment extends Department{
    constructor(id:string, private reports: string[]){
        super(id ,'Accounting')
    }

    addReport(text: string){
        this.reports.push(text)
    }

    printReports(){ 
        console.log(this.reports)
    }
}

const development = new ITDepartment('N1', ['Nasief'])

development.addEmployee('Riyaaz')
development.addEmployee('Ahmed')
development.addEmployee('Ammarah')

//accounting.employees[0] = 'Nasief'

development.describe()
development.printEmployeeInformation()

console.log(development)

const accounting = new AccountingDepartment('A1', [])

accounting.addReport('Something Went Wrong!')
accounting.printReports()

// const accountingCopy = { name: 'Nasief', describe: accounting.describe}
// accountingCopy.describe()