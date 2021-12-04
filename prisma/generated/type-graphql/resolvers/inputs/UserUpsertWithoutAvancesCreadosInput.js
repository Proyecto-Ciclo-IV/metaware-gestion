"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutAvancesCreadosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutAvancesCreadosInput_1 = require("../inputs/UserCreateWithoutAvancesCreadosInput");
const UserUpdateWithoutAvancesCreadosInput_1 = require("../inputs/UserUpdateWithoutAvancesCreadosInput");
let UserUpsertWithoutAvancesCreadosInput = class UserUpsertWithoutAvancesCreadosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutAvancesCreadosInput_1.UserUpdateWithoutAvancesCreadosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutAvancesCreadosInput_1.UserUpdateWithoutAvancesCreadosInput)
], UserUpsertWithoutAvancesCreadosInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAvancesCreadosInput_1.UserCreateWithoutAvancesCreadosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAvancesCreadosInput_1.UserCreateWithoutAvancesCreadosInput)
], UserUpsertWithoutAvancesCreadosInput.prototype, "create", void 0);
UserUpsertWithoutAvancesCreadosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpsertWithoutAvancesCreadosInput", {
        isAbstract: true
    })
], UserUpsertWithoutAvancesCreadosInput);
exports.UserUpsertWithoutAvancesCreadosInput = UserUpsertWithoutAvancesCreadosInput;
