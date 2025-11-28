import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { SkillProject } from "../../skills/entities/skill-project.entity";

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

	@Column()
	@ApiProperty()
	link: string;
	
	@OneToMany(() => SkillProject, (skillProject) => skillProject.project, {
		cascade: true,
	})
	@ApiProperty()
	skillProjects: SkillProject[];
}


