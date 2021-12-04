"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutProyectosLideradosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutProyectosLideradosInput_1 = require("../inputs/UserCreateWithoutProyectosLideradosInput");
const UserUpdateWithoutProyectosLideradosInput_1 = require("../inputs/UserUpdateWithoutProyectosLideradosInput");
let UserUpsertWithoutProyectosLideradosInput = class UserUpsertWithoutProyectosLideradosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutProyectosLideradosInput_1.UserUpdateWithoutProyectosLideradosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutProyectosLideradosInput_1.UserUpdateWithoutProyectosLideradosInput)
], UserUpsertWithoutProyectosLideradosInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutProyectosLideradosInput_1.UserCreateWithoutProyectosLideradosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutProyectosLideradosInput_1.UserCreateWithoutProyectosLideradosInput)
], UserUpsertWithoutProyectosLideradosInput.prototype, "create", void 0);
UserUpsertWithoutProyectosLideradosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpsertWithoutProyectosLideradosInput", {
        isAbstract: true
    })
], UserUpsertWithoutProyectosLideradosInput);
exports.UserUpsertWithoutProyectosLideradosInput = UserUpsertWithoutProyectosLideradosInput;
