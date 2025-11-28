import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { SkillsService } from "./skills.service";
import { CreateSkillDto } from "./dto/create-skill.dto";
import { UpdateSkillDto } from "./dto/update-skill.dto";

@Controller("skills")
export class SkillsController {
	constructor(private readonly skillsService: SkillsService) {}

	@Post()
	create(@Body() createSkillDto: CreateSkillDto) {
		return this.skillsService.create(createSkillDto);
	}

	@Get()
	findAll() {
		return this.skillsService.findAll();
	}

	@Get(":name")
	findOne(@Param("name") name: string) {
		return this.skillsService.findOne(name);
	}

	@Patch(":name")
	update(@Param("name") name: string, @Body() updateSkillDto: UpdateSkillDto) {
		return this.skillsService.update(name, updateSkillDto);
	}

	@Delete(":name")
	remove(@Param("name") name: string) {
		return this.skillsService.remove(name);
	}
}
