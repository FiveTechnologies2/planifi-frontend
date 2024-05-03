export class Worker{
    constructor(id='', name='', email='', phone='', address='', position='', workedHours='', extraHours='', performance=''){

        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.position = position;
        this.workedHours = workedHours;
        this.extraHours = extraHours;
        this.performance = performance;
    }
    static fromDisplayableWorker(displayableWorker) {
        return new Worker(
            displayableWorker.id,
            displayableWorker.name,
            displayableWorker.email,
            displayableWorker.phone,
            displayableWorker.address,
            displayableWorker.position,
            displayableWorker.workedHours,
            displayableWorker.extraHours,
            displayableWorker.performance
        )
    }

    static toDisplayableWorker(worker) {
        return {
            id: worker.id,
            name: worker.name,
            email: worker.email,
            phone: worker.phone,
            address: worker.address,
            position: worker.position,
            workedHours: worker.workedHours,
            extraHours: worker.extraHours,
            performance: worker.performance
        }
    }
}