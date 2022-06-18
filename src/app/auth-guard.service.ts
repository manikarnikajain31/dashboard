// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// //import { LocalStorageService } from 'ngx-webstorage';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuardService implements CanActivate, CanActivateChild {

//   constructor(private localStorageService: LocalStorageService) { }

//   canActivate(): boolean {
//     if (this.localStorageService.retrieve('user') && this.localStorageService.retrieve('user').valid) {
//       return true;
//     }
//     alert("not logged in");
//     //redirect to not authorized page or login page
//     return false
//   }
//   canActivateChild(): boolean {
//     if (this.localStorageService.retrieve('user') && this.localStorageService.retrieve('user').valid) {
//       return true;
//     }
//     alert("not logged in");
//     //redirect to not authorized page or login page
//     return false
//   }
// }
