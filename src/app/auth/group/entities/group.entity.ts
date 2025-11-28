import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { UserGroup } from "../../usergroup/entities/user-group.entity";

@Entity()
export class Group {
	@PrimaryGeneratedColumn()
	@ApiProperty()
	id: number;

	@Column()
	@ApiProperty()
	name: string;

	@OneToMany(() => UserGroup, (userGroup) => userGroup.group)
	@JoinColumn({ name: "userGroupId" })
	@ApiProperty()
	userGroups: UserGroup[];
}
