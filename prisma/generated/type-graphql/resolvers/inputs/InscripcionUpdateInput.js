"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_EstadoInscripcionFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_EstadoInscripcionFieldUpdateOperationsInput");
const ProyectoUpdateOneRequiredWithoutInscripcionesInput_1 = require("../inputs/ProyectoUpdateOneRequiredWithoutInscripcionesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutInscripcionesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutInscripcionesInput");
let InscripcionUpdateInput = class InscripcionUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InscripcionUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_EstadoInscripcionFieldUpdateOperationsInput_1.EnumEnum_EstadoInscripcionFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_EstadoInscripcionFieldUpdateOperationsInput_1.EnumEnum_EstadoInscripcionFieldUpdateOperationsInput)
], InscripcionUpdateInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InscripcionUpdateInput.prototype, "fechaIngreso", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InscripcionUpdateInput.prototype, "fechaEgreso", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoUpdateOneRequiredWithoutInscripcionesInput_1.ProyectoUpdateOneRequiredWithoutInscripcionesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoUpdateOneRequiredWithoutInscripcionesInput_1.ProyectoUpdateOneRequiredWithoutInscripcionesInput)
], InscripcionUpdateInput.prototype, "proyecto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutInscripcionesInput_1.UserUpdateOneRequiredWithoutInscripcionesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateOneRequiredWithoutInscripcionesInput_1.UserUpdateOneRequiredWithoutInscripcionesInput)
], InscripcionUpdateInput.prototype, "estudiante", void 0);
InscripcionUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InscripcionUpdateInput", {
        isAbstract: true
    })
], InscripcionUpdateInput);
exports.InscripcionUpdateInput = InscripcionUpdateInput;
