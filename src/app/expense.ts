export class Expense {
    id: number;
    eventName: string;
    expenseByUser: string;
    expenseByUserEmail :string;
    detail : string[];
  }

  export class ExpenseDetail {
    name: string;
    amount: number;
  }

  export class SplitDetail {

    details : ExpenseDetail[];

  }