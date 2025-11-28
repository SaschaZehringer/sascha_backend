import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Contact } from "./contact.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Email {
	@PrimaryGeneratedColumn()
	@ApiProperty()
	id: number;

	@Column()
	@ApiProperty()
	email: string;

	@ManyToOne(() => Contact, (contact) => contact.emails)
	@ApiProperty()
	contact: Contact;
}
