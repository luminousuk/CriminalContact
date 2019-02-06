import { Pipe, PipeTransform } from "@angular/core";

/*
 * Displays milliseconds in hh:mm:ss format
 * Usage:
 *   value | elapsedTime
 * Example:
 *   {{ 7840000 | elapsedTime:10 }}
 *   formats to: 02:10:40
*/
@Pipe({name: "elapsedTime"})
export class ElapsedTimePipe implements PipeTransform {
    transform(milliseconds: number): string {
        const hours: number = Math.floor(milliseconds / (60*60*1000));
        milliseconds = milliseconds % (60*60*1000);
        const minutes: number = Math.floor(milliseconds / (60*1000));
        milliseconds = milliseconds % (60*1000);
        const seconds: number = Math.floor(milliseconds / 1000);

        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
}