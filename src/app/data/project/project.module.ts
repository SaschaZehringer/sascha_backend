import { Module } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { ProjectController } from "./project.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Project } from "./entities/project.entity";
import { ProjectLink } from "./entities/project-links.entity";

@Module({
	imports: [TypeOrmModule.forFeature([Project, ProjectLink])],
	controllers: [ProjectController],
	providers: [ProjectService],
})
export class ProjectModule {}
