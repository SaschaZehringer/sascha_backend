import { Injectable } from "@nestjs/common";
import { CreateExperienceDto } from "./dto/create-experience.dto";
import { UpdateExperienceDto } from "./dto/update-experience.dto";
import { Experience } from "./entities/experience.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ExperienceService {
	constructor(
		@InjectRepository(Experience)
		private experienceRepo: Repository<Experience>,
	) {}

	create(createExperienceDto: CreateExperienceDto) {
		return "This action adds a new experience";
	}

	async findAll() {
		return this.experienceRepo.find({});
	}

	async findOne(id: number): Promise<Experience | null> {
		return await this.experienceRepo.findOne({
			where: {
				id: id,
			},
		});
	}

	update(id: number, updateExperienceDto: UpdateExperienceDto) {
		return `This action updates a #${id} experience`;
	}

	remove(id: number) {
		return `This action removes a #${id} experience`;
	}
}
