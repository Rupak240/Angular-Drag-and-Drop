import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
})
export class DragDropComponent implements OnInit {
  movies = [
    {
      title: 'Episode I - The Phantom Menace',
    },
    {
      title: 'Episode II - Attack of the Clones',
    },
    {
      title: 'Episode III - Revenge of the Sith',
    },
    {
      title: 'Episode IV - A New Hope',
    },
    {
      title: 'Episode V - The Empire Strikes Back',
    },
    {
      title: 'Episode VI - Return of the Jedi',
    },
    {
      title: 'Episode VII - The Force Awakens',
    },
    {
      title: 'Episode VIII - The Last Jedi',
    },
    {
      title: 'Episode IX – The Rise of Skywalker',
    },
  ];

  ngOnInit(): void {}

  drop(event: CdkDragDrop<{ title: string }[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
