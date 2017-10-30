import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
    arrSubjects = ["AngularJS", "NodeJS", "React Native"] ;
    objectWords = [
      {id: 0 , name: 'thanh' , level: '12+'},
      {id: 1 , name: 'thanh1' , level: '13+'},
      {id: 2 , name: 'thanh2' , level: '14+'}] ;

      newName = '';
      newLevel = '';
      isShowForm = false;
 constructor() { }

 ngOnInit() {
 }
   addNew() {
      this.objectWords.unshift({
          id: this.objectWords.length+1,
          name: this.newName,
          level: this.newLevel
         });
         this.newName = '' ;
         this.newLevel = '';
         this.isShowForm = false;
   }
   deleteElement(id) {
      console.log(id);
      const index = this.objectWords.findIndex(word => word.id === id) ;
       this.objectWords.splice(index, 1);
   }
}
