"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProyectoUpdateOneRequiredWithoutAvancesInput_1 = require("../inputs/ProyectoUpdateOneRequiredWithoutAvancesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UsuarioUpdateOneRequiredWithoutAvancesCreadosInput_1 = require("../inputs/UsuarioUpdateOneRequiredWithoutAvancesCreadosInput");
let AvanceUpdateInput = class AvanceUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AvanceUpdateInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateInput.prototype, "observaciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoUpdateOneRequiredWithoutAvancesInput_1.ProyectoUpdateOneRequiredWithoutAvancesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoUpdateOneRequiredWithoutAvancesInput_1.ProyectoUpdateOneRequiredWithoutAvancesInput)
], AvanceUpdateInput.prototype, "proyecto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutAvancesCreadosInput_1.UsuarioUpdateOneRequiredWithoutAvancesCreadosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioUpdateOneRequiredWithoutAvancesCreadosInput_1.UsuarioUpdateOneRequiredWithoutAvancesCreadosInput)
], AvanceUpdateInput.prototype, "creadoPor", void 0);
AvanceUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceUpdateInput", {
        isAbstract: true
    })
], AvanceUpdateInput);
exports.AvanceUpdateInput = AvanceUpdateInput;
