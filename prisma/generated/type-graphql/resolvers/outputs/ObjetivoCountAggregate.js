"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ObjetivoCountAggregate = class ObjetivoCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ObjetivoCountAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ObjetivoCountAggregate.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ObjetivoCountAggregate.prototype, "tipo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ObjetivoCountAggregate.prototype, "proyectoId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ObjetivoCountAggregate.prototype, "_all", void 0);
ObjetivoCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ObjetivoCountAggregate", {
        isAbstract: true
    })
], ObjetivoCountAggregate);
exports.ObjetivoCountAggregate = ObjetivoCountAggregate;
