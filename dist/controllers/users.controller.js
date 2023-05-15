"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteuser = exports.updateUser = exports.postUser = exports.getUsersByParams = exports.getUserById = exports.getUsers = void 0;
const database_1 = require("../database");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows: users } = yield database_1.postegreSQL.query('SELECT * FROM users');
        res.status(200).send({ data: users, message: '', succes: true });
    }
    catch (error) {
        res.status(500).send({ data: null, message: `${error.message}`, succes: true });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows: user } = yield database_1.postegreSQL.query(`SELECT * FROM users WHERE id=${req.params.id}`);
        res.status(200).send({ data: user, message: '', succes: true });
    }
    catch (error) {
        res.status(500).send({ data: null, message: `${error.message}`, succes: true });
    }
});
exports.getUserById = getUserById;
const getUsersByParams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = Object.keys(req.query)
            .map((key) => `${key}=${req.query[key]}`)
            .join(' AND ');
        const { rows: users } = yield database_1.postegreSQL.query(`SELECT * FROM users WHERE ${params}`);
        res.status(200).send({ data: users, message: '', success: true });
    }
    catch (error) {
        res.status(500).send({ data: null, message: `${error.message}`, success: false });
    }
});
exports.getUsersByParams = getUsersByParams;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name } = req.body;
    try {
        yield database_1.postegreSQL.query(`INSERT INTO users (name, email) VALUES ($1, $2)`, [name, email]);
        res.status(200).send({ data: req.body, message: '', succes: true });
    }
    catch (error) {
        res.status(500).send({ data: null, message: `${error.message}`, succes: true });
    }
});
exports.postUser = postUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name } = req.body;
    const { id } = req.params;
    try {
        yield database_1.postegreSQL.query(`UPDATE users SET email = $1, name = $2 WHERE id =$3`, [email, name, id]);
        res.status(200).send({ data: req.body, message: '', succes: true });
    }
    catch (error) {
        res.status(500).send({ data: null, message: `${error.message}`, succes: true });
    }
});
exports.updateUser = updateUser;
const deleteuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield database_1.postegreSQL.query(`DELETE FROM users WHERE id =$1`, [id]);
        res.status(200).send({ data: req.body, message: '', succes: true });
    }
    catch (error) {
        res.status(500).send({ data: null, message: `${error.message}`, succes: true });
    }
});
exports.deleteuser = deleteuser;
