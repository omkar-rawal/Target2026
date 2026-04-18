import {Pipe ,PipeTransform} from '@angular/core';

@Pipe({
    name:'checkRole',
    standalone:true
})

//print only whatever role propvide
export class GetUserRole implements PipeTransform {
transform(data:any[],role:string): string { 
    if(!data || !role) return data;
    return data.filter((item)=>item.role===role);
}
}

@if(users?.length){
    @for(user of users | checkRole:'admin';track user.id){
        <span>{{user.name}}--{{user.role}}</span>
    } @empty {
        <span>User not found</span>
    }
}
///////////////////////////////////////////////////////////
//Trancate sting testtestetstetets...

shortDescription
export class TrancateString implements PipeTransform{
    transform(value:string,limit:number): string{
        return value > limit ? value.substring(0,limit).toLocaleLowerCase+'...': value;
    }
}

@if(description){
<div>{{description|shortDescription:25}}
} @empty {
    <div>No description found</div>
}
///////////////////////////////////////////////////////////
////////True false based set Yes/Node
'booleanYesNo'
transform(value:boolean):string{
    return value?'Yes':'No';
}

<p>{{isActive | booleanYesNo}}</p>

///////////////////////////////////////////////////////////
transform()