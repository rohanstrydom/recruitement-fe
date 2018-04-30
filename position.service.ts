import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http'
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class PositionService {    
    private apiUrl = 'https://recruitment.innovationtrampoline.com/wp-admin/admin-ajax.php'

    constructor (private http:  Http){ }     

    retrieveIntroMessage(positionCode: string): Promise<boolean> {
        const url = `${this.apiUrl}`;
        const input = JSON.stringify(
            { action: 'position_retrieve_intro_message', position: positionCode })
        
        let requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'multipart/form-data;');
        let options =  { headers: requestHeaders, method: RequestMethod.Post };

        return this.http.post(url, input, options)
          .toPromise()
          .then(response => response.json().data as boolean)
          .catch(this.handleError);
    }

    retrieveOpenings(): Promise<boolean> {
        const url = `${this.apiUrl}`;
        const input = JSON.stringify(
            { action: 'position_retrieve_openings'})
        
        let requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'multipart/form-data;');
        let options =  { headers: requestHeaders, method: RequestMethod.Post };

        return this.http.post(url, input, options)
          .toPromise()
          .then(response => response.json().data as boolean)
          .catch(this.handleError);
    }

    getAllCandidates(positionCode: string): Promise<boolean> {
        const url = `${this.apiUrl}`;
        const input = JSON.stringify(
            { action: 'position_get_all_candidates', position: positionCode })
        
        let requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'multipart/form-data;');
        let options =  { headers: requestHeaders, method: RequestMethod.Post };

        return this.http.post(url, input, options)
          .toPromise()
          .then(response => response.json().data as boolean)
          .catch(this.handleError);
    }

    // error handler
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}