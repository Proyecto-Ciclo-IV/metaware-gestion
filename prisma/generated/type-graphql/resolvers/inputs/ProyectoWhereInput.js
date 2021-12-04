"use strict";
var ProyectoWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceListRelationFilter_1 = require("../inputs/AvanceListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumEnum_EstadoProyectoFilter_1 = require("../inputs/EnumEnum_EstadoProyectoFilter");
const EnumEnum_FaseProyectoFilter_1 = require("../inputs/EnumEnum_FaseProyectoFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const InscripcionListRelationFilter_1 = require("../inputs/InscripcionListRelationFilter");
const ObjetivoListRelationFilter_1 = require("../inputs/ObjetivoListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ProyectoWhereInput = ProyectoWhereInput_1 = class ProyectoWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProyectoWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProyectoWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProyectoWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ProyectoWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ProyectoWhereInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ProyectoWhereInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", FloatFilter_1.FloatFilter)
], ProyectoWhereInput.prototype, "presupuesto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], ProyectoWhereInput.prototype, "fechaInicio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], ProyectoWhereInput.prototype, "fechaFin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserRelationFilter_1.UserRelationFilter)
], ProyectoWhereInput.prototype, "lider", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ProyectoWhereInput.prototype, "UserId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_EstadoProyectoFilter_1.EnumEnum_EstadoProyectoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_EstadoProyectoFilter_1.EnumEnum_EstadoProyectoFilter)
], ProyectoWhereInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_FaseProyectoFilter_1.EnumEnum_FaseProyectoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_FaseProyectoFilter_1.EnumEnum_FaseProyectoFilter)
], ProyectoWhereInput.prototype, "fase", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoListRelationFilter_1.ObjetivoListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoListRelationFilter_1.ObjetivoListRelationFilter)
], ProyectoWhereInput.prototype, "objetivos", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceListRelationFilter_1.AvanceListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceListRelationFilter_1.AvanceListRelationFilter)
], ProyectoWhereInput.prototype, "avances", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionListRelationFilter_1.InscripcionListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionListRelationFilter_1.InscripcionListRelationFilter)
], ProyectoWhereInput.prototype, "inscripciones", void 0);
ProyectoWhereInput = ProyectoWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoWhereInput", {
        isAbstract: true
    })
], ProyectoWhereInput);
exports.ProyectoWhereInput = ProyectoWhereInput;
