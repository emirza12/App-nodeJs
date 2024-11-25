import { Component } from '@angular/core';
import { UserSettingService } from '../user-setting.service';

@Component({
  selector: 'app-lesson-list-page',
  templateUrl: './lesson-list-page.component.html'
})
export class LessonListPageComponent {
  constructor(private userSettingService: UserSettingService) {
    console.log("get lastLessonId:", this.userSettingService.lastLessonId);
  }
}
