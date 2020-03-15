import { Observable } from 'rxjs';
import { User } from './user';

export interface Auth {
  currentUser$: Observable<User>;
  isAuthenticated$: Observable<boolean>;
  signOut();
  signIn();
}
