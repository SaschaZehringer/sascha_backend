import { Injectable } from "@nestjs/common";
import { CreateSkillDto } from "./dto/create-skill.dto";
import { UpdateSkillDto } from "./dto/update-skill.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Skill } from "./entities/skill.entity";
import { Repository } from "typeorm";
import { ISkill } from "./skill.interface";
import { DateHelper } from "src/common/helper/date.helper";
import { SkillProject } from "./entities/skill-project.entity";

@Injectable()
export class SkillsService {
	constructor(
		@InjectRepository(Skill)
		private skillRepo: Repository<Skill>
	) {}

	create(createSkillDto: CreateSkillDto) {
		return "This action adds a new skill";
	}

	async findAll(): Promise<ISkill[] | null> {
		const retSkills: ISkill[] = [];
		const skillsDB: Skill[] = await this.skillRepo.find({
			relations: {
				skillProjects: {
					project: {
						projectLinks: true
					}
				},
			},
			order: {
				name: "ASC"
			}
		});

		for (const skill of skillsDB) {
			const { experienceDuration, experienceTimeUnit } = DateHelper.calcDuration(new Date(skill.experienceSince));

			const tmp: ISkill = {
				name: skill.name,
				skillLevel: Number.parseInt(skill.skillLevel) + 1,
				skillSource: skill.skillSource,
				experienceDuration: experienceDuration,
				experienceTimeUnit: experienceTimeUnit,
				skillProject: skill.skillProjects,
			};

			retSkills.push(tmp);
		}

		return retSkills;
	}

	async findOne(name: string): Promise<ISkill | null> {
		const skillDB: Skill | null = await this.skillRepo.findOne({
			where: {
				name: name,
			},
			relations: {
				skillProjects: {
					project: {
						projectLinks: true
					},
				},
			},
		});
		const { experienceDuration, experienceTimeUnit } =
			DateHelper.calcDuration(
				new Date((skillDB as unknown as Skill).experienceSince),
			);

		const retSkill: ISkill = {
			...(skillDB as unknown as Skill),
			skillLevel:
				Number.parseInt((skillDB as unknown as Skill).skillLevel) + 1,
			experienceDuration: experienceDuration,
			experienceTimeUnit: experienceTimeUnit,
			skillProject: (skillDB as unknown as Skill).skillProjects,
		};

		return retSkill;
	}

	update(name: string, updateSkillDto: UpdateSkillDto) {
		return `This action updates a #${name} skill`;
	}

	remove(name: string) {
		return `This action removes a #${name} skill`;
	}
}
