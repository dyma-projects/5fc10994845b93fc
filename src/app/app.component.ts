import { Component } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
/*
  providers: [UserService]
  ->Si j'ai bien compris c'est inutile et c'est remplacé par
@Injectable({
  providedIn: 'root'
})
*/
export class AppComponent {
  title = 'projet5-service';
}
