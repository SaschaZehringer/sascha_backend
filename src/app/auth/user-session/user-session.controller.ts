import { Controller, Get } from "@nestjs/common";
import { UserSessionService } from "./user-session.service";

@Controller("UserSession")
export class UserSessionController {
	constructor(private readonly UserSessionService: UserSessionService) {}

	@Get()
	findAll() {
		return this.UserSessionService.find();
	}
}
