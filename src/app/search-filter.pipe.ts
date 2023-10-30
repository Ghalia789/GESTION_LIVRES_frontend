import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], filterText: string): any[] {
    /*if (!list || !filterText) {
      return list;
    }*/
    filterText = filterText.toLowerCase();
    return list.filter(item =>
      item.titreLivre.toLowerCase().includes(filterText)
    );
  }
}
