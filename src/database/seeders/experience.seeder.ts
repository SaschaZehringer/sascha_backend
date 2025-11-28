import { Injectable } from "@nestjs/common";
import { Experience } from "src/app/data/experience/entities/experience.entity";
import { DataSource } from "typeorm";


@Injectable()
export class ExperienceSeeder {
	constructor(private readonly dataSource: DataSource) {}

	async run() {
		const repoExperience = this.dataSource.getRepository(Experience);
		
		if (await repoExperience.count() > 0) {
			return;
		}

		await repoExperience.insert([
			{
				id: 1,
				role: "Software Engineer",
				company: "Is Integrated Systems AG-Radolfzell am Bodensee",
				periodBegin: new Date("2021-04-15"),
				periodEnd: new Date("2025-12-31"),
				description: "Backend Software Engineer",
			},
		]);
	}
}
