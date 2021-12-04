"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateWithoutAvancesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InscripcionCreateNestedManyWithoutProyectoInput_1 = require("../inputs/InscripcionCreateNestedManyWithoutProyectoInput");
const ObjetivoCreateNestedManyWithoutProyectoInput_1 = require("../inputs/ObjetivoCreateNestedManyWithoutProyectoInput");
const UserCreateNestedOneWithoutProyectosLideradosInput_1 = require("../inputs/UserCreateNestedOneWithoutProyectosLideradosInput");
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let ProyectoCreateWithoutAvancesInput = class ProyectoCreateWithoutAvancesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateWithoutAvancesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateWithoutAvancesInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateWithoutAvancesInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProyectoCreateWithoutAvancesInput.prototype, "presupuesto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ProyectoCreateWithoutAvancesInput.prototype, "fechaInicio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ProyectoCreateWithoutAvancesInput.prototype, "fechaFin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateWithoutAvancesInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateWithoutAvancesInput.prototype, "fase", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProyectosLideradosInput_1.UserCreateNestedOneWithoutProyectosLideradosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutProyectosLideradosInput_1.UserCreateNestedOneWithoutProyectosLideradosInput)
], ProyectoCreateWithoutAvancesInput.prototype, "lider", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoCreateNestedManyWithoutProyectoInput_1.ObjetivoCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoCreateNestedManyWithoutProyectoInput_1.ObjetivoCreateNestedManyWithoutProyectoInput)
], ProyectoCreateWithoutAvancesInput.prototype, "objetivos", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionCreateNestedManyWithoutProyectoInput_1.InscripcionCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionCreateNestedManyWithoutProyectoInput_1.InscripcionCreateNestedManyWithoutProyectoInput)
], ProyectoCreateWithoutAvancesInput.prototype, "inscripciones", void 0);
ProyectoCreateWithoutAvancesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoCreateWithoutAvancesInput", {
        isAbstract: true
    })
], ProyectoCreateWithoutAvancesInput);
exports.ProyectoCreateWithoutAvancesInput = ProyectoCreateWithoutAvancesInput;
