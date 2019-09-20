import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PinterestService {

  constructor(
    private http: HttpClient,
  ) { }

  private env = environment;

  private accessCode: string = '';
  private accessToken : string = '';

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
          //this.router.navigate(['/']);
        },
        error => {
          console.error('ERRO DE TOKEN');
          console.error(error);
          //this.router.navigate(['/login']);
        }
      );
    
  }  

}
