import { Test, TestingModule } from "@nestjs/testing";
import { UserSessionService } from "./user-session.service";
import { UserSessionModule } from "./user-session.module";

describe("UserSessionService", () => {
	let service: UserSessionService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [UserSessionModule],
		}).compile();

		service = module.get<UserSessionService>(UserSessionService);
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});
});
