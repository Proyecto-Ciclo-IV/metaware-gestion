"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateOrConnectWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateWithoutUsuarioInput_1 = require("../inputs/AccountCreateWithoutUsuarioInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountCreateOrConnectWithoutUsuarioInput = class AccountCreateOrConnectWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], AccountCreateOrConnectWithoutUsuarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateWithoutUsuarioInput_1.AccountCreateWithoutUsuarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateWithoutUsuarioInput_1.AccountCreateWithoutUsuarioInput)
], AccountCreateOrConnectWithoutUsuarioInput.prototype, "create", void 0);
AccountCreateOrConnectWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountCreateOrConnectWithoutUsuarioInput", {
        isAbstract: true
    })
], AccountCreateOrConnectWithoutUsuarioInput);
exports.AccountCreateOrConnectWithoutUsuarioInput = AccountCreateOrConnectWithoutUsuarioInput;
