import "reflect-metadata";
import { DataSource } from "typeorm";

const testDataSource = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST || "127.0.0.1",
	port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5002,
	username: process.env.DB_USER || "sascha_backend",
	password: process.env.DB_PASSWORD || "sascha_backend123!",
	database: process.env.DB_NAME || "sascha",
	synchronize: false,
	logging: true,
	ssl: false,
	entities: [],
	// Optional pool settings
	extra: {
		max: 5,
		idleTimeoutMillis: 30000,
		connectionTimeoutMillis: 2000,
	},
});

async function testConnection() {
	try {
		await testDataSource.initialize();
		console.log("Database connection successful");
		await testDataSource.destroy();
	} catch (error) {
		console.error("Database connection failed:", error);
	}
}

testConnection();
