"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateNestedManyWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateManyUsuarioInputEnvelope_1 = require("../inputs/AccountCreateManyUsuarioInputEnvelope");
const AccountCreateOrConnectWithoutUsuarioInput_1 = require("../inputs/AccountCreateOrConnectWithoutUsuarioInput");
const AccountCreateWithoutUsuarioInput_1 = require("../inputs/AccountCreateWithoutUsuarioInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountCreateNestedManyWithoutUsuarioInput = class AccountCreateNestedManyWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountCreateWithoutUsuarioInput_1.AccountCreateWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountCreateNestedManyWithoutUsuarioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountCreateOrConnectWithoutUsuarioInput_1.AccountCreateOrConnectWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountCreateNestedManyWithoutUsuarioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateManyUsuarioInputEnvelope_1.AccountCreateManyUsuarioInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateManyUsuarioInputEnvelope_1.AccountCreateManyUsuarioInputEnvelope)
], AccountCreateNestedManyWithoutUsuarioInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountCreateNestedManyWithoutUsuarioInput.prototype, "connect", void 0);
AccountCreateNestedManyWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountCreateNestedManyWithoutUsuarioInput", {
        isAbstract: true
    })
], AccountCreateNestedManyWithoutUsuarioInput);
exports.AccountCreateNestedManyWithoutUsuarioInput = AccountCreateNestedManyWithoutUsuarioInput;
