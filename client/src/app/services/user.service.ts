import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    user = signal('');
    authenticated = new BehaviorSubject(false);

    setUser(user: string) {
        this.user.set(user);
        if (this.user()) this.authenticated.next(true);
    }
}