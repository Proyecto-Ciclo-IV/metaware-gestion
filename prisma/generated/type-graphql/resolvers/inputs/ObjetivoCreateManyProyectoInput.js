"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoCreateManyProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_TipoObjetivo_1 = require("../../enums/Enum_TipoObjetivo");
let ObjetivoCreateManyProyectoInput = class ObjetivoCreateManyProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoCreateManyProyectoInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoCreateManyProyectoInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoObjetivo_1.Enum_TipoObjetivo, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoCreateManyProyectoInput.prototype, "tipo", void 0);
ObjetivoCreateManyProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoCreateManyProyectoInput", {
        isAbstract: true
    })
], ObjetivoCreateManyProyectoInput);
exports.ObjetivoCreateManyProyectoInput = ObjetivoCreateManyProyectoInput;
