"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateManyLiderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let ProyectoCreateManyLiderInput = class ProyectoCreateManyLiderInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateManyLiderInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateManyLiderInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateManyLiderInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProyectoCreateManyLiderInput.prototype, "presupuesto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ProyectoCreateManyLiderInput.prototype, "fechaInicio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ProyectoCreateManyLiderInput.prototype, "fechaFin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateManyLiderInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateManyLiderInput.prototype, "fase", void 0);
ProyectoCreateManyLiderInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoCreateManyLiderInput", {
        isAbstract: true
    })
], ProyectoCreateManyLiderInput);
exports.ProyectoCreateManyLiderInput = ProyectoCreateManyLiderInput;
