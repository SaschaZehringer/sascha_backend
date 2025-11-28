import { Module } from "@nestjs/common";
import { PersonalInfoService } from "./personal-info.service";
import { PersonalInfoController } from "./personal-info.controller";
import { PersonalInfo } from "./entities/personal-info.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contact } from "./entities/contact.entity";
import { Email } from "./entities/email.entity";
import { Summary } from "./entities/summary.entity";
import { Website } from "./entities/website.entity";

@Module({
	imports: [TypeOrmModule.forFeature([PersonalInfo, Contact, Summary, Website, Email])],
	controllers: [PersonalInfoController],
	providers: [PersonalInfoService],
})
export class PersonalInfoModule {}
