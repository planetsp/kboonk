import { Component } from '@angular/core';
import {MainModule} from './main/main.module';
import {UserService} from './authentication/user.service';
import {SharedModule} from './shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kboonk';
  constructor(public user: UserService){}
}
