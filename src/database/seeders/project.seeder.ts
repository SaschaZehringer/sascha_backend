import { Injectable } from "@nestjs/common";
import { Project } from "src/app/data/project/entities/project.entity";
import { SkillProject } from "src/app/data/skills/entities/skill-project.entity";
import { DataSource } from "typeorm";


@Injectable()
export class ProjectSeeder {
	constructor(private readonly dataSource: DataSource) {}

	async run() {
		const repoProject = this.dataSource.getRepository(Project);
		const repoSkillProject = this.dataSource.getRepository(SkillProject);
		
		if (await repoProject.count() > 0) {
			return;
		}
		
		if ((await repoSkillProject.count()) > 0) {
			return;
		}

		await repoProject.insert([
			{
				id: 1,
				name: "Sascha Backend",
				description: "sascha/backend",
				link: "https://forgejo.zehringer.net/sascha/backend",
			},
			{
				id: 2,
				name: "Sascha Frontend",
				description: "sascha/frontend",
				link: "https://forgejo.zehringer.net/sascha/frontend",
			},
		]);

		await repoSkillProject.insert([
			{
				skillName: "TypeScript",
				skillSource: "private",
				projectId: 1,
			},
			{
				skillName: "TypeScript",
				skillSource: "academic",
				projectId: 1,
			},
			{
				skillName: "TypeScript",
				skillSource: "professionally",
				projectId: 1,
			},
			{
				skillName: "TypeScript",
				skillSource: "private",
				projectId: 2,
			},
			{
				skillName: "TypeScript",
				skillSource: "academic",
				projectId: 2,
			},
			{
				skillName: "TypeScript",
				skillSource: "professionally",
				projectId: 2,
			},
			{
				skillName: "Angular",
				skillSource: "private",
				projectId: 2,
			},
			{
				skillName: "TypeOrm",
				skillSource: "private",
				projectId: 1,
			},
			{
				skillName: "TypeOrm",
				skillSource: "professionally",
				projectId: 1,
			},
			{
				skillName: "NestJs",
				skillSource: "private",
				projectId: 1,
			},
			{
				skillName: "NestJs",
				skillSource: "professionally",
				projectId: 1,
			},
		]);
	}
}
