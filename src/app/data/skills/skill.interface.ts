import { Skill } from "./entities/skill.entity";
import { TimeUnitType } from "../../../common/types/time-unit.type";
import { SkillLevelEnum } from "src/common/enums/skill-level.enum";
import { SkillSourceType } from "src/common/types/skill-source.type";
import { SkillProject } from "./entities/skill-project.entity";

export interface ISkill {
	name: Skill["name"];
	experienceDuration: number;
	experienceTimeUnit: TimeUnitType;
	skillLevel: number;
	skillSource: Skill["skillSource"];
	skillProject: SkillProject[];
}