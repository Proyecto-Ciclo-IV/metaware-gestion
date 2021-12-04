"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutAvancesCreadosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutAvancesCreadosInput_1 = require("../inputs/UserCreateOrConnectWithoutAvancesCreadosInput");
const UserCreateWithoutAvancesCreadosInput_1 = require("../inputs/UserCreateWithoutAvancesCreadosInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutAvancesCreadosInput = class UserCreateNestedOneWithoutAvancesCreadosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAvancesCreadosInput_1.UserCreateWithoutAvancesCreadosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAvancesCreadosInput_1.UserCreateWithoutAvancesCreadosInput)
], UserCreateNestedOneWithoutAvancesCreadosInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAvancesCreadosInput_1.UserCreateOrConnectWithoutAvancesCreadosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutAvancesCreadosInput_1.UserCreateOrConnectWithoutAvancesCreadosInput)
], UserCreateNestedOneWithoutAvancesCreadosInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutAvancesCreadosInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutAvancesCreadosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutAvancesCreadosInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutAvancesCreadosInput);
exports.UserCreateNestedOneWithoutAvancesCreadosInput = UserCreateNestedOneWithoutAvancesCreadosInput;
