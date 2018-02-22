import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const expense={
        id : 11,
        amount : 11,
        eventName :'',
        expenseByUser:'',
        expenseByUserEmail:''
      };

    const splitDetail={
        amount : 12,
        userName : 'paras'
    }
    return {splitDetail};
  }
}