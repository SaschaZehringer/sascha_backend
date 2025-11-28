import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { LdapService } from "./ldap/ldap.service";

describe("AuthService", () => {
	let service: AuthService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [AuthService, LdapService],
		}).compile();

		service = module.get<AuthService>(AuthService);
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});
});
