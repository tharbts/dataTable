import { MockService } from './../services/mock.service';
import { AfterViewInit, Component } from '@angular/core';
import { Person } from '../models/Person';
import $ from "jquery";
import 'datatables.net';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
    title = 'dataTable';

    peaple : Person[] = [];

    constructor(private mockService: MockService) {
        this.peaple = mockService.getPeople();
    }
    ngAfterViewInit(): void {
        (<any>$('#table')).dataTable({
            "order": [[ 0, "desc" ]],
            "ordering": true
        });
    }
}
