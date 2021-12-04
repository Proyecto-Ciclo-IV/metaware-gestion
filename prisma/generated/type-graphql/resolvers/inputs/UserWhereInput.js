"use strict";
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountListRelationFilter_1 = require("../inputs/AccountListRelationFilter");
const AvanceListRelationFilter_1 = require("../inputs/AvanceListRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumEnum_EstadoUserFilter_1 = require("../inputs/EnumEnum_EstadoUserFilter");
const EnumEnum_RolFilter_1 = require("../inputs/EnumEnum_RolFilter");
const InscripcionListRelationFilter_1 = require("../inputs/InscripcionListRelationFilter");
const ProyectoListRelationFilter_1 = require("../inputs/ProyectoListRelationFilter");
const SessionListRelationFilter_1 = require("../inputs/SessionListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UserWhereInput.prototype, "emailVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_RolFilter_1.EnumEnum_RolFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_RolFilter_1.EnumEnum_RolFilter)
], UserWhereInput.prototype, "rol", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_EstadoUserFilter_1.EnumEnum_EstadoUserFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_EstadoUserFilter_1.EnumEnum_EstadoUserFilter)
], UserWhereInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoListRelationFilter_1.ProyectoListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoListRelationFilter_1.ProyectoListRelationFilter)
], UserWhereInput.prototype, "proyectosLiderados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceListRelationFilter_1.AvanceListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceListRelationFilter_1.AvanceListRelationFilter)
], UserWhereInput.prototype, "avancesCreados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionListRelationFilter_1.InscripcionListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionListRelationFilter_1.InscripcionListRelationFilter)
], UserWhereInput.prototype, "inscripciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountListRelationFilter_1.AccountListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountListRelationFilter_1.AccountListRelationFilter)
], UserWhereInput.prototype, "accounts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionListRelationFilter_1.SessionListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionListRelationFilter_1.SessionListRelationFilter)
], UserWhereInput.prototype, "sessions", void 0);
UserWhereInput = UserWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserWhereInput", {
        isAbstract: true
    })
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
