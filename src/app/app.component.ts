import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService} from './enrollment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics: string[] = ['Angular', 'React', 'Vue'];
  topicHasError: boolean = true;
  submitted: boolean = false;
  errorMsg: string = '';

  userModel: User = new User('John', 'john@gmail.com', 5555599999, '', 'morning', true);

  constructor(private _enrollmentService: EnrollmentService) {}

  validateTopic(value: any): void {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(): void {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => this.errorMsg = error.statusText
      );
  }
}
