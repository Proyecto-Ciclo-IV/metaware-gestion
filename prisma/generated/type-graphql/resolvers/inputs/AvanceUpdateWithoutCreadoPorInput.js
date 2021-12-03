"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpdateWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProyectoUpdateOneRequiredWithoutAvancesInput_1 = require("../inputs/ProyectoUpdateOneRequiredWithoutAvancesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let AvanceUpdateWithoutCreadoPorInput = class AvanceUpdateWithoutCreadoPorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateWithoutCreadoPorInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AvanceUpdateWithoutCreadoPorInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateWithoutCreadoPorInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateWithoutCreadoPorInput.prototype, "observaciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoUpdateOneRequiredWithoutAvancesInput_1.ProyectoUpdateOneRequiredWithoutAvancesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoUpdateOneRequiredWithoutAvancesInput_1.ProyectoUpdateOneRequiredWithoutAvancesInput)
], AvanceUpdateWithoutCreadoPorInput.prototype, "proyecto", void 0);
AvanceUpdateWithoutCreadoPorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceUpdateWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvanceUpdateWithoutCreadoPorInput);
exports.AvanceUpdateWithoutCreadoPorInput = AvanceUpdateWithoutCreadoPorInput;
