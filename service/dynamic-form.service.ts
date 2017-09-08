import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import 'rxjs/add/operator/map';
import {BaseService} from "./base/base.service";
@Injectable()

export class DynamicFormService extends BaseService{
    constructor( private http: Http ) {
        super( http );
    }

    getFieldOptionsObjects(  successCallback: any, errorCallback?: any ){
        this.httpget( 'process/getFieldOptions?reviewSetObjectId=' + 254 , res =>{
            successCallback( res );
        }, error => {
            errorCallback( error );
        })
    }

}