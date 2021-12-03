"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_TipoObjetivo_1 = require("../../enums/Enum_TipoObjetivo");
let ObjetivoCreateManyInput = class ObjetivoCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoCreateManyInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoObjetivo_1.Enum_TipoObjetivo, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoCreateManyInput.prototype, "tipo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoCreateManyInput.prototype, "proyectoId", void 0);
ObjetivoCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoCreateManyInput", {
        isAbstract: true
    })
], ObjetivoCreateManyInput);
exports.ObjetivoCreateManyInput = ObjetivoCreateManyInput;
