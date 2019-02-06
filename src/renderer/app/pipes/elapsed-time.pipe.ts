import { Pipe, PipeTransform } from "@angular/core";

const hoursDivisor = 60 * 60;

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
    transform(seconds: number): string {
        const hours: number = Math.floor(seconds / hoursDivisor);
        const minutes: number = Math.floor((seconds % hoursDivisor ) / 60);

        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
}