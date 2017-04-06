import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})

export class StarComponent {
    @Input() rating: number;
    starWidth: number;
    ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    ngOnchanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    onclick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}