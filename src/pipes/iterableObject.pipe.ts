import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'iterableObject'})
export class IterableObjectPipe implements PipeTransform {
    transform(object:Object) {
        let result = [];

        for (let key in object) {
            result.push(object[key]);
        }

        return result;
    }
}
