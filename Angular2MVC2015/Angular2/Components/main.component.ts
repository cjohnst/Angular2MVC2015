import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../Services/category.service';


@Component({
    selector: 'main',
    template: '{{title}}'
})

export class MainComponent implements OnInit {
    title = 'Main Component';
    errorMessage: string;
    categories: any[];



    constructor(private categoriesService: CategoriesService) { }


    ngOnInit() {
       // this.getCategories();
    }

    getCategories() {
        this.categoriesService.getCategories()
            .subscribe(
            heroes => this.categories = heroes,
            error => this.errorMessage = <any>error);
    }

}  