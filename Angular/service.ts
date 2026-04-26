import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
providedIn:'root'
})

export class UserService{
constructor(http:HttpClient){}
const baseUrl='www.getuserapi.com';

getUser():Observable<User[]>{
return this.http.get(this.baseUrl).pipe(retry(1).catchError(this.handleError);
}

createUser(User:User[]):Observable<User>{
return this.http.post(this.baseUrl,User).pipe(catchError(this.handleError);
}

modifiedUSer(id:number,user:User):Observable<User>{
return this.http.put(`${this.baseUrl}/${id}`,user).pipe(catchError(handleError));
}
deleteUser(id:number):Observable<User>{
return this.http.delete(`${this.baseUrl}/${id}`).pipe(catchError(handleError));
}

handleError(error:HttpErrorResponse){
const showError="something is going wrong";
if(error.error){
showError="client side error"
} else{
showError="Server side error"
}
conosle.log(showError);
}

}