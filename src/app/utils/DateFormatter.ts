//This class format date from "2023-03-16, 16-03-2023 and 2023/03/16" to 16/03/2023.
export class DateFormatter{
  
    date: string = "";

    constructor(date: string){
        this.date = date;
    }

    getDate(): string{
        let dates: string[] = [];      
        dates = this.date.replaceAll("/", "-").split("-");
        let newDate = "";
        
        let elemento: number = Number(dates[0]);
        if (elemento > 2000 ){
            
            for (let i = 0; i < dates.length ; i++){
                newDate +=dates[dates.length - i -1];
                if( i != dates.length-1)
                newDate +="/";
            }
        }else{
            newDate = this.date.replaceAll("-", "/");
        }
            
        return newDate;
        
    }

}