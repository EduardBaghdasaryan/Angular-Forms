import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any) {
    
    // if(list === undefined) return value 
    
    // return value.filter(function(user:any)  {
    //   user.name.toLoweCase().includes(list.toLoweCase())
    // })
  }

}
