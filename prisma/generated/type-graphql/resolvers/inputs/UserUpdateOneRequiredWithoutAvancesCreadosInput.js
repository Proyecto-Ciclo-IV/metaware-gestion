"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutAvancesCreadosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutAvancesCreadosInput_1 = require("../inputs/UserCreateOrConnectWithoutAvancesCreadosInput");
const UserCreateWithoutAvancesCreadosInput_1 = require("../inputs/UserCreateWithoutAvancesCreadosInput");
const UserUpdateWithoutAvancesCreadosInput_1 = require("../inputs/UserUpdateWithoutAvancesCreadosInput");
const UserUpsertWithoutAvancesCreadosInput_1 = require("../inputs/UserUpsertWithoutAvancesCreadosInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutAvancesCreadosInput = class UserUpdateOneRequiredWithoutAvancesCreadosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAvancesCreadosInput_1.UserCreateWithoutAvancesCreadosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAvancesCreadosInput_1.UserCreateWithoutAvancesCreadosInput)
], UserUpdateOneRequiredWithoutAvancesCreadosInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAvancesCreadosInput_1.UserCreateOrConnectWithoutAvancesCreadosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutAvancesCreadosInput_1.UserCreateOrConnectWithoutAvancesCreadosInput)
], UserUpdateOneRequiredWithoutAvancesCreadosInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpsertWithoutAvancesCreadosInput_1.UserUpsertWithoutAvancesCreadosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpsertWithoutAvancesCreadosInput_1.UserUpsertWithoutAvancesCreadosInput)
], UserUpdateOneRequiredWithoutAvancesCreadosInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutAvancesCreadosInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutAvancesCreadosInput_1.UserUpdateWithoutAvancesCreadosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutAvancesCreadosInput_1.UserUpdateWithoutAvancesCreadosInput)
], UserUpdateOneRequiredWithoutAvancesCreadosInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutAvancesCreadosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutAvancesCreadosInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutAvancesCreadosInput);
exports.UserUpdateOneRequiredWithoutAvancesCreadosInput = UserUpdateOneRequiredWithoutAvancesCreadosInput;
