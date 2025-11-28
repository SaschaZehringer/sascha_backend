import { Injectable } from "@nestjs/common";
import { Education } from "src/app/data/education/entities/education.entity";
import { DataSource } from "typeorm";


@Injectable()
export class EducationSeeder {
	constructor(private readonly dataSource: DataSource) {}

	async run() {
		const repoEducation = this.dataSource.getRepository(Education);
		
		if (await repoEducation.count() > 0) {
			return;
		}

		await repoEducation.insert([
			{
				degree: "Allgemeine Informatik in Netzwerke und IT-Sicherheit",
				degreeType: "Bachelor",
				institution: "Hochschule Furtwangen University",
				institutionLocation: "Furtwangen",
				periodBegin: new Date("2015-03-01"),
				periodEnd: new Date("2021-03-01"),
			},
			{
				degree: "Fachhochschulreife in Informatik",
				degreeType: "Fachhochschulreife",
				institution: "Zeppelin-Gewerbeschule",
				institutionLocation: "Konstanz",
				periodBegin: new Date("2012-09-01"),
				periodEnd: new Date("2014-08-01"),
			},
			{
				degree: "Mittlere Reife",
				degreeType: "Mittlere Reife",
				institution: "Zeppelin-Realschule",
				institutionLocation: "Singen (Hohentwiel)",
				periodBegin: new Date("2006-09-01"),
				periodEnd: new Date("2012-08-01"),
			},
			{
				degree: "Grundschule",
				degreeType: "Grundschule",
				institution: "Nachbarschaftsgrundschule",
				institutionLocation: "Hilzingen-Riedheim",
				periodBegin: new Date("2002-09-01"),
				periodEnd: new Date("2006-08-01"),
			},
		]);
	}
}
