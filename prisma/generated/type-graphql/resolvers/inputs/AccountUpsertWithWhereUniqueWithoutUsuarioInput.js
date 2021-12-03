"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpsertWithWhereUniqueWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateWithoutUsuarioInput_1 = require("../inputs/AccountCreateWithoutUsuarioInput");
const AccountUpdateWithoutUsuarioInput_1 = require("../inputs/AccountUpdateWithoutUsuarioInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountUpsertWithWhereUniqueWithoutUsuarioInput = class AccountUpsertWithWhereUniqueWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], AccountUpsertWithWhereUniqueWithoutUsuarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountUpdateWithoutUsuarioInput_1.AccountUpdateWithoutUsuarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountUpdateWithoutUsuarioInput_1.AccountUpdateWithoutUsuarioInput)
], AccountUpsertWithWhereUniqueWithoutUsuarioInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateWithoutUsuarioInput_1.AccountCreateWithoutUsuarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateWithoutUsuarioInput_1.AccountCreateWithoutUsuarioInput)
], AccountUpsertWithWhereUniqueWithoutUsuarioInput.prototype, "create", void 0);
AccountUpsertWithWhereUniqueWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountUpsertWithWhereUniqueWithoutUsuarioInput", {
        isAbstract: true
    })
], AccountUpsertWithWhereUniqueWithoutUsuarioInput);
exports.AccountUpsertWithWhereUniqueWithoutUsuarioInput = AccountUpsertWithWhereUniqueWithoutUsuarioInput;
