"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceUpdateManyWithoutCreadoPorInput_1 = require("../inputs/AvanceUpdateManyWithoutCreadoPorInput");
const EnumEnum_EstadoUsuarioFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_EstadoUsuarioFieldUpdateOperationsInput");
const EnumEnum_RolFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_RolFieldUpdateOperationsInput");
const InscripcionUpdateManyWithoutEstudianteInput_1 = require("../inputs/InscripcionUpdateManyWithoutEstudianteInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProyectoUpdateManyWithoutLiderInput_1 = require("../inputs/ProyectoUpdateManyWithoutLiderInput");
const SessionUpdateManyWithoutUsuarioInput_1 = require("../inputs/SessionUpdateManyWithoutUsuarioInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UsuarioUpdateWithoutAccountsInput = class UsuarioUpdateWithoutAccountsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutAccountsInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutAccountsInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutAccountsInput.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UsuarioUpdateWithoutAccountsInput.prototype, "correoVerificado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutAccountsInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutAccountsInput.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput)
], UsuarioUpdateWithoutAccountsInput.prototype, "rol", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_EstadoUsuarioFieldUpdateOperationsInput_1.EnumEnum_EstadoUsuarioFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_EstadoUsuarioFieldUpdateOperationsInput_1.EnumEnum_EstadoUsuarioFieldUpdateOperationsInput)
], UsuarioUpdateWithoutAccountsInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoUpdateManyWithoutLiderInput_1.ProyectoUpdateManyWithoutLiderInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoUpdateManyWithoutLiderInput_1.ProyectoUpdateManyWithoutLiderInput)
], UsuarioUpdateWithoutAccountsInput.prototype, "proyectosLiderados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceUpdateManyWithoutCreadoPorInput_1.AvanceUpdateManyWithoutCreadoPorInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceUpdateManyWithoutCreadoPorInput_1.AvanceUpdateManyWithoutCreadoPorInput)
], UsuarioUpdateWithoutAccountsInput.prototype, "avancesCreados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionUpdateManyWithoutEstudianteInput_1.InscripcionUpdateManyWithoutEstudianteInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionUpdateManyWithoutEstudianteInput_1.InscripcionUpdateManyWithoutEstudianteInput)
], UsuarioUpdateWithoutAccountsInput.prototype, "inscripciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUsuarioInput_1.SessionUpdateManyWithoutUsuarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionUpdateManyWithoutUsuarioInput_1.SessionUpdateManyWithoutUsuarioInput)
], UsuarioUpdateWithoutAccountsInput.prototype, "sessions", void 0);
UsuarioUpdateWithoutAccountsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioUpdateWithoutAccountsInput", {
        isAbstract: true
    })
], UsuarioUpdateWithoutAccountsInput);
exports.UsuarioUpdateWithoutAccountsInput = UsuarioUpdateWithoutAccountsInput;
