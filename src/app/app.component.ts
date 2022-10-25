import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics: string[] = ['Angular', 'React', 'Vue'];
  topicHasError: boolean = true;

  userModel: User = new User('John', 'john@gmail.com', 5555599999, '', 'morning', true);

  validateTopic(value: any): void {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
}
