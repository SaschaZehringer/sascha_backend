import { Injectable } from "@nestjs/common";
import { CreatePersonalInfoDto } from "./dto/create-personal-info.dto";
import { UpdatePersonalInfoDto } from "./dto/update-personal-info.dto";
import { PersonalInfo } from "./entities/personal-info.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LanguageType } from "src/common/types/lanuage.type";

@Injectable()
export class PersonalInfoService {
	constructor(
		@InjectRepository(PersonalInfo)
		private personalInfoRepo: Repository<PersonalInfo>,
	) {}

	create(createPersonalInfoDto: CreatePersonalInfoDto) {
		return "This action adds a new personalInfo";
	}
	
	async findAll() {
		return this.personalInfoRepo.find({
			relations: {
				contact: true,
				summary: true,
			},
		});
	}

	async findOne(id: number, language: LanguageType = "de"): Promise<PersonalInfo | null> {
		return await this.personalInfoRepo.findOne({
			relations: {
				contact: {
					emails: true,
					websites: true,
				},
				summary: true,
			},
			where: {
				id: id,
				summary: { language: language },
			},
		});
	}

	update(id: number, updatePersonalInfoDto: UpdatePersonalInfoDto) {
		return `This action updates a #${id} personalInfo`;
	}

	remove(id: number) {
		return `This action removes a #${id} personalInfo`;
	}
}
