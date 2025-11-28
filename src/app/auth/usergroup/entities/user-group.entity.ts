import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../user/entities/user.entity";
import { Group } from "../../group/entities/group.entity";

@Entity()
export class UserGroup {
	@PrimaryGeneratedColumn()
	@ApiProperty()
	id: number;

	@ManyToOne(() => User)
	@JoinColumn({ name: "userId" })
	@ApiProperty()
	user: User;

	@ManyToOne(() => Group)
	@JoinColumn({ name: "groupId" })
	@ApiProperty()
	group: Group;
}
