import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Used Interceptor');

        // const modReq = req.clone({
        //     headers: req.headers.append('Hello', 'xyz'),
        //     params: req.params.set('hello', 'new')
        // })
        // console.log(modReq.headers);
        return next.handle(req);
    }

}