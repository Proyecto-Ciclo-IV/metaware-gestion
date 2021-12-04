"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceUpdateManyWithoutProyectoInput_1 = require("../inputs/AvanceUpdateManyWithoutProyectoInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_EstadoProyectoFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_EstadoProyectoFieldUpdateOperationsInput");
const EnumEnum_FaseProyectoFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_FaseProyectoFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const ObjetivoUpdateManyWithoutProyectoInput_1 = require("../inputs/ObjetivoUpdateManyWithoutProyectoInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutProyectosLideradosInput_1 = require("../inputs/UserUpdateOneRequiredWithoutProyectosLideradosInput");
let ProyectoUpdateWithoutInscripcionesInput = class ProyectoUpdateWithoutInscripcionesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "presupuesto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "fechaInicio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "fechaFin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_EstadoProyectoFieldUpdateOperationsInput_1.EnumEnum_EstadoProyectoFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_EstadoProyectoFieldUpdateOperationsInput_1.EnumEnum_EstadoProyectoFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_FaseProyectoFieldUpdateOperationsInput_1.EnumEnum_FaseProyectoFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_FaseProyectoFieldUpdateOperationsInput_1.EnumEnum_FaseProyectoFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "fase", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProyectosLideradosInput_1.UserUpdateOneRequiredWithoutProyectosLideradosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateOneRequiredWithoutProyectosLideradosInput_1.UserUpdateOneRequiredWithoutProyectosLideradosInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "lider", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoUpdateManyWithoutProyectoInput_1.ObjetivoUpdateManyWithoutProyectoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoUpdateManyWithoutProyectoInput_1.ObjetivoUpdateManyWithoutProyectoInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "objetivos", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceUpdateManyWithoutProyectoInput_1.AvanceUpdateManyWithoutProyectoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceUpdateManyWithoutProyectoInput_1.AvanceUpdateManyWithoutProyectoInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "avances", void 0);
ProyectoUpdateWithoutInscripcionesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoUpdateWithoutInscripcionesInput", {
        isAbstract: true
    })
], ProyectoUpdateWithoutInscripcionesInput);
exports.ProyectoUpdateWithoutInscripcionesInput = ProyectoUpdateWithoutInscripcionesInput;
