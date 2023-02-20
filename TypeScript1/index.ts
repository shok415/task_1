import {usersArray} from "./users";
import {usersInfoArray} from "./userInfo"; 

interface IUsersArray{
    userid?: string,
    name?: string,
    gender?: string
}


interface IUsersInfoArray {
    userid?: string,
    name?: string,
    gender?: string,
    birthdate?: Date,
    age?: number,
    organization?:{
        name:string,
        position:string
    }

}


class UsersData implements IUsersArray, IUsersInfoArray{
    constructor(
    public name?: string, 
    public userid?: string, 
    public gender?: string, 
    public birthdate?: Date,
    public age?: number,
    public position?: string){}
    
}


function getUsersJobPositions(usersArray:any, usersInfoArray: any){
    var result=[];
    for (var i=0; i<usersArray.length; i++){
        var data1: IUsersArray = usersArray[i];
        var data2: IUsersInfoArray = usersInfoArray[i];       
        var NewData: UsersData ={
            name: data1.name,
            position: data2.organization?.position,
            age: data2.age,
            gender: data1.gender
        }
        result.push(NewData);
    }
    return result;
}


console.log(getUsersJobPositions(usersArray,usersInfoArray));