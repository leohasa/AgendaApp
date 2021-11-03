import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Rol } from "../model/rol";
import { UsuarioService } from "../service/usuario.service";

@Injectable()
export class AccessGuard implements CanActivate {

    constructor(private router: Router, private service: UsuarioService) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const requiresLogin = route.data.requiresLogin || false;
        const requiredRol = route.data.requiredRol;
        if (requiresLogin) {
            if (!localStorage.getItem('user')) {
                this.router.navigate(['/login']);
            } else {
                const username: String = localStorage.getItem('user') ?? '';
                let roles: Rol[] = new Array();
                this.service.getRols(username)
                    .subscribe(data => {
                        roles = data;
                        const rol = roles.find(r => r.tipo == requiredRol);
                        if (!rol) {
                            this.router.navigate(['']);
                        }
                    });

            }
        }
        return true;
    }
}
