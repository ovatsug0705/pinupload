import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PinterestService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private env = environment;

  private accessCode: string = '';
  private accessToken : string = '';
  private loggedInUser : any;

  initLogin() {

    const params = new HttpParams()
      .set('response_type', 'code')
      .set('client_id', this.env.clientId)
      .set('scope', 'read_public,write_public')
      .set('redirect_uri', this.env.redirectUri);

    // Redireciona para o site do Pinterest para fazer login
    window.location.href = this.env.authUrl + '?' + params.toString();

  }

  setAccessCode(accessCode: string) {
    this.accessCode = accessCode;
    this.getAccessToken();    
  }

  getLoggedInUser() {
    const endPoint = 'me/';
    const params = new HttpParams()
      .set('access_token', this.accessToken)
      .set('fields', 'id,username,first_name,last_name,bio,image');

      this.http.get(this.env.apiUri + endPoint, {params: params}).subscribe (
        user => {
          this.loggedInUser = user;
          console.log(user);
          this.router.navigate(['user']);
        },
        error => {
          console.error(error);
        }
      );
  }

  getUser() {
    return this.loggedInUser;
  }

  private getAccessToken() {
    const params = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('client_id', this.env.clientId)
      .set('client_secret', this.env.clientSecret)
      .set('code', this.accessCode);

      this.http.post(this.env.tokenUri, null, {params: params}).subscribe(
        res => {
          console.log('--TOKEN--');
          this.accessToken = res['access_token'];
          console.log(this.accessToken);
          this.getLoggedInUser();
          //this.router.navigate(['/']);
        },
        error => {
          console.error('ERRO DE TOKEN');
          console.error(error);
          //this.router.navigate(['/login']);
        }
      );
    
  }
  
  logOff() {
    this.accessCode = '';
    this.accessToken = '';
    this.router.navigate(['login']);
  }

}
