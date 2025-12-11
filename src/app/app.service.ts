import { Injectable } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { UserSession } from "./auth/user-session/entities/user-session.entity";

@Injectable()
export class AppService {
	constructor(private readonly authService: AuthService) {
	}

	getHello(): string {
		return "index";
	}

	async getSession(id: UserSession["id"]): Promise<UserSession | null> {
		return this.authService.getSession(id);
	}

	// async login(
	// 	username: string,
	// 	password: string,
	// ): Promise<{ username: string; groups: string[] }> {
	// 	return await this.authService.login(username, password);
	// }

	// async logout(username: string): Promise<boolean> {
	// 	return await this.authService.logout(username);
	// }
}
