"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateWithoutObjetivosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCreateNestedManyWithoutProyectoInput_1 = require("../inputs/AvanceCreateNestedManyWithoutProyectoInput");
const InscripcionCreateNestedManyWithoutProyectoInput_1 = require("../inputs/InscripcionCreateNestedManyWithoutProyectoInput");
const UserCreateNestedOneWithoutProyectosLideradosInput_1 = require("../inputs/UserCreateNestedOneWithoutProyectosLideradosInput");
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let ProyectoCreateWithoutObjetivosInput = class ProyectoCreateWithoutObjetivosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateWithoutObjetivosInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateWithoutObjetivosInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateWithoutObjetivosInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProyectoCreateWithoutObjetivosInput.prototype, "presupuesto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ProyectoCreateWithoutObjetivosInput.prototype, "fechaInicio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ProyectoCreateWithoutObjetivosInput.prototype, "fechaFin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateWithoutObjetivosInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoCreateWithoutObjetivosInput.prototype, "fase", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProyectosLideradosInput_1.UserCreateNestedOneWithoutProyectosLideradosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutProyectosLideradosInput_1.UserCreateNestedOneWithoutProyectosLideradosInput)
], ProyectoCreateWithoutObjetivosInput.prototype, "lider", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateNestedManyWithoutProyectoInput_1.AvanceCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateNestedManyWithoutProyectoInput_1.AvanceCreateNestedManyWithoutProyectoInput)
], ProyectoCreateWithoutObjetivosInput.prototype, "avances", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionCreateNestedManyWithoutProyectoInput_1.InscripcionCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionCreateNestedManyWithoutProyectoInput_1.InscripcionCreateNestedManyWithoutProyectoInput)
], ProyectoCreateWithoutObjetivosInput.prototype, "inscripciones", void 0);
ProyectoCreateWithoutObjetivosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoCreateWithoutObjetivosInput", {
        isAbstract: true
    })
], ProyectoCreateWithoutObjetivosInput);
exports.ProyectoCreateWithoutObjetivosInput = ProyectoCreateWithoutObjetivosInput;
