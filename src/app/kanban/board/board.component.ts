import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BoardService } from '../board.service';
import { Board } from '../board.model';
import { Task } from '../board.model';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../dialogs/task-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input() board!: Board;

  constructor(private boardService: BoardService, private dialog: MatDialog) {}

  taskDrop(event: CdkDragDrop<string[]>) {
    if (this.board.tasks && this.board.id) {
      moveItemInArray(
        this.board.tasks,
        event.previousIndex,
        event.currentIndex
      );
      this.boardService.updateTasks(this.board.id, this.board.tasks);
    }
  }

  openDialog(task?: Task, idx?: number): void {
    const newTask = { label: 'purple' };
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: task
        ? { task: { ...task }, isNew: false, boardId: this.board.id, idx }
        : { task: newTask, isNew: true },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (this.board.id && this.board.tasks) {
          if (result.isNew) {
            this.boardService.updateTasks(this.board.id, [
              ...this.board.tasks,
              result.task,
            ]);
          } else {
            const update = this.board.tasks;
            update.splice(result.idx, 1, result.task);
            this.boardService.updateTasks(this.board.id, this.board.tasks);
          }
        }
      }
    });
  }
  handleDelete() {
    if (!this.board.id) return;
    this.boardService.deleteBoard(this.board.id);
  }
}
