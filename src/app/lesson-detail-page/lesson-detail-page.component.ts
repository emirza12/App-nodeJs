import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lesson-detail-page',
  standalone: true,
  templateUrl: './lesson-detail-page.component.html',
  styleUrls: ['./lesson-detail-page.component.css']
})


export class LessonDetailPageComponent {
  readonly initialId: number;
  id: number | undefined;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.initialId = +this.activatedRoute.snapshot.params['id'];
    console.log('initialId:', this.initialId);

    this.activatedRoute.params.subscribe(currParams => {
      this.id = +currParams['id'];
      console.log('id:', this.id);
    });
  }

  onClickGoNextPage() {
    const nextId = this.id ? this.id + 1 : 1; 
    this.router.navigate(['/lesson', nextId]); 
  }
}
