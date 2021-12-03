"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateNestedOneWithoutProyectosLideradosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateOrConnectWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutProyectosLideradosInput");
const UsuarioCreateWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioCreateWithoutProyectosLideradosInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateNestedOneWithoutProyectosLideradosInput = class UsuarioCreateNestedOneWithoutProyectosLideradosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutProyectosLideradosInput_1.UsuarioCreateWithoutProyectosLideradosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutProyectosLideradosInput_1.UsuarioCreateWithoutProyectosLideradosInput)
], UsuarioCreateNestedOneWithoutProyectosLideradosInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutProyectosLideradosInput_1.UsuarioCreateOrConnectWithoutProyectosLideradosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateOrConnectWithoutProyectosLideradosInput_1.UsuarioCreateOrConnectWithoutProyectosLideradosInput)
], UsuarioCreateNestedOneWithoutProyectosLideradosInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateNestedOneWithoutProyectosLideradosInput.prototype, "connect", void 0);
UsuarioCreateNestedOneWithoutProyectosLideradosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioCreateNestedOneWithoutProyectosLideradosInput", {
        isAbstract: true
    })
], UsuarioCreateNestedOneWithoutProyectosLideradosInput);
exports.UsuarioCreateNestedOneWithoutProyectosLideradosInput = UsuarioCreateNestedOneWithoutProyectosLideradosInput;
