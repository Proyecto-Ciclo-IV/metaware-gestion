"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateOrConnectWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateWithoutAccountsInput_1 = require("../inputs/UsuarioCreateWithoutAccountsInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateOrConnectWithoutAccountsInput = class UsuarioCreateOrConnectWithoutAccountsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateOrConnectWithoutAccountsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAccountsInput_1.UsuarioCreateWithoutAccountsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutAccountsInput_1.UsuarioCreateWithoutAccountsInput)
], UsuarioCreateOrConnectWithoutAccountsInput.prototype, "create", void 0);
UsuarioCreateOrConnectWithoutAccountsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioCreateOrConnectWithoutAccountsInput", {
        isAbstract: true
    })
], UsuarioCreateOrConnectWithoutAccountsInput);
exports.UsuarioCreateOrConnectWithoutAccountsInput = UsuarioCreateOrConnectWithoutAccountsInput;
