import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Education {
	@PrimaryGeneratedColumn()
	@ApiProperty()
	id: number;

	@Column()
	@ApiProperty()
	degree: string;

	@Column()
	@ApiProperty()
	degreeType: string;

	@Column()
	@ApiProperty()
	institution: string;

	@Column()
	@ApiProperty()
	institutionLocation: string;

	@ApiProperty()
	@Column({
		type: "date",
		transformer: {
			from: (value: string | Date): Date => {
				// value kommt so aus der DB; hier wandelst du ihn in ein JS Date-Objekt um
				return value instanceof Date ? value : new Date(value);
			},
			to: (value: Date): string => {
				// value ist das JS Date-Objekt; hier wandelst du es in das Format um,
				// das die Datenbank erwartet (YYYY-MM-DD)
				return value.toISOString().slice(0, 10);
			},
		},
	})
	periodBegin: Date;

	@ApiProperty()
	@Column({
		type: "date",
		transformer: {
			from: (value: string | Date): Date => {
				// value kommt so aus der DB; hier wandelst du ihn in ein JS Date-Objekt um
				return value instanceof Date ? value : new Date(value);
			},
			to: (value: Date): string => {
				// value ist das JS Date-Objekt; hier wandelst du es in das Format um,
				// das die Datenbank erwartet (YYYY-MM-DD)
				return value.toISOString().slice(0, 10);
			},
		},
	})
	periodEnd: Date;
}
