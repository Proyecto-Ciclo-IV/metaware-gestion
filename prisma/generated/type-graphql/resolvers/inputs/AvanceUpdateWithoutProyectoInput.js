"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpdateWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutAvancesCreadosInput_1 = require("../inputs/UserUpdateOneRequiredWithoutAvancesCreadosInput");
let AvanceUpdateWithoutProyectoInput = class AvanceUpdateWithoutProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateWithoutProyectoInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AvanceUpdateWithoutProyectoInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateWithoutProyectoInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateWithoutProyectoInput.prototype, "observaciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAvancesCreadosInput_1.UserUpdateOneRequiredWithoutAvancesCreadosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateOneRequiredWithoutAvancesCreadosInput_1.UserUpdateOneRequiredWithoutAvancesCreadosInput)
], AvanceUpdateWithoutProyectoInput.prototype, "creadoPor", void 0);
AvanceUpdateWithoutProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceUpdateWithoutProyectoInput", {
        isAbstract: true
    })
], AvanceUpdateWithoutProyectoInput);
exports.AvanceUpdateWithoutProyectoInput = AvanceUpdateWithoutProyectoInput;
