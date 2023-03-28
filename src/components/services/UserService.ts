import axios from 'axios';
import {IUser} from "../models/IUser";

export class UserService{
    private static serverUrl:string = `https://jsonplaceholder.typicode.com`;

    public static getAllUsers():Promise<{data : IUser[]}>{
        let dataUrl:string = `${this.serverUrl}/userscv`;
        return axios.get(dataUrl);
    }
}