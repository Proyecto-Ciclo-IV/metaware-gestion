"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateOrConnectWithoutAvancesCreadosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateWithoutAvancesCreadosInput_1 = require("../inputs/UsuarioCreateWithoutAvancesCreadosInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateOrConnectWithoutAvancesCreadosInput = class UsuarioCreateOrConnectWithoutAvancesCreadosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateOrConnectWithoutAvancesCreadosInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAvancesCreadosInput_1.UsuarioCreateWithoutAvancesCreadosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutAvancesCreadosInput_1.UsuarioCreateWithoutAvancesCreadosInput)
], UsuarioCreateOrConnectWithoutAvancesCreadosInput.prototype, "create", void 0);
UsuarioCreateOrConnectWithoutAvancesCreadosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioCreateOrConnectWithoutAvancesCreadosInput", {
        isAbstract: true
    })
], UsuarioCreateOrConnectWithoutAvancesCreadosInput);
exports.UsuarioCreateOrConnectWithoutAvancesCreadosInput = UsuarioCreateOrConnectWithoutAvancesCreadosInput;
