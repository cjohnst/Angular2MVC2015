﻿import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../Classes/customer';


@Injectable()
export class CustomerService {


    constructor(private http: Http) { }



    List() {
        return this.http.get("api/customer/list")
            .map(data => <any[]>data.json())
            .catch(this.handleError);
    }

    Detail(customerId: number) {
        return this.http.get("api/customer/detail/" + customerId)
            .map(data => <any>data.json())
            .catch(this.handleError);
    }

    




    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }


    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


    
}



