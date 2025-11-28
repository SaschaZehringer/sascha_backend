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
						entry: "Hallo,",
					},
					{
						id: 2,
						language: "de",
						entry: "ich bin Sascha Zehringer. Ich bin Verheiratet und habe einen Sohn. ",
					},
					{
						id: 3,
						language: "de",
						entry: "",
					},
					{
						id: 4,
						language: "de",
						entry: "Ich arbeite aktuell als Backend Software Entwickler mit den Programmiersprachen Progress ABL und TypeScript. Zusätzlich bin ich sporadisch in Devops Aufgaben involviert mit Jenkins und Bash-Skripten. ",
					},
					{
						id: 5,
						language: "de",
						entry: "Aktuell arbeite ich zu 60% im Home-Office.",
					},
					{
						id: 6,
						language: "de",
						entry: "",
					},
					{
						id: 7,
						language: "de",
						entry: "Privat interessiere ich mich für viele Technologien und Programmiersprachen.",
					},
					{
						id: 8,
						language: "de",
						entry: "Dazu zählen Technologien, wie Docker/Podman (mit Dockerfile und docker-compose) und Jenkins (mit Jenkinsfiles).",
					},
					{
						id: 9,
						language: "de",
						entry: "Programmiersprachen, die mich Privat interessieren sind folgende:",
					},
					{
						id: 10,
						language: "de",
						entry: " - Python",
					},
					{
						id: 11,
						language: "de",
						entry: " - Go",
					},
					{
						id: 12,
						language: "de",
						entry: " - TypeScript",
					},
					{
						id: 13,
						language: "de",
						entry: " - Bash-Skripts",
					},
					{
						id: 14,
						language: "de",
						entry: "",
					},
					{
						id: 15,
						language: "de",
						entry: "Ich bin auf der Suche nach einem Full Remote Job.",
					},
					{
						id: 1,
						language: "en",
						entry: "Hello,",
					},
					{
						id: 2,
						language: "en",
						entry: "I am Sascha Zehringer. I'm married and I have one son.",
					},
					{
						id: 3,
						language: "en",
						entry: "",
					},
					{
						id: 4,
						language: "en",
						entry: "Currently I work as a Backend Software Engineer using the programming languages Progress ABL and TypeScript. Additionally, sometimes I get to work on devops tasks with jenkins und bash-scripts.",
					},
					{
						id: 5,
						language: "en",
						entry: "Right now I do work 60% at home.",
					},
					{
						id: 6,
						language: "en",
						entry: "",
					},
					{
						id: 7,
						language: "en",
						entry: "Privatly I'm interested for quiet a lot of technologies and programming languages.",
					},
					{
						id: 8,
						language: "en",
						entry: "Some technologies are Docker/Podman (using dockerfiles and docker/podman-compose) and using Jenkins (jenkinsfiles).",
					},
					{
						id: 9,
						language: "en",
						entry: "Privately I'm interested into the following programming languages:",
					},
					{
						id: 10,
						language: "en",
						entry: " - Python",
					},
					{
						id: 11,
						language: "en",
						entry: " - Go",
					},
					{
						id: 12,
						language: "en",
						entry: " - TypeScript",
					},
					{
						id: 13,
						language: "en",
						entry: " - Bash-Skripts",
					},
					{
						id: 14,
						language: "en",
						entry: "",
					},
					{
						id: 15,
						language: "en",
						entry: "I am looking for a full remote job.",
					},
				],
			},
		]);

		await repoPersonalInfo.save(personalInfo);
	}
}
