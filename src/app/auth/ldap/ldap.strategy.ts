 
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
 
import * as Strategy from "passport-ldapauth";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class LdapStrategy extends PassportStrategy(Strategy, "ldap") {
	validate(...args: any[]): unknown {
		throw new Error("Method not implemented.");
	}
	constructor() {
		super(
			{
				passReqToCallback: true,
				server: {
					url: "ldap://ldap.forumsys.com:389",
					bindDN: "cn=read-only-admin,dc=example,dc=com",
					bindCredentials: "password",
					searchBase: "dc=example,dc=com",
					searchFilter: "(uid={{username}})",
				},
			},
			(req: Request, user: any, done) => {
				req.user = user;
				return done(null, user);
			},
		);
	}
}

// Example POST:
// curl --request POST \
//   --url http://localhost:3000/ldap \
//   --header 'Content-Type: application/json' \
//   --data '{
// 	"username": "gauss",
// 	"password": "password"
// }'
//
// ==============================================
//
// Example response:
// {
// 	"dn": "uid=gauss,dc=example,dc=com",
// 	"controls": [],
// 	"objectClass": [
// 		"inetOrgPerson",
// 		"organizationalPerson",
// 		"person",
// 		"top"
// 	],
// 	"cn": "Carl Friedrich Gauss",
// 	"sn": "Gauss",
// 	"uid": "gauss",
// 	"mail": "gauss@ldap.forumsys.com"
// }
