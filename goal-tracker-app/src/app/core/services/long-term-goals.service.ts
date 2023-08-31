import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from '../models/goal';
import apiConfig from '../../../../apiConfig.json';

@Injectable({
  providedIn: 'root',
})
export class LongTermGoalsService {
  endpoint: String;

  constructor(private http: HttpClient) {
    this.endpoint = `${apiConfig.api_endpoint}/long-term-goals`;
  }

  getAllLongTermGoals = (): Observable<Array<Goal>> => {
    return <Observable<Array<Goal>>>this.http.get(`${this.endpoint}/all`);
  };

  getMidTermGoalById = (id: String): Observable<Goal> => {
    return <Observable<Goal>>this.http.get(`${this.endpoint}/${id}`);
  };

  createMidTermGoal = (goal: Goal): Observable<Goal> => {
    const options = {
      headers: {
        'content-type': 'application/json',
      },
    };
    return <Observable<Goal>>(
      this.http.post(`${this.endpoint}/create`, JSON.stringify(goal), options)
    );
  };

  updateMidTermGoalById = (goal: Goal): Observable<Goal> => {
    const options = {
      headers: {
        'content-type': 'application/json',
      },
    };
    return <Observable<Goal>>(
      this.http.put(
        `${this.endpoint}/update/${goal._id}`,
        JSON.stringify(goal),
        options
      )
    );
  };

  deleteMidTermGoal = (id: String): Observable<Goal> => {
    return <Observable<Goal>>this.http.delete(`${this.endpoint}/delete/${id}`);
  };
}
