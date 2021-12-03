"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumEnum_TipoObjetivoFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_TipoObjetivoFieldUpdateOperationsInput");
const ProyectoUpdateOneRequiredWithoutObjetivosInput_1 = require("../inputs/ProyectoUpdateOneRequiredWithoutObjetivosInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ObjetivoUpdateInput = class ObjetivoUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ObjetivoUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ObjetivoUpdateInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_TipoObjetivoFieldUpdateOperationsInput_1.EnumEnum_TipoObjetivoFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_TipoObjetivoFieldUpdateOperationsInput_1.EnumEnum_TipoObjetivoFieldUpdateOperationsInput)
], ObjetivoUpdateInput.prototype, "tipo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoUpdateOneRequiredWithoutObjetivosInput_1.ProyectoUpdateOneRequiredWithoutObjetivosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoUpdateOneRequiredWithoutObjetivosInput_1.ProyectoUpdateOneRequiredWithoutObjetivosInput)
], ObjetivoUpdateInput.prototype, "proyecto", void 0);
ObjetivoUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoUpdateInput", {
        isAbstract: true
    })
], ObjetivoUpdateInput);
exports.ObjetivoUpdateInput = ObjetivoUpdateInput;
