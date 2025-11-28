import { Injectable, UnauthorizedException } from "@nestjs/common";
// import { LdapService } from "./ldap/ldap.service";
import { UserSession } from "./user-session/entities/user-session.entity";
import { UserSessionService } from "./user-session/user-session.service";

@Injectable()
export class AuthService {
	constructor(
		// private readonly ldapService: LdapService,
		private readonly userSessionService: UserSessionService,
	) {}

	async getSession(id: UserSession["id"]): Promise<UserSession | null> {
		return this.userSessionService.findOne(id);
	}

	// async login(
	// 	username: string,
	// 	password: string,
	// ): Promise<{ username: string; groups: string[] }> {
	// 	const authenticated = await this.ldapService.login(username, password);
	// 	if (!authenticated) {
	// 		throw new UnauthorizedException("Invalid credentials");
	// 	}
	// 	const groups = await this.ldapService.getUserGroups(username);
	// 	return { username, groups };
	// }

	// async logout(username: string): Promise<boolean> {
	// 	const authenticated = await this.ldapService.logout(username);

	// 	return true;
	// }
}
