"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateManyUsuarioInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateManyUsuarioInput_1 = require("../inputs/AccountCreateManyUsuarioInput");
let AccountCreateManyUsuarioInputEnvelope = class AccountCreateManyUsuarioInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountCreateManyUsuarioInput_1.AccountCreateManyUsuarioInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountCreateManyUsuarioInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AccountCreateManyUsuarioInputEnvelope.prototype, "skipDuplicates", void 0);
AccountCreateManyUsuarioInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountCreateManyUsuarioInputEnvelope", {
        isAbstract: true
    })
], AccountCreateManyUsuarioInputEnvelope);
exports.AccountCreateManyUsuarioInputEnvelope = AccountCreateManyUsuarioInputEnvelope;
