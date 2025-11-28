import {
	Body,
	Controller,
	Get,
	Post,
	Req,
	UnauthorizedException,
	UseGuards,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { UserSession } from "./auth/user-session/entities/user-session.entity";
import { AuthGuard } from "@nestjs/passport";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Get("session")
	async getSession(id: UserSession["id"]): Promise<UserSession | null> {
		return this.appService.getSession(id);
	}

	@UseGuards(AuthGuard("ldap"))
	@Post("ldap")
	ldapLogin(@Req() req) {
		// passport.authenticate('ldap', { session: false });
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
		return req.user;
	}

	// @Post("login")
	// async login(@Body() body: { username: string; password: string }) {
	// 	const { username, password } = body;
	// 	try {
	// 		const result = await this.appService.login(username, password);
	// 		return { username: result.username, groups: result.groups };
	// 	} catch (error) {
	// 		throw new UnauthorizedException("Invalid credentials");
	// 	}
	// }

	// @Post("logout")
	// async logout(@Body() body: { username: string }) {
	// 	const { username } = body;
	// 	try {
	// 		return await this.appService.logout(username);
	// 	} catch (error) {
	// 		throw new UnauthorizedException("Invalid credentials");
	// 	}
	// }

	// @Post("test")
	// async login(
	// 	username: string,
	// 	password: string,
	// ): Promise<{ username: string; groups: string[] }> {
	// 	return await this.appService.login(username, password);
	// }
}
