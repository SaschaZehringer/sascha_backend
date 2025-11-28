import { Test, TestingModule } from "@nestjs/testing";
import { UserSessionController } from "./user-session.controller";
import { UserSessionService } from "./user-session.service";
import { UserSessionModule } from "./user-session.module";

describe("UserSessionController", () => {
	let controller: UserSessionController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [UserSessionModule],
			controllers: [UserSessionController],
		}).compile();

		controller = module.get<UserSessionController>(UserSessionController);
	});

	it("should be defined", () => {
		expect(controller).toBeDefined();
	});
});
