﻿import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CategoriesService {

    private BASE_URL: string = 'http://services.odata.org/V4/Northwind/Northwind.svc/';


    constructor(private http: Http) { }



    getCategories(): Observable<any[]> {
        return this.http.get(this.BASE_URL)
            .map(this.extractData)
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



    //getCategories(): Promise<any[]> {
    //    return this.http.get(this.BASE_URL)
    //        .toPromise()
    //        .then(this.extractData)
    //        .catch(this.handleError);
    //}


    //private extractData(res: Response) {
    //    let body = res.json();
    //    return body.data || {};
    //}


    //private handleError(error: any) {
    //    // In a real world app, we might use a remote logging infrastructure
    //    // We'd also dig deeper into the error to get a better message
    //    let errMsg = (error.message) ? error.message :
    //        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //    console.error(errMsg); // log to console instead
    //    return Promise.reject(errMsg);
    //}

    
}



///* Example service */
//@Injectable()
//export class CategoriesService  {
//    private BASE_URL: string = 'http://services.odata.org/V4/Northwind/Northwind.svc/';
//    private tableName: string = "Categories";
    

//    constructor(private http: Http) { }


//    getHeroes(): Observable<any[]> {
//        return this.http.get(this.BASE_URL)
//            .map(this.extractData)
//            .catch(this.handleError);
//    }

//    private extractData(res: Response) {
//        let body = res.json();
//        return body.data || {};
//    }


//    private handleError(error: any) {
//        // In a real world app, we might use a remote logging infrastructure
//        // We'd also dig deeper into the error to get a better message
//        let errMsg = (error.message) ? error.message :
//            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//        console.error(errMsg); // log to console instead
//        return Observable.throw(errMsg);
//    }



//}


