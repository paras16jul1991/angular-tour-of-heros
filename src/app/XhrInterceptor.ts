import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { HttpHandler} from '@angular/common/http';
import { HttpRequest} from '@angular/common/http';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}