"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateNestedOneWithoutAvancesCreadosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateOrConnectWithoutAvancesCreadosInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutAvancesCreadosInput");
const UsuarioCreateWithoutAvancesCreadosInput_1 = require("../inputs/UsuarioCreateWithoutAvancesCreadosInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateNestedOneWithoutAvancesCreadosInput = class UsuarioCreateNestedOneWithoutAvancesCreadosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAvancesCreadosInput_1.UsuarioCreateWithoutAvancesCreadosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutAvancesCreadosInput_1.UsuarioCreateWithoutAvancesCreadosInput)
], UsuarioCreateNestedOneWithoutAvancesCreadosInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutAvancesCreadosInput_1.UsuarioCreateOrConnectWithoutAvancesCreadosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateOrConnectWithoutAvancesCreadosInput_1.UsuarioCreateOrConnectWithoutAvancesCreadosInput)
], UsuarioCreateNestedOneWithoutAvancesCreadosInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateNestedOneWithoutAvancesCreadosInput.prototype, "connect", void 0);
UsuarioCreateNestedOneWithoutAvancesCreadosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioCreateNestedOneWithoutAvancesCreadosInput", {
        isAbstract: true
    })
], UsuarioCreateNestedOneWithoutAvancesCreadosInput);
exports.UsuarioCreateNestedOneWithoutAvancesCreadosInput = UsuarioCreateNestedOneWithoutAvancesCreadosInput;
