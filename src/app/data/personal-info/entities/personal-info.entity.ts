import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entity";
import { Summary } from "./summary.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class PersonalInfo {
	@PrimaryGeneratedColumn()
	@ApiProperty()
	id: number;

	@Column()
	@ApiProperty()
	firstName: string;

	@Column()
	@ApiProperty()
	lastName: string;

	@Column()
	@ApiProperty()
	jobTitle: string;

	@OneToOne(() => Contact, { cascade: true })
	@JoinColumn()
	@ApiProperty()
	contact: Contact;

	@OneToMany(() => Summary, (summary) => summary.personalInfo, {
		cascade: true,
	})
	@ApiProperty()
	summary: Summary[];
}
