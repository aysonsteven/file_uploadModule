import { Component, OnInit, OnDestroy, OnChanges, Renderer, ViewChild, ElementRef } from "@angular/core";
import { DynamicFormService } from "../../service/dynamic-form.service"
@Component({
    selector: 'dynamic-form',
    templateUrl: 'static/app/modules/file-upload/component/dynamic-form/dynamic-form.component.html',
    styleUrls: [ 'static/app/modules/file-upload/component/dynamic-form/dynamic-form.component.css' ],
    providers: [ DynamicFormService ]
})

export class DynamicFormComponent implements OnInit{
    caseReviewSetGroup;
    constructor( private requestForm: DynamicFormService ){

    }

    ngOnInit(){
        this.requestForm.getFieldOptionsObjects( response =>{
            this.caseReviewSetGroup = response.caseReviewSetGroup;
            console.log( this.caseReviewSetGroup[0]);
            console.log('datassasd', response );
        }, fail =>{
            console.log( fail );
        });
    }
}