import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { SkillProject } from "../../skills/entities/skill-project.entity";
import { ProjectLink } from "./project-links.entity";

@Entity()
export class Project {
	@PrimaryGeneratedColumn()
	@ApiProperty()
	id: number;

	@Column()
	@ApiProperty()
	name: string;

	@Column()
	@ApiProperty()
	description: string;

	@OneToMany(() => ProjectLink, (projectLink) => projectLink.project, {
		cascade: true,
	})
	@ApiProperty()
	projectLinks: ProjectLink[];

	@OneToMany(() => SkillProject, (skillProject) => skillProject.project, {
		cascade: true,
	})
	@ApiProperty()
	skillProjects: SkillProject[];
}


