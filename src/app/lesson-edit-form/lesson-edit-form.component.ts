import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-lesson-edit-form',
    standalone: true,
    imports: [
        RouterModule,
    ],
    templateUrl: './lesson-edit-form.component.html'
})
export class LessonEditFormComponent {
    constructor(private router: Router) {
        console.log("LessonEditFormComponent.constructor()");
    }

    ngOnInit(): void {
        console.log("LessonEditFormComponent.ngOnInit()");
    }

    ngOnDestroy(): void {
        console.log("LessonEditFormComponent.ngOnDestroy()");
    }

    onClickSubmit() {
        this.router.navigate(['lesson-list']).then(() => {
            console.log("Navigation to lesson-list successful!");
        }).catch(error => {
            console.error("Failed to navigate:", error);
        });
    }
}
