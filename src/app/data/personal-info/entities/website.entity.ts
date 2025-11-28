import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Contact } from "./contact.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Website {
	@PrimaryGeneratedColumn()
	@ApiProperty()
	id: number;

	@Column()
	@ApiProperty()
	website: string;

	@ManyToOne(() => Contact, (contact) => contact.websites)
	@ApiProperty()
	contact: Contact;
}
