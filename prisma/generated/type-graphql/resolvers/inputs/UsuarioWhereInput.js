"use strict";
var UsuarioWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountListRelationFilter_1 = require("../inputs/AccountListRelationFilter");
const AvanceListRelationFilter_1 = require("../inputs/AvanceListRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumEnum_EstadoUsuarioFilter_1 = require("../inputs/EnumEnum_EstadoUsuarioFilter");
const EnumEnum_RolFilter_1 = require("../inputs/EnumEnum_RolFilter");
const InscripcionListRelationFilter_1 = require("../inputs/InscripcionListRelationFilter");
const ProyectoListRelationFilter_1 = require("../inputs/ProyectoListRelationFilter");
const SessionListRelationFilter_1 = require("../inputs/SessionListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let UsuarioWhereInput = UsuarioWhereInput_1 = class UsuarioWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UsuarioWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UsuarioWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UsuarioWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UsuarioWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UsuarioWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UsuarioWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], UsuarioWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], UsuarioWhereInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], UsuarioWhereInput.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UsuarioWhereInput.prototype, "correoVerificado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], UsuarioWhereInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], UsuarioWhereInput.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_RolFilter_1.EnumEnum_RolFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_RolFilter_1.EnumEnum_RolFilter)
], UsuarioWhereInput.prototype, "rol", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_EstadoUsuarioFilter_1.EnumEnum_EstadoUsuarioFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_EstadoUsuarioFilter_1.EnumEnum_EstadoUsuarioFilter)
], UsuarioWhereInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoListRelationFilter_1.ProyectoListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoListRelationFilter_1.ProyectoListRelationFilter)
], UsuarioWhereInput.prototype, "proyectosLiderados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceListRelationFilter_1.AvanceListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceListRelationFilter_1.AvanceListRelationFilter)
], UsuarioWhereInput.prototype, "avancesCreados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionListRelationFilter_1.InscripcionListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionListRelationFilter_1.InscripcionListRelationFilter)
], UsuarioWhereInput.prototype, "inscripciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountListRelationFilter_1.AccountListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountListRelationFilter_1.AccountListRelationFilter)
], UsuarioWhereInput.prototype, "accounts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionListRelationFilter_1.SessionListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionListRelationFilter_1.SessionListRelationFilter)
], UsuarioWhereInput.prototype, "sessions", void 0);
UsuarioWhereInput = UsuarioWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioWhereInput", {
        isAbstract: true
    })
], UsuarioWhereInput);
exports.UsuarioWhereInput = UsuarioWhereInput;
