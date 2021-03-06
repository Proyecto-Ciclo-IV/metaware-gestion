"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumEnum_TipoObjetivoFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_TipoObjetivoFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ObjetivoUpdateManyMutationInput = class ObjetivoUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ObjetivoUpdateManyMutationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ObjetivoUpdateManyMutationInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_TipoObjetivoFieldUpdateOperationsInput_1.EnumEnum_TipoObjetivoFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_TipoObjetivoFieldUpdateOperationsInput_1.EnumEnum_TipoObjetivoFieldUpdateOperationsInput)
], ObjetivoUpdateManyMutationInput.prototype, "tipo", void 0);
ObjetivoUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoUpdateManyMutationInput", {
        isAbstract: true
    })
], ObjetivoUpdateManyMutationInput);
exports.ObjetivoUpdateManyMutationInput = ObjetivoUpdateManyMutationInput;
