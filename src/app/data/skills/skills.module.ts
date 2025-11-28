import { Module } from "@nestjs/common";
import { SkillsService } from "./skills.service";
import { SkillsController } from "./skills.controller";
import { Skill } from "./entities/skill.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SkillProject } from "./entities/skill-project.entity";

@Module({
	imports: [TypeOrmModule.forFeature([Skill, SkillProject])],
	controllers: [SkillsController],
	providers: [SkillsService],
})
export class SkillsModule {}
