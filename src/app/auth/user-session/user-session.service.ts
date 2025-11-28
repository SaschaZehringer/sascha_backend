import { Injectable } from "@nestjs/common";
import { UserSession } from "./entities/user-session.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserSessionDto } from "./dto/create-user-session.dto";
import { UpdateUserSessionDto } from "./dto/update-user-session.dto";

@Injectable()
export class UserSessionService {
	constructor(
		@InjectRepository(UserSession)
		private userSessionRepo: Repository<UserSession>,
	) {}

	create(createUserSessionDto: CreateUserSessionDto) {
		return "This action adds a new UserSession";
	}

	async find(): Promise<UserSession[]> {
		return await this.userSessionRepo.find();
	}

	async findOne(id: number): Promise<UserSession | null> {
		return await this.userSessionRepo.findOne({
			where: {
				id: id,
			},
		});
	}

	update(id: number, updateUserSessionDto: UpdateUserSessionDto) {
		return `This action updates a #${id} UserSession`;
	}

	remove(id: number) {
		return `This action removes a #${id} UserSession`;
	}
}
