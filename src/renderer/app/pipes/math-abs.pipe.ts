import { Pipe, PipeTransform } from "@angular/core";

/*
 * Applies Math.abs to the value
 * Usage:
 *   value | abs
 * Example:
 *   {{ -1 | abs }} => 1
 *   {{ 10 - 15 | abs }} => 5
*/
@Pipe({name: "abs"})
export class MathAbsPipe implements PipeTransform {
    transform(value: number): number {
        return Math.abs(value);
    }
}
