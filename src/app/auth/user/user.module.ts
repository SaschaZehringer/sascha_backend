import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { User } from "./entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserGroup } from "../usergroup/entities/user-group.entity";

@Module({
	imports: [TypeOrmModule.forFeature([User, UserGroup])],
	controllers: [UserController],
	providers: [UserService],
})
export class UserModule {}
