import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {LessonEditFormComponent} from "./lesson-edit-form/lesson-edit-form.component";
import {LessonSearchPageComponent} from "./lesson-search-page/lesson-search-page.component";
import {MenuNavBarComponent} from "./menu-nav-bar/menu-nav-bar.component";
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet,RouterLink, LessonEditFormComponent, LessonSearchPageComponent, MenuNavBarComponent,NgbDropdown, NgbDropdownMenu, NgbDropdownToggle, FontAwesomeModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'app';

    constructor() {
        console.log('AppComponent.constructor');
    }

    ngOnInit(): void {
        console.log('AppComponent.ngOnInit');
    }
    ngOnDestroy(): void {
        console.log('AppComponent.ngOnDestroy');
    }

    faHome = faHome;
}