import { NestFactory } from "@nestjs/core";
// import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { WinstonModule } from "nest-winston";
import * as winston from "winston";
import { AppModule } from "./app/app.module";
import { LogLevel } from "./common/enums/log-level.enum";
// import * as passport from "passport";
// import { DataSource } from "typeorm";
import { PersonalInfoSeeder } from "./database/seeders/personal-info.seeder";
import { ExperienceSeeder } from "./database/seeders/experience.seeder";
import { EducationSeeder } from "./database/seeders/education.seeder";
import { SkillSeeder } from "./database/seeders/skill.seeder";
import { ProjectSeeder } from "./database/seeders/project.seeder";

async function bootstrap() {
	const today: string = new Date(Date.now()).toISOString().split("T")[0];
	const logLevel = LogLevel[parseInt(process.env.LOGGING_LEVEL as unknown as string, 10)];
	console.log(`logLevel = ${logLevel}`);

	console.log("process.env.DATABASE_HOST = " + process.env.DATABASE_HOST);
	console.log("process.env.DATABASE_PORT = " + process.env.DATABASE_PORT);
	console.log("process.env.DATABASE_NAME = " + process.env.DATABASE_NAME);
	console.log("process.env.DATABASE_USERNAME = " + process.env.DATABASE_USERNAME);
	console.log("process.env.DATABASE_PASSWORD = *********") ; // + process.env.DATABASE_PASSWORD);
	console.log("process.env.APP_USERNAME = " + process.env.APP_USERNAME);
	console.log("process.env.APP_PASSWORD = *********") ; // + process.env.APP_PASSWORD);
	console.log("process.env.APP_PORT = " + process.env.APP_PORT);
	console.log("process.env.LOGGING_LEVEL = " + process.env.LOGGING_LEVEL);

	const appOptions = {
		cors: true,
		logger: WinstonModule.createLogger({
			transports: [
				new winston.transports.Console({
					level: (logLevel).toLowerCase(),
					handleExceptions: true,
				}),
				new winston.transports.File({
					filename: "logs/combined.log",
					level: "info",
					handleExceptions: true,
				}),
				new winston.transports.File({
					filename: `logs/combined-${today}.log`,
					level: "info",
					handleExceptions: true,
				}),
				new winston.transports.File({
					filename: `logs/errors-${today}.log`,
					level: "error",
				}),
			],
			exceptionHandlers: [
				new winston.transports.File({
					filename: "logs/exceptions.log",
				}),
			],
			format: winston.format.combine(
				winston.format.timestamp({
					format: "YYYY-MM-DDTHH:mm:ss",
				}),
				winston.format.printf(
					(error: winston.Logform.TransformableInfo) => {
						const timestamp = error.timestamp as string;
						const context = error.context as string;
						const message = error.message as string;
						const errorLevel = error.level.toUpperCase();
						return `[${errorLevel}] ${timestamp} [${context}]: ${message}`;
					},
				),
			),
		}),
	};
	const app = await NestFactory.create(AppModule, appOptions);

	// seeding
	const personalInfoSeeder = app.get(PersonalInfoSeeder);
	await personalInfoSeeder.run();
	const experienceSeeder = app.get(ExperienceSeeder);
	await experienceSeeder.run();
	const educationSeeder = app.get(EducationSeeder);
	await educationSeeder.run();
	const skillSeeder = app.get(SkillSeeder);
	await skillSeeder.run();
	const projectSeeder = app.get(ProjectSeeder);
	await projectSeeder.run();

	// app.use(passport.initialize());

	// const options = new DocumentBuilder()
	// 	.setTitle("SaschaBackend")
	// 	.setDescription("SaschaBackend")
	// 	.setVersion("1.0")
	// 	.addBearerAuth()
	// 	.build();
	// const document = SwaggerModule.createDocument(app, options);
	// SwaggerModule.setup("docs/api", app, document, {
	// 	explorer: true,
	// 	swaggerOptions: {
	// 		docExpansion: "list",
	// 		filter: true,
	// 		showRequestDuration: true,
	// 		showExtensions: true,
	// 		defaultModelsExpandDepth: 3,
	// 		defaultModelExpandDepth: 3,
	// 		displayRequestDuration: true,
	// 		tagsSorter: "alpha",
	// 		operationsSorter: "alpha",
	// 		deepLinking: true,
	// 		displayOperationId: false,
	// 		exampleValuesPropagate: true,
	// 		expanded: true,
	// 	},
	// });

	await app.listen(process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 3000);
}

void bootstrap();
