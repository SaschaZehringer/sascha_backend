import { Injectable } from "@nestjs/common";
import { ProjectLink } from "src/app/data/project/entities/project-links.entity";
import { Project } from "src/app/data/project/entities/project.entity";
import { SkillProject } from "src/app/data/skills/entities/skill-project.entity";
import { DataSource } from "typeorm";


@Injectable()
export class ProjectSeeder {
	constructor(private readonly dataSource: DataSource) {}

	async run() {
		const repoProject = this.dataSource.getRepository(Project);
		const repoProjectLinks = this.dataSource.getRepository(ProjectLink);
		const repoSkillProject = this.dataSource.getRepository(SkillProject);
		
		if (await repoProject.count() > 0) {
			return;
		}
		
		if ((await repoSkillProject.count()) > 0) {
			return;
		}

		const projects = repoProject.create([
			{
				id: 1,
				name: "Sascha Backend",
				description: "sascha/backend",
				projectLinks: [
					{
						id: 1,
						link: "https://forgejo.zehringer.net/sascha/backend",
					},
					{
						id: 2,
						link: "https://github.com/SaschaZehringer/sascha_backend",
					}
				]
			},
			{
				id: 2,
				name: "Sascha Frontend",
				description: "sascha/frontend",
				projectLinks: [
					{
						id: 3,
						link: "https://forgejo.zehringer.net/sascha/frontend",
					},
					{
						id: 4,
						link: "https://github.com/SaschaZehringer/sascha_frontend",
					}
				]
			},
		]);

		await repoProject.save(projects);

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
