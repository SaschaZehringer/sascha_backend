import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { UserGroup } from "../../usergroup/entities/user-group.entity";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	@ApiProperty()
	id: number;

	@Column()
	@ApiProperty()
	userName: string;

	@Column()
	@ApiProperty()
	firstName: string;

	@Column()
	@ApiProperty()
	lastName: string;

	@Column({ default: true })
	@ApiProperty()
	isActive: boolean;

	@OneToMany(() => UserGroup, (userGroup) => userGroup.user)
	@JoinColumn({ name: "userGroupId" })
	@ApiProperty()
	userGroups: UserGroup[];
}
