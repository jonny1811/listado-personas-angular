import { Injectable } from "@angular/core";
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from "@angular/router";

@Injectable()
export class LoginService {

	constructor(private auth: Auth, private router: Router) { }

	token: string;

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
}
