import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Email } from "./email.entity";
import { Website } from "./website.entity";
import { PersonalInfo } from "./personal-info.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Contact {
	@PrimaryGeneratedColumn()
	@ApiProperty()
	id: number;

	@OneToMany(() => Email, (email) => email.contact, { cascade: true })
	@ApiProperty()
	emails: Email[];

	@Column()
	@ApiProperty()
	country: string;

	@Column()
	@ApiProperty()
	city: string;

	@OneToMany(() => Website, (website) => website.contact, { cascade: true })
	@ApiProperty()
	websites: Website[];

	@OneToOne(() => PersonalInfo)
	@ApiProperty()
	personalInfo?: PersonalInfo;
}
