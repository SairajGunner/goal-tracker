import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goal } from '../models/goal';
import apiConfig from '../../../../apiConfig.json';

@Injectable({
  providedIn: 'root',
})
export class ShortTermGoalsService {
  endpoint: String;

  constructor(private http: HttpClient) {
    this.endpoint = `${apiConfig.api_endpoint}/short-term-goals`;
  }

  getAllShortTermGoals = (): Observable<Array<Goal>> => {
    return <Observable<Array<Goal>>>this.http.get(`${this.endpoint}/all`);
  };

  getShortTermGoalById = (id: String): Observable<Goal> => {
    return <Observable<Goal>>this.http.get(`${this.endpoint}/${id}`);
  };

  createShortTermGoal = (goal: Goal): Observable<Goal> => {
    const options = {
      headers: {
        'content-type': 'application/json',
      },
    };
    return <Observable<Goal>>(
      this.http.post(`${this.endpoint}/create`, JSON.stringify(goal), options)
    );
  };

  updateShortTermGoalById = (goal: Goal): Observable<Goal> => {
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

  deleteShortTermGoal = (id: String): Observable<Goal> => {
    return <Observable<Goal>>this.http.delete(`${this.endpoint}/delete/${id}`);
  };
}
