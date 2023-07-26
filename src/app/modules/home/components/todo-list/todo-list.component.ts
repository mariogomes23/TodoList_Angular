import { Component,OnInit,DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,DoCheck {

  public taskList:Array<TaskList> = [
    {task:"Minnha nova",checked:true},
    {task:"Minnha segunta tarefa",checked:false}
  ]


  ngOnInit(): void {

  }
  ngDoCheck(): void {

    this.taskList.sort( (first,last)=>Number(first.checked)-Number(last.checked))
  }

  public deleteItemTaskList(event:number)
  {
     this.taskList.splice(event,1)
  }

  public deleteAllTaskList()
  {
    this.taskList=[]
  }



  public setEmitTaskList(event:string)
  {

    this.taskList.push({task:event,checked:false})
  }

  public validationInput(event:string,index:number)
  {
    if(!event.length)
    {
      const confirmar = window.confirm("Task esta vazia,seja apagar ?")


    if(confirmar)
    { 
      this.deleteItemTaskList(index)

    }
    }


  }

}
