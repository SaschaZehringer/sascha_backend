import { Injectable } from "@nestjs/common";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Project } from "./entities/project.entity";

@Injectable()
export class ProjectService {
	constructor(
		@InjectRepository(Project)
		private projectRepo: Repository<Project>,
	) {}

	create(createProjectDto: CreateProjectDto) {
		return "This action adds a new project";
	}
	
	async findAll() {
		return this.projectRepo.find({
			relations: {
				skillProjects: {
					project: true
				},
			},
		});
	}

	async findOne(id: number): Promise<Project | null> {
		return await this.projectRepo.findOne({
			where: {
				id: id,
			},
			relations: {
				skillProjects: {
					project: true,
				},
			},
		});
	}

	update(id: number, updateProjectDto: UpdateProjectDto) {
		return `This action updates a #${id} project`;
	}

	remove(id: number) {
		return `This action removes a #${id} project`;
	}
}
