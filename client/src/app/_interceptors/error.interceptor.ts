import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((error) => {
      if (error) {
        switch (error.status) {
          case 400:
            if (error.error.errors) {
              const modalStateErrors = [];
              for (const key in error.error.errors) {
                if (error.error.errors[key]) {
                  modalStateErrors.push(error.error.errors[key])
                }
              }
              throw modalStateErrors.flat();
            }
            else {
              toastr.error(error.error,error.status);
            }
            break;
        
            case 401:
              toastr.error('Unauthorized request', error.status);
              break;
  
            case 403:
              toastr.error('Forbidden access', error.status);
              break;
  
            case 404:
              router.navigateByUrl('/not-found');
              //toastr.error('Resource not found', error.status);
              break;
  
          case 500:
              const navigationExtras: NavigationExtras = { state: { error: error.error } };
              router.navigateByUrl('/server-error',navigationExtras);
              //toastr.error('Server error occurred', error.status);
              break;
  
            default:
              toastr.error('An unexpected error occurred');
              break;
        }
      }
      return throwError(() => error);
    })
  );
};
