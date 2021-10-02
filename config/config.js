require('dotenv').config();
/* eslint-disable */
module.exports = {
	development: {
		url: process.env.DATABASE_URL,
		// username: '',
		// password: 'example',
		// host: 'localhost',
		// port: 5432,
		// database: 'postgres',
		dialect: 'postgres',
		models_path: './app/models',
		migrations_path: './app/migrations',
	},
	test: {
		url: 'postgresql://postgres:postgres@127.0.0.1:5432/postgres',
		// username: 'postgres',
		// password: 'example',
		// host: 'localhost',
		// port: 5432,
		// database: 'postgres',
		dialect: 'postgres',
		models_path: './app/models',
		migrations_path: './app/migrations',
	},
	production: {
		url: process.env.DATABASE_URL,
		// username: 'postgres',
		// password: 'example',
		// host: 'localhost',
		// port: 5432,
		// database: 'postgres',
		models_path: './app/models',
		migrations_path: './app/migrations',
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				rejectUnauthorized: false,
			},
		},
	},
};
