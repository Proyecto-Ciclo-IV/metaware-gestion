"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCreateNestedManyWithoutProyectoInput_1 = require("../inputs/AvanceCreateNestedManyWithoutProyectoInput");
const ObjetivoCreateNestedManyWithoutProyectoInput_1 = require("../inputs/ObjetivoCreateNestedManyWithoutProyectoInput");
const UserCreateNestedOneWithoutProyectosLideradosInput_1 = require("../inputs/UserCreateNestedOneWithoutProyectosLideradosInput");
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let ProyectoCreateWithoutInscripcionesInput = class ProyectoCreateWithoutInscripcionesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateWithoutInscripcionesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateWithoutInscripcionesInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateWithoutInscripcionesInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProyectoCreateWithoutInscripcionesInput.prototype, "presupuesto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ProyectoCreateWithoutInscripcionesInput.prototype, "fechaInicio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ProyectoCreateWithoutInscripcionesInput.prototype, "fechaFin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateWithoutInscripcionesInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateWithoutInscripcionesInput.prototype, "fase", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProyectosLideradosInput_1.UserCreateNestedOneWithoutProyectosLideradosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutProyectosLideradosInput_1.UserCreateNestedOneWithoutProyectosLideradosInput)
], ProyectoCreateWithoutInscripcionesInput.prototype, "lider", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoCreateNestedManyWithoutProyectoInput_1.ObjetivoCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoCreateNestedManyWithoutProyectoInput_1.ObjetivoCreateNestedManyWithoutProyectoInput)
], ProyectoCreateWithoutInscripcionesInput.prototype, "objetivos", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateNestedManyWithoutProyectoInput_1.AvanceCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateNestedManyWithoutProyectoInput_1.AvanceCreateNestedManyWithoutProyectoInput)
], ProyectoCreateWithoutInscripcionesInput.prototype, "avances", void 0);
ProyectoCreateWithoutInscripcionesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoCreateWithoutInscripcionesInput", {
        isAbstract: true
    })
], ProyectoCreateWithoutInscripcionesInput);
exports.ProyectoCreateWithoutInscripcionesInput = ProyectoCreateWithoutInscripcionesInput;
