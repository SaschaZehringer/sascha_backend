import { Controller, Post, Body, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	// @Post("/login")
	// async login(@Body() body: { username: string; password: string }) {
	// 	const { username, password } = body;
	// 	try {
	// 		const result = await this.authService.login(username, password);
	// 		return { username: result.username, groups: result.groups };
	// 	} catch (error) {
	// 		throw new UnauthorizedException("Invalid credentials");
	// 	}
	// }
}
