import { Injectable } from "@angular/core";
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from "@angular/router";

@Injectable()
export class LoginService {

	constructor(private auth: Auth, private router: Router) { }

	token: string | null;

	login(email: string, password: string) {
		signInWithEmailAndPassword(this.auth, email, password)
			.then(
				response => {
					this.auth.currentUser?.getIdToken().then(
						token => {
							console.log(token);
							this.token = token;
							this.router.navigate(['/']);
						}
					)
				}
			)

	}

	getIdToken() {
		return this.token;
	}

	isAuthenticated() {
		return this.token != null;
	}

	logout() {
		signOut(this.auth).then(() => {
			this.token = null;
			this.router.navigate(['login'])
		}).catch(error => console.log('Error logout: ' + error));
	}
}
