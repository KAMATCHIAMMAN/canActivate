import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,UrlTree} from "@angular/router";
import {Observable} from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable()
{
    export class CourseGuardService implements CanActivate{
        constructor(private outService:AuthService ,private router: Router){}
        
    }

}

export class CourseGuardService implements CanActivate{
    canActivate(route:ActivateRouteSnapshot,state:RouterStateSnapshot):boolean{
          if(this.authService.IsAuthenticated){
            return true;
          }
          else{
                this.router.navigate([''])
                return false;
          }
    } 
}