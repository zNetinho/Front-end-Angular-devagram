import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { userDevagram } from 'src/app/shared/types/userDevagram.types';
import { DevagramUserService } from 'src/app/shared/services/devagram-user.service';
import { AuthenticationServiceService } from 'src/app/authentication/authentication-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  termSearch: string = '';
  searchResult: Array<userDevagram> = [
    {
      _id: '14501435171145',
      name: 'Neto flavio',
      email: 'teste1@123.com',
      avatar: 'https://cdn.cosmicjs.com/19458ae0-8571-11ed-a98f-051589794d26-1840618-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-grÃ¡tis-vetor.jpg'
    } as userDevagram,
    {
      _id: '171874176421684',
      name: 'Bruno thiago',
      email: 'teste2@123.com'
    } as userDevagram
  ];

  constructor(private router: Router,
              private apiUser: DevagramUserService,
              private authentication: AuthenticationServiceService) {}

  ngOnInit(): void {}

  returnToHome() {
    this.router.navigateByUrl('/');
  }

  async findingUsers(): Promise<void> {
    if(this.termSearch.length < 3) {
      return;
    }
    try {
      const userReturned = await this.apiUser.searchUsers(this.termSearch);
      console.log(userReturned)

      const userLogged = this.authentication.obtainUser()
      this.searchResult = userReturned.filter(ur => ur._id !== userLogged?.id)

    } catch (e: any) {
      if(e?.status !== 400){
        e?.error.erro || 'Erro na pesquisa';
      }
    }
  }

  goToPerfil(idUser: string): void {
    console.log({idUser})
  }

}
