import { Component, OnInit } from '@angular/core';"@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
        {
            id: 1,
            name: 'Angular Forms',
            imageUrl: './assets/images/forms.png',
            price: 99.99,
            code: 'xps-1395',
            duration: 100,
            rating: 4.4,
            releaseDate: 'Outubro, 8, 2021',
        },
        {
            id: 2,
            name: 'Angular Http',
            imageUrl: './assets/images/http.png',
            price: 99.99,
            code: 'asdsd-1395',
            duration: 122,
            rating: 4.7,
            releaseDate: 'Outubro, 8, 2021',
        }
    ]
    }
}