import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsergroupModule } from "./usergroup/usergroup.module";
// import { LdapService } from "./ldap/ldap.service";
import { UserSessionService } from "./user-session/user-session.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserSession } from "./user-session/entities/user-session.entity";

@Module({
	controllers: [AuthController],
	providers: [AuthService, UserSessionService],
	imports: [UsergroupModule, TypeOrmModule.forFeature([UserSession])],
	exports: [AuthService, UserSessionService],
})
export class AuthModule {}
