import * as _ from "lodash";

import { TimeUnitType } from "../types/time-unit.type";


export class DateHelper {
	public static calcDuration(since: Date): {
		experienceDuration: number;
		experienceTimeUnit: TimeUnitType;
	} {
		let experienceDuration: number = 0;
		let experienceTimeUnit: TimeUnitType = "Month(s)";

		const duration: Date = new Date(
			Date.parse(new Date().toISOString()) -
				Date.parse(since.toISOString()),
		);

		if (duration.getFullYear() - new Date(0).getFullYear() > 0) {
			let months: number = 0;

			if (duration.getMonth() - new Date(0).getMonth() > 0) {
				months = (duration.getMonth() - new Date(0).getMonth()) / 12;
			}

			experienceDuration = _.round(
				duration.getFullYear() - new Date(0).getFullYear() + months,
				2,
			);
			experienceTimeUnit = "Year(s)";
		} else {
			experienceDuration = _.round(
				duration.getMonth() - new Date(0).getMonth(),
				2,
			);
			experienceTimeUnit = "Month(s)";
		}

		return { experienceDuration, experienceTimeUnit };
	}
}
