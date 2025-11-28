import { Injectable } from "@nestjs/common";
import { Skill } from "src/app/data/skills/entities/skill.entity";
import { SkillLevelEnum } from "src/common/enums/skill-level.enum";
import { DataSource } from "typeorm";


@Injectable()
export class SkillSeeder {
	constructor(private readonly dataSource: DataSource) {}

	async run() {
		const repoSkill = this.dataSource.getRepository(Skill);
		
		if (await repoSkill.count() > 0) {
			return;
		}

		await repoSkill.insert([
			{
				name: "TypeScript",
				skillSource: "private",
				experienceSince: new Date("2019-09-01"),
				skillLevel: SkillLevelEnum.S6,
			},
			{
				name: "TypeScript",
				skillSource: "academic",
				experienceSince: new Date("2019-09-01"),
				skillLevel: SkillLevelEnum.S6,
			},
			{
				name: "TypeScript",
				skillSource: "professionally",
				experienceSince: new Date("2022-05-01"),
				skillLevel: SkillLevelEnum.S6,
			},
			{
				name: "TypeOrm",
				skillSource: "private",
				experienceSince: new Date("2022-05-01"),
				skillLevel: SkillLevelEnum.S5,
			},
			{
				name: "TypeOrm",
				skillSource: "professionally",
				experienceSince: new Date("2022-05-01"),
				skillLevel: SkillLevelEnum.S5,
			},
			{
				name: "NestJs",
				skillSource: "private",
				experienceSince: new Date("2022-05-01"),
				skillLevel: SkillLevelEnum.S5,
			},
			{
				name: "NestJs",
				skillSource: "professionally",
				experienceSince: new Date("2022-05-01"),
				skillLevel: SkillLevelEnum.S5,
			},
			{
				name: "JavaScript",
				skillSource: "academic",
				experienceSince: new Date("2019-09-01"),
				skillLevel: SkillLevelEnum.S5,
			},
			{
				name: "JavaScript",
				skillSource: "professionally",
				experienceSince: new Date("2022-05-01"),
				skillLevel: SkillLevelEnum.S5,
			},
			{
				name: "C++",
				skillSource: "academic",
				experienceSince: new Date("2015-03-01"),
				skillLevel: SkillLevelEnum.S4,
			},
			{
				name: "C++",
				skillSource: "private",
				experienceSince: new Date("2015-03-01"),
				skillLevel: SkillLevelEnum.S4,
			},
			{
				name: "Python",
				skillSource: "academic",
				experienceSince: new Date("2019-09-01"),
				skillLevel: SkillLevelEnum.S4,
			},
			{
				name: "Python",
				skillSource: "private",
				experienceSince: new Date("2019-09-01"),
				skillLevel: SkillLevelEnum.S4,
			},
			{
				name: "Linux",
				skillSource: "private",
				experienceSince: new Date("2015-03-01"),
				skillLevel: SkillLevelEnum.S7,
			},
			{
				name: "Linux",
				skillSource: "academic",
				experienceSince: new Date("2015-03-01"),
				skillLevel: SkillLevelEnum.S7,
			},
			{
				name: "Jenkins",
				skillSource: "private",
				experienceSince: new Date("2022-01-01"),
				skillLevel: SkillLevelEnum.S6,
			},
			{
				name: "Jenkins",
				skillSource: "professionally",
				experienceSince: new Date("2022-01-01"),
				skillLevel: SkillLevelEnum.S6,
			},
			{
				name: "CSS",
				skillSource: "academic",
				experienceSince: new Date("2012-09-01"),
				skillLevel: SkillLevelEnum.S4,
			},
			{
				name: "APIs",
				skillSource: "academic",
				experienceSince: new Date("2019-09-01"),
				skillLevel: SkillLevelEnum.S8,
			},
			{
				name: "APIs",
				skillSource: "professionally",
				experienceSince: new Date("2021-04-15"),
				skillLevel: SkillLevelEnum.S8,
			},
			{
				name: "Bash/Shell",
				skillSource: "private",
				experienceSince: new Date("2015-03-01"),
				skillLevel: SkillLevelEnum.S7,
			},
			{
				name: "Bash/Shell",
				skillSource: "academic",
				experienceSince: new Date("2015-03-01"),
				skillLevel: SkillLevelEnum.S7,
			},
			{
				name: "Bash/Shell",
				skillSource: "professionally",
				experienceSince: new Date("2021-04-15"),
				skillLevel: SkillLevelEnum.S7,
			},
			{
				name: "SQL",
				skillSource: "academic",
				experienceSince: new Date("2015-03-01"),
				skillLevel: SkillLevelEnum.S5,
			},
			{
				name: "SQL",
				skillSource: "professionally",
				experienceSince: new Date("2021-04-15"),
				skillLevel: SkillLevelEnum.S5,
			},
			{
				name: "Angular",
				skillSource: "private",
				experienceSince: new Date("2024-01-01"),
				skillLevel: SkillLevelEnum.S2,
			},
			{
				name: "Java",
				skillSource: "academic",
				experienceSince: new Date("2012-09-01"),
				skillLevel: SkillLevelEnum.S3,
			},
			{
				name: "Docker",
				skillSource: "private",
				experienceSince: new Date("2021-09-01"),
				skillLevel: SkillLevelEnum.S6,
			},
			{
				name: "C",
				skillSource: "academic",
				experienceSince: new Date("2015-03-01"),
				skillLevel: SkillLevelEnum.S2,
			},
			{
				name: "Progress ABL",
				skillSource: "professionally",
				experienceSince: new Date("2021-04-15"),
				skillLevel: SkillLevelEnum.S8,
			},
			{
				name: "Podman",
				skillSource: "private",
				experienceSince: new Date("2023-05-01"),
				skillLevel: SkillLevelEnum.S7,
			},
			{
				name: "Machine Learning",
				skillSource: "academic",
				experienceSince: new Date("2019-09-01"),
				skillLevel: SkillLevelEnum.S2,
			},
			{
				name: "HTML5",
				skillSource: "academic",
				experienceSince: new Date("2012-09-01"),
				skillLevel: SkillLevelEnum.S5,
			},
			{
				name: "Lua",
				skillSource: "academic",
				experienceSince: new Date("2019-09-01"),
				skillLevel: SkillLevelEnum.S3,
			},
		]);
	}
}
