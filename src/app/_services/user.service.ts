import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { Fitness } from "../model/fitness.model";

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {
    public userData: Fitness;

    public static BaseUrl = "http://localhost:6565/";
    //public static BaseUrl = "https://server5h6yyv32-theia-ideu00-server-13131.eclipse.yaksha.online/";
    constructor(private http: Http) { }

    postfitnessdata(data){
      return this.http.post(UserService.BaseUrl+'allfriends',data,httpOptions).pipe(map((response: Response) => response.json()));
    }

    getfitnessdata() {
      return this.http.get(UserService.BaseUrl+'allfriends',httpOptions).pipe(map((response: Response) => response.json()));
    }

    updatefitnessdata(id: number,data){
      return this.http.put(UserService.BaseUrl + 'allfriends/' + id, data, httpOptions);
    }

    deletefitnessdata(id: number){
      return this.http.delete(UserService.BaseUrl + 'allfriends/' + id, httpOptions);
    }

    postcontactdata(data){
      return this.http.post(UserService.BaseUrl+'contact',data,httpOptions).pipe(map((response: Response) => response.json()));
    }
}