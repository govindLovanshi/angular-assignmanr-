export class AuthService{
    loggedIn : boolean = true;

    login(){
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }

    isAuthnticated(){
        return this.loggedIn ;
    }
}