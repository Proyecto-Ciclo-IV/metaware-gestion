"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpsertWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateWithoutAccountsInput_1 = require("../inputs/UsuarioCreateWithoutAccountsInput");
const UsuarioUpdateWithoutAccountsInput_1 = require("../inputs/UsuarioUpdateWithoutAccountsInput");
let UsuarioUpsertWithoutAccountsInput = class UsuarioUpsertWithoutAccountsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutAccountsInput_1.UsuarioUpdateWithoutAccountsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioUpdateWithoutAccountsInput_1.UsuarioUpdateWithoutAccountsInput)
], UsuarioUpsertWithoutAccountsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAccountsInput_1.UsuarioCreateWithoutAccountsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutAccountsInput_1.UsuarioCreateWithoutAccountsInput)
], UsuarioUpsertWithoutAccountsInput.prototype, "create", void 0);
UsuarioUpsertWithoutAccountsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioUpsertWithoutAccountsInput", {
        isAbstract: true
    })
], UsuarioUpsertWithoutAccountsInput);
exports.UsuarioUpsertWithoutAccountsInput = UsuarioUpsertWithoutAccountsInput;
