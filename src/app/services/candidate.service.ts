import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http'
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class CandidateService {    
    private apiUrl = 'https://recruitment.innovationtrampoline.com/wp-admin/admin-ajax.php'

    constructor (private http:  Http){ } 

    savePhoneNumber(phoneNumber: string, positionCode: string): Promise<boolean> {
        const url = `${this.apiUrl}`;
        const input = JSON.stringify(
            { action: 'candidate_save_phone_number', phone_number: phoneNumber, position_code: positionCode })
        
        let requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'multipart/form-data;');
        let options =  { headers: requestHeaders, method: RequestMethod.Post };

        return this.http.post(url, input, options)
          .toPromise()
          .then(response => response.json().data as boolean)
          .catch(this.handleError);
    }

    generateSaveOTP(phoneNumber: string, positionCode: string): Promise<boolean> {
        const url = `${this.apiUrl}`;
        const input = JSON.stringify(
            { action: 'candidate_generate_save_otp', phone_number: phoneNumber, position_code: positionCode })
        
        let requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'multipart/form-data;');
        let options =  { headers: requestHeaders, method: RequestMethod.Post };
    
        return this.http.post(url, input, options)
          .toPromise()
          .then(response => response.json().data as boolean)
          .catch(this.handleError);
    }

    checkOTP(phoneNumber: string, positionCode: string, inputOTP: string): Promise<boolean> {
        const url = `${this.apiUrl}`;
        const input = JSON.stringify(
            { action: 'candidate_check_otp', phone_number: phoneNumber, position_code: positionCode, otp: inputOTP })

        let requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'multipart/form-data;'); 
        let options =  { headers: requestHeaders, method: RequestMethod.Post };

        return this.http.post(url, input, options)
          .toPromise()
          .then(response => response.json().data as boolean)
          .catch(this.handleError);
    } 
   
    SaveDetail(phoneNumber: string, candidateName: string, candidateSurname: string, candidateEmail: string, idNumber: string): Promise<boolean> {
        const url = `${this.apiUrl}`;
        const input = JSON.stringify(
            {   action: 'candidate_generate_save_otp', 
                phone_number: phoneNumber, name: candidateName, surname: candidateSurname, email: candidateEmail, id: idNumber   })
        
        let requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'multipart/form-data;');
        let options =  { headers: requestHeaders, method: RequestMethod.Post };

        return this.http.post(url, input, options)
          .toPromise()
          .then(response => response.json().data as boolean)
          .catch(this.handleError);
    }

    SaveAnswerOne(phoneNumber: string, positionCode: string, answerOne: string): Promise<boolean> {
        const url = `${this.apiUrl}`;
        const input = JSON.stringify(
            { action: 'candidate_save_answer_one',  
                phone_number: phoneNumber, position_code: positionCode, answer_three: answerOne  })
        
        let requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'multipart/form-data;');
        let options =  { headers: requestHeaders, method: RequestMethod.Post };

        return this.http.post(url, input, options)
          .toPromise()
          .then(response => response.json().data as boolean)
          .catch(this.handleError);
    }

    SaveAsnwerTwo(phoneNumber: string, positionCode: string, answerTwo: string): Promise<boolean> {
        const url = `${this.apiUrl}`;
        const input = JSON.stringify(
            { action: 'candidate_save_answer_two',  
                phone_number: phoneNumber, position_code: positionCode, answer_three: answerTwo  });

        let requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'multipart/form-data;');
        let options =  { headers: requestHeaders, method: RequestMethod.Post };

        return this.http.post(url, input, options)
          .toPromise()
          .then(response => response.json().data as boolean)
          .catch(this.handleError);
    }

    SaveAnswerThree(phoneNumber: string, positionCode: string, answerThree: string): Promise<boolean> {
        const url = `${this.apiUrl}`;
        const input = JSON.stringify(
            { action: 'candidate_save_answer_three', 
                phone_number: phoneNumber, position_code: positionCode, answer_three: answerThree  });
        
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