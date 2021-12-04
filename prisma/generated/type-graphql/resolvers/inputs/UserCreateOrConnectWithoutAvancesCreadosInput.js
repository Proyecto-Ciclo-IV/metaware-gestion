"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutAvancesCreadosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutAvancesCreadosInput_1 = require("../inputs/UserCreateWithoutAvancesCreadosInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutAvancesCreadosInput = class UserCreateOrConnectWithoutAvancesCreadosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutAvancesCreadosInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAvancesCreadosInput_1.UserCreateWithoutAvancesCreadosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAvancesCreadosInput_1.UserCreateWithoutAvancesCreadosInput)
], UserCreateOrConnectWithoutAvancesCreadosInput.prototype, "create", void 0);
UserCreateOrConnectWithoutAvancesCreadosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutAvancesCreadosInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutAvancesCreadosInput);
exports.UserCreateOrConnectWithoutAvancesCreadosInput = UserCreateOrConnectWithoutAvancesCreadosInput;
