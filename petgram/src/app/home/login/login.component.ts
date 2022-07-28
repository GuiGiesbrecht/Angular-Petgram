import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticService } from 'src/app/authentic/authentic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authenticService: AuthenticService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authenticService.authentic(this.email, this.password).subscribe({
      next: (data) => {
        console.log('Autenticado com sucesso', data);
        this.router.navigateByUrl('/animals');
      },
      error: (err) => {
        console.log('Erro de autenticação', err);
      },
    });
  }
}
