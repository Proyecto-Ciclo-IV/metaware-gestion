"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCreateNestedManyWithoutProyectoInput_1 = require("../inputs/AvanceCreateNestedManyWithoutProyectoInput");
const InscripcionCreateNestedManyWithoutProyectoInput_1 = require("../inputs/InscripcionCreateNestedManyWithoutProyectoInput");
const ObjetivoCreateNestedManyWithoutProyectoInput_1 = require("../inputs/ObjetivoCreateNestedManyWithoutProyectoInput");
const UsuarioCreateNestedOneWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioCreateNestedOneWithoutProyectosLideradosInput");
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let ProyectoCreateInput = class ProyectoCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProyectoCreateInput.prototype, "presupuesto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ProyectoCreateInput.prototype, "fechaInicio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ProyectoCreateInput.prototype, "fechaFin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateInput.prototype, "fase", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutProyectosLideradosInput_1.UsuarioCreateNestedOneWithoutProyectosLideradosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateNestedOneWithoutProyectosLideradosInput_1.UsuarioCreateNestedOneWithoutProyectosLideradosInput)
], ProyectoCreateInput.prototype, "lider", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoCreateNestedManyWithoutProyectoInput_1.ObjetivoCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoCreateNestedManyWithoutProyectoInput_1.ObjetivoCreateNestedManyWithoutProyectoInput)
], ProyectoCreateInput.prototype, "objetivos", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateNestedManyWithoutProyectoInput_1.AvanceCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateNestedManyWithoutProyectoInput_1.AvanceCreateNestedManyWithoutProyectoInput)
], ProyectoCreateInput.prototype, "avances", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionCreateNestedManyWithoutProyectoInput_1.InscripcionCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionCreateNestedManyWithoutProyectoInput_1.InscripcionCreateNestedManyWithoutProyectoInput)
], ProyectoCreateInput.prototype, "inscripciones", void 0);
ProyectoCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoCreateInput", {
        isAbstract: true
    })
], ProyectoCreateInput);
exports.ProyectoCreateInput = ProyectoCreateInput;
