import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()

export class CourseGuardServices implements CanActivate {

    constructor(private authService : AuthService , private router : Router){

    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.authService.isAuthnticated()){
            return false;
        }
        else{
            this.router.navigate([''])
            return false;
        }
    }
   
   

}


