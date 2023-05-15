"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postegreSQL = void 0;
const pg_1 = require("pg");
exports.postegreSQL = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'admin',
    database: 'restapits',
    port: 5432,
});
