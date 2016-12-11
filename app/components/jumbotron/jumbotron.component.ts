/**
 * Created by ignatius on 11.12.16.
 */
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {

    private jbtHeading: string;
    private jbtText: string;
    private jbtBtnText: string;
    private jbtBtnUrl: string;

    constructor() {
        this.jbtHeading = "Welcome";
        this.jbtText = "A simple jumbotron";
        this.jbtBtnText = "Read More";
        this.jbtBtnUrl = "/";
    }
}