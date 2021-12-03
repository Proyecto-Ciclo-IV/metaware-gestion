"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objetivo = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_TipoObjetivo_1 = require("../enums/Enum_TipoObjetivo");
let Objetivo = class Objetivo {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Objetivo.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Objetivo.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoObjetivo_1.Enum_TipoObjetivo, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Objetivo.prototype, "tipo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Objetivo.prototype, "proyectoId", void 0);
Objetivo = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Objetivo", {
        isAbstract: true
    })
], Objetivo);
exports.Objetivo = Objetivo;
