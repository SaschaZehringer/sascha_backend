import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { SkillSourceType } from "src/common/types/skill-source.type";
import { SkillLevelEnum } from "src/common/enums/skill-level.enum";
import { SkillProject } from "./skill-project.entity";

@Entity()
export class Skill {
	@PrimaryColumn({ nullable: false })
	@ApiProperty()
	name: string;

	@PrimaryColumn({ nullable: false })
	@ApiProperty()
	skillSource: SkillSourceType;

	@ApiProperty()
	@Column({
		type: "date",
		transformer: {
			from: (value: string | Date): Date => {
				// value kommt so aus der DB; hier wandelst du ihn in ein JS Date-Objekt um
				return value instanceof Date ? value : new Date(value);
			},
			to: (value: Date): string => {
				// value ist das JS Date-Objekt; hier wandelst du es in das Format um,
				// das die Datenbank erwartet (YYYY-MM-DD)
				return value.toISOString().slice(0, 10);
			},
		},
	})
	experienceSince: Date;

	@Column({
		type: "enum",
		enum: SkillLevelEnum,
		default: SkillLevelEnum.S0,
	})
	@ApiProperty()
	skillLevel: SkillLevelEnum;

	@OneToMany(() => SkillProject, (skillProject) => skillProject.skill, {
		cascade: true,
	})
	skillProjects: SkillProject[];
}
