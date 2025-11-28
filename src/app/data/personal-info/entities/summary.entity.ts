import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { PersonalInfo } from "./personal-info.entity";
import { ApiProperty } from "@nestjs/swagger";
import { LanguageType } from "src/common/types/lanuage.type";

@Entity()
export class Summary {
	@PrimaryColumn()
	@ApiProperty()
	id: number;

	@PrimaryColumn()
	@ApiProperty()
	language: LanguageType;

	@Column()
	@ApiProperty()
	entry: string;

	@ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.summary)
	@ApiProperty()
	personalInfo: PersonalInfo;
}
