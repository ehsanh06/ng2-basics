import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private _router: Router) {
        
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {

            // Generally there is a 404 page that is navigated to
            alert('Invalid product Id');
            
            // Start a new navigation to redirect to list page
            this._router.navigate(['/products']);

            // Abort current navigation;
            return false;
        }
        return true;
    }
}