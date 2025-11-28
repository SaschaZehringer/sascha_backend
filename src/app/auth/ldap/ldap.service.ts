// import { Injectable, Logger } from "@nestjs/common";
// import * as ldap from "ldapjs";

// @Injectable()
// export class LdapService {
// 	private client: ldap.Client;
// 	private readonly logger = new Logger(LdapService.name);

// 	constructor() {
// 		const url = process.env.LDAP_URL || "ldap://localhost:389";
// 		this.client = (ldap.createClient({ url }) as unknown as ldap.Client);
// 	}

// 	async login(username: string, password: string): Promise<boolean> {
// 		const baseDN = process.env.LDAP_BASE_DN || "dc=example,dc=org";
// 		const userDN = `uid=${username},${baseDN}`;

// 		return new Promise((resolve) => {
// 			this.client.bind(userDN, password, (err: { message: any; }) => {
// 				if (err) {
// 					this.logger.warn(
// 						`LDAP bind failed for user ${username}: ${err.message}`,
// 					);
// 					return resolve(false);
// 				}
// 				this.logger.log(`LDAP bind successful for user ${username}`);
// 				this.client.unbind();
// 				resolve(true);
// 			});
// 		});
// 	}

// 	async logout(username: string) {}

// 	async getUserGroups(username: string): Promise<string[]> {
// 		const baseDN = process.env.LDAP_BASE_DN || "dc=example,dc=org";
// 		const opts = {
// 			filter: `(memberUid=${username})`,
// 			scope: "sub",
// 			attributes: ["cn"],
// 		};

// 		return new Promise((resolve, reject) => {
// 			const groups: string[] = [];
// 			this.client.search(`ou=groups,${baseDN}`, opts, (err: { message: any; }, res: any) => {
// 				if (err) {
// 					this.logger.error(`LDAP search error: ${err.message}`);
// 					return reject(err);
// 				}

// 				res.on("searchEntry", (entry: { object: { cn: any; }; }) => {
// 					const cn = entry.object.cn;
// 					if (cn) {
// 						groups.push(cn);
// 					}
// 				});

// 				res.on("error", (err: { message: any; }) => {
// 					this.logger.error(
// 						`LDAP search error event: ${err.message}`,
// 					);
// 					reject(err);
// 				});

// 				res.on("end", () => {
// 					resolve(groups);
// 				});
// 			});
// 		});
// 	}
// }
