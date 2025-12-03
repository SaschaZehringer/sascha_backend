import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Skill } from "./skill.entity";
import { Project } from "../../project/entities/project.entity";

@Entity()
export class SkillProject {
	@PrimaryColumn()
	@ApiProperty()
	skillName: Skill["name"];

	@PrimaryColumn()
	@ApiProperty()
	skillSource: Skill["skillSource"];

	@PrimaryColumn()
	@ApiProperty()
	projectId: Project["id"];

	@ManyToOne(() => Skill, { onDelete: "CASCADE" })
	@JoinColumn([
		{ name: "skillName", referencedColumnName: "name" },
		{ name: "skillSource", referencedColumnName: "skillSource" },
	])
	skill: Skill;

	@ManyToOne(() => Project, (project) => project.skillProjects, {
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: "projectId" })
	project: Project;
}
