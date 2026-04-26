import {HttpInterceptorFn} from '@angular/common/http';

export const authInterceptor:HttpInterceptorFn((req,next)=>{
const token=localstorage.getItem('token');
//const token=keyclock.getToken();
const modifiedReq=res.clone({
	setHeaders:{
		Authorization:`Bearer ${token}`
	}
})
return next(modifiedReq);
})


export loaderInterceptor: HttpInterceptorFn=((req,next)=>{
    const loader=inject(loaderService);
    loader.show();
    return req.next(req).pipe(finalize()=>{
        loader.hide();
    })
})


export errorDetect:HttpInterceptorFn=((req,next)=>{

    return next(req).pipe(
        catchError((e)=>{
            cons message="Error detected...";
            if(e.status===401){
                message="Unauthorized URL...";
            } else if(e.status===404){
                message="not found URL...";
            }
            console.log(message);
            return throwError(()=>{error});
        })
    )
})




configuration in main.ts or app.config.ts

applicationBootstrap(appComponent,{
providers:[
HttpClientProvides(withInterceptor([authInterceptor,loaderInterceptor,errorDetect]))
]
}
)