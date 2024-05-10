import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    user = '';
    authenticated = new BehaviorSubject(false);

    setUser(user: string) {
        if (!user) return;
        this.user = user;
    }
}