import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { userDevagram } from 'src/app/shared/types/userDevagram.types';
import { DevagramUserService } from 'src/app/shared/services/devagram-user.service';
import { AuthenticationServiceService } from '../../shared/authentication/authentication-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  termSearch: string = '';
  searchResult: Array<userDevagram> = [];

  constructor(private router: Router,
              private apiUser: DevagramUserService,
              private authentication: AuthenticationServiceService) {}

  ngOnInit(): void {}

  returnToHome() {
    this.router.navigateByUrl('/');
  }

  async findingUsers(): Promise<void> {
    if(this.termSearch.length < 2) {
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
