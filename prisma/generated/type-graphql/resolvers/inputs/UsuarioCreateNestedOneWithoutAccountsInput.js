"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateNestedOneWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateOrConnectWithoutAccountsInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutAccountsInput");
const UsuarioCreateWithoutAccountsInput_1 = require("../inputs/UsuarioCreateWithoutAccountsInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateNestedOneWithoutAccountsInput = class UsuarioCreateNestedOneWithoutAccountsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAccountsInput_1.UsuarioCreateWithoutAccountsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutAccountsInput_1.UsuarioCreateWithoutAccountsInput)
], UsuarioCreateNestedOneWithoutAccountsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutAccountsInput_1.UsuarioCreateOrConnectWithoutAccountsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateOrConnectWithoutAccountsInput_1.UsuarioCreateOrConnectWithoutAccountsInput)
], UsuarioCreateNestedOneWithoutAccountsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateNestedOneWithoutAccountsInput.prototype, "connect", void 0);
UsuarioCreateNestedOneWithoutAccountsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioCreateNestedOneWithoutAccountsInput", {
        isAbstract: true
    })
], UsuarioCreateNestedOneWithoutAccountsInput);
exports.UsuarioCreateNestedOneWithoutAccountsInput = UsuarioCreateNestedOneWithoutAccountsInput;
