"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoCreateNestedOneWithoutObjetivosInput_1 = require("../inputs/ProyectoCreateNestedOneWithoutObjetivosInput");
const Enum_TipoObjetivo_1 = require("../../enums/Enum_TipoObjetivo");
let ObjetivoCreateInput = class ObjetivoCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoCreateInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoObjetivo_1.Enum_TipoObjetivo, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoCreateInput.prototype, "tipo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateNestedOneWithoutObjetivosInput_1.ProyectoCreateNestedOneWithoutObjetivosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateNestedOneWithoutObjetivosInput_1.ProyectoCreateNestedOneWithoutObjetivosInput)
], ObjetivoCreateInput.prototype, "proyecto", void 0);
ObjetivoCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoCreateInput", {
        isAbstract: true
    })
], ObjetivoCreateInput);
exports.ObjetivoCreateInput = ObjetivoCreateInput;
