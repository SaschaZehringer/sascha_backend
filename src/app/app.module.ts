import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { UserSessionModule } from "./auth/user-session/user-session.module";
import { UserModule } from "./auth/user/user.module";
import { GroupModule } from "./auth/group/group.module";
import { DataSource } from "typeorm";
import { User } from "./auth/user/entities/user.entity";
import { UserSession } from "./auth/user-session/entities/user-session.entity";
import { Group } from "./auth/group/entities/group.entity";
import { UserGroup } from "./auth/usergroup/entities/user-group.entity";
import { EducationModule } from "./data/education/education.module";
import { ExperienceModule } from "./data/experience/experience.module";
import { PersonalInfoModule } from "./data/personal-info/personal-info.module";
import { ProjectModule } from "./data/project/project.module";
import { SkillsModule } from "./data/skills/skills.module";
import { PersonalInfo } from "./data/personal-info/entities/personal-info.entity";
import { Summary } from "./data/personal-info/entities/summary.entity";
import { Contact } from "./data/personal-info/entities/contact.entity";
import { Skill } from "./data/skills/entities/skill.entity";
import { Education } from "./data/education/entities/education.entity";
import { Experience } from "./data/experience/entities/experience.entity";
import { Project } from "./data/project/entities/project.entity";
import { Website } from "./data/personal-info/entities/website.entity";
import { Email } from "./data/personal-info/entities/email.entity";
import { PassportModule } from "@nestjs/passport";
import { PersonalInfoSeeder } from "src/database/seeders/personal-info.seeder";
import { ExperienceSeeder } from "src/database/seeders/experience.seeder";
import { EducationSeeder } from "src/database/seeders/education.seeder";
import { SkillSeeder } from "src/database/seeders/skill.seeder";
import { ProjectSeeder } from "src/database/seeders/project.seeder";
import { SkillProject } from "./data/skills/entities/skill-project.entity";

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRoot({
			type: "postgres",
			host: process.env.DATABASE_HOST as unknown as string,
			// ? (process.env.DATABASE_HOST as unknown as string)
			// : "localhorst"
			port: parseInt(process.env.DATABASE_PORT as unknown as string, 10),
			// ? parseInt(process.env.DATABASE_PORT, 10)
			// : 5002
			database: process.env.DATABASE_NAME as unknown as string,
			// ? (process.env.DATABASE_NAME as unknown as string)
			// : "sascha"
			username: process.env.DATABASE_USERNAME as unknown as string,
			// ? (process.env.DATABASE_USERNAME as unknown as string)
			// : "sascha_backend"
			password: process.env.DATABASE_PASSWORD as unknown as string,
			// ? (process.env.DATABASE_PASSWORD as unknown as string)
			// : "sascha_backend123!"
			entities: [
				User,
				UserSession,
				Group,
				UserGroup,
				PersonalInfo,
				Summary,
				Website,
				Email,
				Contact,
				Skill,
				SkillProject,
				Education,
				Experience,
				Project,
			],
			synchronize: true,
			logging: true,
			ssl: false,
			// Optional pool settings
			extra: {
				max: 5,
				idleTimeoutMillis: 30000,
				connectionTimeoutMillis: 2000,
			},
		}),
		PassportModule.register({ defaultStrategy: "ldap" }),
		AuthModule,
		UserSessionModule,
		UserModule,
		GroupModule,
		EducationModule,
		ExperienceModule,
		PersonalInfoModule,
		ProjectModule,
		SkillsModule,
	],
	controllers: [AppController],
	providers: [
		AppService,
		PersonalInfoSeeder,
		ExperienceSeeder,
		EducationSeeder,
		SkillSeeder,
		ProjectSeeder,
	],
	exports: [PassportModule.register({ defaultStrategy: "ldap" })],
})
export class AppModule {
	constructor(private dataSource: DataSource) {}
}
