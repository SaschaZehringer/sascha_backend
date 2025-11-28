import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class UserSession {
	@PrimaryGeneratedColumn()
	@ApiProperty()
	id: number;

	@ManyToOne(() => User)
	@JoinColumn({ name: "userId" })
	@ApiProperty()
	user: User;

	@Column({ type: "timestamp" })
	@ApiProperty()
	lastLogin: Date;

	@Column()
	@ApiProperty()
	ipAddress: string;
}
