import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserSettingService } from '../user-setting.service'; // Import the service

@Component({
    selector: 'app-lesson-edit-form',
    standalone: true,
    imports: [
        RouterModule,
    ],
    templateUrl: './lesson-edit-form.component.html'
})
export class LessonEditFormComponent implements OnInit, OnDestroy {
    constructor(
        private router: Router,
        private userSettingService: UserSettingService  // Inject the service
    ) {
        console.log("LessonEditFormComponent.constructor()");
    }

    ngOnInit(): void {
        console.log("LessonEditFormComponent.ngOnInit()");
    }

    ngOnDestroy(): void {
        console.log("LessonEditFormComponent.ngOnDestroy()");
    }

    onClickSubmit() {
        this.userSettingService.lastLessonId = 1234; // Set the lastLessonId
        this.router.navigate(['lesson-list']).then(() => {
            console.log("Navigation to lesson-list successful!");
        }).catch(error => {
            console.error("Failed to navigate:", error);
        });
    }
}
