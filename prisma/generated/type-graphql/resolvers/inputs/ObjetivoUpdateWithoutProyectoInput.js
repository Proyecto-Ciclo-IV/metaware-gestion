"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoUpdateWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumEnum_TipoObjetivoFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_TipoObjetivoFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ObjetivoUpdateWithoutProyectoInput = class ObjetivoUpdateWithoutProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ObjetivoUpdateWithoutProyectoInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ObjetivoUpdateWithoutProyectoInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_TipoObjetivoFieldUpdateOperationsInput_1.EnumEnum_TipoObjetivoFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_TipoObjetivoFieldUpdateOperationsInput_1.EnumEnum_TipoObjetivoFieldUpdateOperationsInput)
], ObjetivoUpdateWithoutProyectoInput.prototype, "tipo", void 0);
ObjetivoUpdateWithoutProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoUpdateWithoutProyectoInput", {
        isAbstract: true
    })
], ObjetivoUpdateWithoutProyectoInput);
exports.ObjetivoUpdateWithoutProyectoInput = ObjetivoUpdateWithoutProyectoInput;
