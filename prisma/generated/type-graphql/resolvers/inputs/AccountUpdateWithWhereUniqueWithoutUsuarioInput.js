"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateWithWhereUniqueWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountUpdateWithoutUsuarioInput_1 = require("../inputs/AccountUpdateWithoutUsuarioInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountUpdateWithWhereUniqueWithoutUsuarioInput = class AccountUpdateWithWhereUniqueWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], AccountUpdateWithWhereUniqueWithoutUsuarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountUpdateWithoutUsuarioInput_1.AccountUpdateWithoutUsuarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountUpdateWithoutUsuarioInput_1.AccountUpdateWithoutUsuarioInput)
], AccountUpdateWithWhereUniqueWithoutUsuarioInput.prototype, "data", void 0);
AccountUpdateWithWhereUniqueWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountUpdateWithWhereUniqueWithoutUsuarioInput", {
        isAbstract: true
    })
], AccountUpdateWithWhereUniqueWithoutUsuarioInput);
exports.AccountUpdateWithWhereUniqueWithoutUsuarioInput = AccountUpdateWithWhereUniqueWithoutUsuarioInput;
