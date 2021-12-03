"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ObjetivoMaxOrderByAggregateInput = class ObjetivoMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoMaxOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoMaxOrderByAggregateInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoMaxOrderByAggregateInput.prototype, "tipo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoMaxOrderByAggregateInput.prototype, "proyectoId", void 0);
ObjetivoMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoMaxOrderByAggregateInput", {
        isAbstract: true
    })
], ObjetivoMaxOrderByAggregateInput);
exports.ObjetivoMaxOrderByAggregateInput = ObjetivoMaxOrderByAggregateInput;
