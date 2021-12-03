"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_TipoObjetivoFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_TipoObjetivo_1 = require("../../enums/Enum_TipoObjetivo");
let EnumEnum_TipoObjetivoFieldUpdateOperationsInput = class EnumEnum_TipoObjetivoFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoObjetivo_1.Enum_TipoObjetivo, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_TipoObjetivoFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_TipoObjetivoFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_TipoObjetivoFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_TipoObjetivoFieldUpdateOperationsInput);
exports.EnumEnum_TipoObjetivoFieldUpdateOperationsInput = EnumEnum_TipoObjetivoFieldUpdateOperationsInput;
