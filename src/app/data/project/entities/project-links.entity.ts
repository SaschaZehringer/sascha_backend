import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Project } from "./project.entity";

@Entity()
export class ProjectLink {
	@PrimaryGeneratedColumn()
	@ApiProperty()
	id: number;

	@Column()
	@ApiProperty()
	link: string;
	
	@ManyToOne(() => Project, (project) => project.projectLinks)
	@ApiProperty()
	project: Project;
}


