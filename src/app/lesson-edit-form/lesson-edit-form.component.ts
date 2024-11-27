import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSettingService } from '../user-setting.service';

interface LessonPackage {
  title: string;
  description: string;
  category: string;
  level: number;
  prerequisite: string[];
  tags: string[];
  copyright: string;
}

@Component({
  selector: 'app-lesson-edit-form',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule 
  ],
  templateUrl: './lesson-edit-form.component.html'
})
export class LessonEditFormComponent implements OnInit, OnDestroy {
  lessonForm: FormGroup;  // Declare the FormGroup

  constructor(
    private router: Router,
    private userSettingService: UserSettingService,
    private fb: FormBuilder  // Inject FormBuilder
  ) {
    // Initialize the FormGroup with form controls and validators
    this.lessonForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: [''],
      level: ['', [Validators.min(1), Validators.max(10)]], // Example validation for level
      prerequisite: [''],
      tags: [''],
      copyright: ['']
    });
  }

  ngOnInit(): void {
    console.log("LessonEditFormComponent.ngOnInit()");
  }

  ngOnDestroy(): void {
    console.log("LessonEditFormComponent.ngOnDestroy()");
  }

  onClickSubmit() {
    if (this.lessonForm.valid) {
      console.log('Form data submitted:', this.lessonForm.value);
      this.router.navigate(['lesson-list']).then(() => {
        console.log("Navigation to lesson-list successful!");
      }).catch(error => {
        console.error("Failed to navigate:", error);
      });
    } else {
      console.log('Form is invalid. Please check the required fields.');
    }
  }
}
