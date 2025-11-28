import { Injectable } from "@nestjs/common";
import { CreateEducationDto } from "./dto/create-education.dto";
import { UpdateEducationDto } from "./dto/update-education.dto";
import { Education } from "./entities/education.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class EducationService {
	constructor(
		@InjectRepository(Education)
		private educationRepo: Repository<Education>,
	) {}

	create(createEducationDto: CreateEducationDto) {
		return "This action adds a new education";
	}
	
	async findAll() {
		return this.educationRepo.find({});
	}

	async findOne(id: number): Promise<Education | null> {
		return await this.educationRepo.findOne({
			where: {
				id: id
			},
		});
	}

	update(id: number, updateEducationDto: UpdateEducationDto) {
		return `This action updates a #${id} education`;
	}

	remove(id: number) {
		return `This action removes a #${id} education`;
	}
}
