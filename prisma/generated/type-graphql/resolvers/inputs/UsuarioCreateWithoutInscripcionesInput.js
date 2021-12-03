"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateNestedManyWithoutUsuarioInput_1 = require("../inputs/AccountCreateNestedManyWithoutUsuarioInput");
const AvanceCreateNestedManyWithoutCreadoPorInput_1 = require("../inputs/AvanceCreateNestedManyWithoutCreadoPorInput");
const ProyectoCreateNestedManyWithoutLiderInput_1 = require("../inputs/ProyectoCreateNestedManyWithoutLiderInput");
const SessionCreateNestedManyWithoutUsuarioInput_1 = require("../inputs/SessionCreateNestedManyWithoutUsuarioInput");
const Enum_EstadoUsuario_1 = require("../../enums/Enum_EstadoUsuario");
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let UsuarioCreateWithoutInscripcionesInput = class UsuarioCreateWithoutInscripcionesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCreateWithoutInscripcionesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCreateWithoutInscripcionesInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCreateWithoutInscripcionesInput.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UsuarioCreateWithoutInscripcionesInput.prototype, "correoVerificado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCreateWithoutInscripcionesInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCreateWithoutInscripcionesInput.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCreateWithoutInscripcionesInput.prototype, "rol", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_EstadoUsuario_1.Enum_EstadoUsuario, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCreateWithoutInscripcionesInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateNestedManyWithoutLiderInput_1.ProyectoCreateNestedManyWithoutLiderInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateNestedManyWithoutLiderInput_1.ProyectoCreateNestedManyWithoutLiderInput)
], UsuarioCreateWithoutInscripcionesInput.prototype, "proyectosLiderados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateNestedManyWithoutCreadoPorInput_1.AvanceCreateNestedManyWithoutCreadoPorInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateNestedManyWithoutCreadoPorInput_1.AvanceCreateNestedManyWithoutCreadoPorInput)
], UsuarioCreateWithoutInscripcionesInput.prototype, "avancesCreados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUsuarioInput_1.AccountCreateNestedManyWithoutUsuarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateNestedManyWithoutUsuarioInput_1.AccountCreateNestedManyWithoutUsuarioInput)
], UsuarioCreateWithoutInscripcionesInput.prototype, "accounts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUsuarioInput_1.SessionCreateNestedManyWithoutUsuarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionCreateNestedManyWithoutUsuarioInput_1.SessionCreateNestedManyWithoutUsuarioInput)
], UsuarioCreateWithoutInscripcionesInput.prototype, "sessions", void 0);
UsuarioCreateWithoutInscripcionesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioCreateWithoutInscripcionesInput", {
        isAbstract: true
    })
], UsuarioCreateWithoutInscripcionesInput);
exports.UsuarioCreateWithoutInscripcionesInput = UsuarioCreateWithoutInscripcionesInput;
