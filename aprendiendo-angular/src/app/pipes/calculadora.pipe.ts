import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform{

	transform(value: any, value_two: any){
		let operaciones = `
			Suma: ${value + value_two} \n
			Resta: ${value - value_two} \n
			Multiplicación: ${value * value_two} \n
			División: ${value / value_two}
		`;

		return operaciones;
	}
}