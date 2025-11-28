import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserSessionService } from "./user-session.service";
import { UserSessionController } from "./user-session.controller";
import { UserSession } from "./entities/user-session.entity";
import { Group } from "../group/entities/group.entity";
import { User } from "../user/entities/user.entity";

@Module({
	imports: [TypeOrmModule.forFeature([UserSession, User, Group])],
	controllers: [UserSessionController],
	providers: [UserSessionService],
	exports: [UserSessionService],
})
export class UserSessionModule {}
