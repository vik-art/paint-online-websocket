import { inject } from '@angular/core';
import { UserService } from '../services';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { map, take } from 'rxjs';


export const CanActivateUser: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
    return inject(UserService).authenticated.pipe(
      take(1),
      map(status => {
        console.log(status);
        return !!status;
      })
  )
}
