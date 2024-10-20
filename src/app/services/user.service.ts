import { Injectable } from "@angular/core";
import { UserModel } from "../../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private static instance: UserService
    
    constructor(){

    }

    public static getInstance() {
        if (this.instance == null)
            this.instance = new UserService
        return this.instance
    }


    private retriveAllUsers(): UserModel[] {
        let json = localStorage.getItem('users')
        if (json == null) {
            const defaultUser = {
                email: 'pavle.bajic.22@singimail.rs',
                name: 'Pavle Bajic',
                password: 'password',
                booked: [1, 2]
            }
            localStorage.setItem('users', JSON.stringify([defaultUser]))
            json = localStorage.getItem('users')
        }
        return JSON.parse(json!)
    }
    public createUser(model: UserModel) {
        const arr = this.retriveAllUsers()
        if (arr.find(user => user.email === model.email))
            throw new Error('EMAIL_ALREADY_EXISTS')

        arr.push(model)
        localStorage.setItem('users', JSON.stringify(arr))
    }

    public login(email: string, password: string) {
        const arr = this.retriveAllUsers()
        const usr = arr.find(user => user.email == email && user.password == password)

        if (usr == undefined)
            throw new Error('LOGIN_FAILED')

        sessionStorage.setItem('active', usr.email)
    }

    public getCurrentUser() {
        if (!sessionStorage.getItem('active'))
            throw new Error('NO_ACTIVE_USER');
        const email = sessionStorage.getItem('active')
        const arr = this.retriveAllUsers()
        const usr = arr.find(user => user.email == email)

        if (usr == undefined)
            throw new Error('NO_ACTIVE_USER')
        return usr
    }
    public hasCurrentUser() {
        return sessionStorage.getItem('active') ? true : false
    }

    public changePassword(password: string) {
        const active = this.getCurrentUser()
        active.password = password

        var all = this.retriveAllUsers()
        for (let i = 0; i < all.length; i++) {
            if (all[i].email == active.email) {
                all[i].password = password
            }
        }
        localStorage.setItem('users', JSON.stringify(all))
    }

    public logout() {
        const usr = this.getCurrentUser()
        sessionStorage.removeItem('active')
    }




}