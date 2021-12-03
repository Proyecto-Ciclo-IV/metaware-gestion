"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateManyWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateManyUsuarioInputEnvelope_1 = require("../inputs/AccountCreateManyUsuarioInputEnvelope");
const AccountCreateOrConnectWithoutUsuarioInput_1 = require("../inputs/AccountCreateOrConnectWithoutUsuarioInput");
const AccountCreateWithoutUsuarioInput_1 = require("../inputs/AccountCreateWithoutUsuarioInput");
const AccountScalarWhereInput_1 = require("../inputs/AccountScalarWhereInput");
const AccountUpdateManyWithWhereWithoutUsuarioInput_1 = require("../inputs/AccountUpdateManyWithWhereWithoutUsuarioInput");
const AccountUpdateWithWhereUniqueWithoutUsuarioInput_1 = require("../inputs/AccountUpdateWithWhereUniqueWithoutUsuarioInput");
const AccountUpsertWithWhereUniqueWithoutUsuarioInput_1 = require("../inputs/AccountUpsertWithWhereUniqueWithoutUsuarioInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountUpdateManyWithoutUsuarioInput = class AccountUpdateManyWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountCreateWithoutUsuarioInput_1.AccountCreateWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutUsuarioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountCreateOrConnectWithoutUsuarioInput_1.AccountCreateOrConnectWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutUsuarioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountUpsertWithWhereUniqueWithoutUsuarioInput_1.AccountUpsertWithWhereUniqueWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutUsuarioInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateManyUsuarioInputEnvelope_1.AccountCreateManyUsuarioInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateManyUsuarioInputEnvelope_1.AccountCreateManyUsuarioInputEnvelope)
], AccountUpdateManyWithoutUsuarioInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutUsuarioInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutUsuarioInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutUsuarioInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutUsuarioInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountUpdateWithWhereUniqueWithoutUsuarioInput_1.AccountUpdateWithWhereUniqueWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutUsuarioInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountUpdateManyWithWhereWithoutUsuarioInput_1.AccountUpdateManyWithWhereWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutUsuarioInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountScalarWhereInput_1.AccountScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutUsuarioInput.prototype, "deleteMany", void 0);
AccountUpdateManyWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountUpdateManyWithoutUsuarioInput", {
        isAbstract: true
    })
], AccountUpdateManyWithoutUsuarioInput);
exports.AccountUpdateManyWithoutUsuarioInput = AccountUpdateManyWithoutUsuarioInput;
