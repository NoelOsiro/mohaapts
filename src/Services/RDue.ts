export interface Rentdue {
    name: string;
    phone: string;
    house: string;
    house_no: number;
    amount: number;
    due_date: string;
}

export const RentDueList:Rentdue []= [
    {
        name: "Montgomery Mckee",
        phone: "+254 (991) 523-2071",
        house: "Complex 3Br",
        house_no: 33,
        amount: 8733,
        due_date: "2018-11-18T05:14:53 -03:00"
      },
      {
        name: "Wilson Bradford",
        phone: "+254 (868) 529-2435",
        house: "Complex 2Br",
        house_no: 79,
        amount: 7134,
        due_date: "2021-04-22T12:40:09 -03:00"
      },
      {
        name: "Elinor Sparks",
        phone: "+254 (801) 480-3979",
        house: "Complex 1Br",
        house_no: 9,
        amount: 3233,
        due_date: "2019-06-21T05:09:56 -03:00"
      },
      {
        name: "Russo Burch",
        phone: "+254 (809) 430-3464",
        house: "Complex 2Br",
        house_no: 75,
        amount: 5778,
        due_date: "2015-04-06T11:52:55 -03:00"
      },
      {
        name: "Dodson Preston",
        phone: "+254 (876) 415-2985",
        house: "Complex 2Br",
        house_no: 39,
        amount: 6157,
        due_date: "2019-06-08T08:24:55 -03:00"
      }
]