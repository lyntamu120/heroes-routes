import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CRISES, Crisis } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

    crisisId: number;
    crisis: Crisis;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.crisisId = this.route.snapshot.params.id;
        console.log(this.crisisId);
        this.crisis = CRISES.filter(crisis => crisis.id === +this.crisisId)[0];
        console.log(this.crisis);
    }

    gotoCrises() {
        this.router.navigate(['../', {id: this.crisisId, foo: 'foo'}], {relativeTo: this.route});
    }

}
