import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datenumber',
})
export class DatenumberPipe implements PipeTransform {
  transform(value: any, ...args: any[]): number {
    let today: Date = new Date(); //get current date and time
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    let dateDifference = Math.abs(value - todayWithNoTime); //returns value in milliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    let dateDifferenceSeconds = dateDifference * 0.001; //converts milliseconds to seconds
    let dateCounter = dateDifferenceSeconds / secondsInDay;
    if (dateCounter >= 1 && value > todayWithNoTime) {
      return dateCounter;
    } else {
      return 0;
    }
    // return null;
  }
}
