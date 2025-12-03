import { Injectable } from "@nestjs/common";
import { Contact } from "src/app/data/personal-info/entities/contact.entity";
import { Email } from "src/app/data/personal-info/entities/email.entity";
import { PersonalInfo } from "src/app/data/personal-info/entities/personal-info.entity";
import { Summary } from "src/app/data/personal-info/entities/summary.entity";
import { Website } from "src/app/data/personal-info/entities/website.entity";
import { DataSource } from "typeorm";


@Injectable()
export class PersonalInfoSeeder {
	constructor(private readonly dataSource: DataSource) {}

	async run() {
		const repoPersonalInfo = this.dataSource.getRepository(PersonalInfo);
		const repoContact = this.dataSource.getRepository(Contact);
		const repoEmail = this.dataSource.getRepository(Email);
		const repoWebsite = this.dataSource.getRepository(Website);
		const repoSummary = this.dataSource.getRepository(Summary);
		
		if (await repoPersonalInfo.count() > 0) {
			return;
		}
		
		if (await repoContact.count() > 0) {
			return;
		}
		
		if (await repoEmail.count() > 0) {
			return;
		}
		
		if (await repoWebsite.count() > 0) {
			return;
		}
				
		if ((await repoSummary.count()) > 0) {
			return;
		}
		
		const personalInfo = repoPersonalInfo.create([
			{
				firstName: "Sascha",
				lastName: "Zehringer",
				jobTitle: "Backend Software Engineer",
				contact: {
					emails: [
						{
							email: "sascha.zehringer@gmail.com",
						},
						{
							email: "sascha.zehringer@zehringer.net",
						},
						{
							email: "zehringer@zehringer.net",
						},
					],
					country: "Germany",
					city: "Aach",
					websites: [
						{
							website: "sascha.zehringer.net",
						},
						{
							website: "sascha.demo.zehringer.net",
						},
					],
				},
				summary: [
					{
						id: 1,
						language: "de",
						entry: "Backend Software Entwickler mit 4+ Jahren Berufserfahrung mit Programmiersprachen wie Progress ABL, TypeScript, Python, Lua.",
					},
					{
						id: 2,
						language: "de",
						entry: "Erfahrungen in der Entwicklung und Wartung von APIs, Datenbankstrukturen sowie CI/CD-Workflows.",
					},
					{
						id: 3,
						language: "de",
						entry: "Routiniert im Umgang mit Linux, Containersystemen, Git, Visual Studio Code und Skripting (Bash).",
					},
					{
						id: 4,
						language: "de",
						entry: "Lernorientiert, technologieoffen und mit breitem technischem Verständnis durch vielfältige private Projekte (u.a. TypeScript, Bash-Skripte, Angular, Docker/Podman, Jenkins, Python, Automationen).",
					},
					{
						id: 5,
						language: "de",
						entry: "Aktuell auf der Suche nach einer Remote-Position im Bereich (Backend) Software Entwicklung oder DevOps-Unterstützung.",
					},
					{
						id: 1,
						language: "en",
						entry: "Backend Software Developer with 4+ years professional experiience working with programming languages such as Progress ABL, TypeScript, Python, Lua.",
					},
					{
						id: 2,
						language: "en",
						entry: "Experienced in developing and maintaining APIs, database structures as well as CI/CD workflows.",
					},
					{
						id: 3,
						language: "en",
						entry: "Proficient in working with Linux, containers, git, vscode and bash-scripting.",
					},
					{
						id: 4,
						language: "en",
						entry: "Open to new technologies, learning-oriented and equipped with broad technical understanding gained through a variety of personal projects (including TypeScript, Bash scripts, Angular, Docker/Podman, Jenkins, Python, automations).",
					},
					{
						id: 5,
						language: "en",
						entry: "Currently seeking for a fully remote position in (backend) software development or DevOps development.",
					},
				],
			},
		]);

		await repoPersonalInfo.save(personalInfo);
	}
}
