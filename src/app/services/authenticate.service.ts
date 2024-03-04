import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { environment } from '../../environments/environment';
import { DataService } from './data.service';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';

@Injectable({
    providedIn: 'root'
})
export class AuthenticateService {

    private currentUserSubject: BehaviorSubject<Customer>;
    private dashboardSubject = new BehaviorSubject<boolean>(false);
    cast = this.dashboardSubject.asObservable();
    public currentUser: Observable<Customer>;

    constructor(private http: HttpClient,
                private router: Router,
                private dataService: DataService,
                private socialAuthService: AuthService) {
        this.currentUserSubject = new BehaviorSubject<Customer>(this.dataService.getLocalStorage('currentUser'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Customer {
        this.currentUserSubject.next(this.dataService.getLocalStorage('currentUser'));
        return this.currentUserSubject.value;
    }

    public dashboardReload() {
        this.dashboardSubject.next(!this.dashboardSubject.value);
    }

    public get getToken() {
        if (this.dataService.getLocalStorage('token')) {
            return this.dataService.getLocalStorage('token').accessToken;
        } else {
            return true;
        }
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${environment.restURL}/custauth`, { email, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                if (user.success) {
                    this.dataService.setLocalStorage('currentUser', user.data);
                    this.dataService.setLocalStorage('token', { accessToken: user.accessToken, refreshToken: user.refreshToken });
                    this.currentUserSubject.next(user);
                    this.dataService.loggedCust.next(user);
                }
                return user;
            }));
    }

    socialLogin(socialPlatform: string) {
    }

    logout() {
    }
}
