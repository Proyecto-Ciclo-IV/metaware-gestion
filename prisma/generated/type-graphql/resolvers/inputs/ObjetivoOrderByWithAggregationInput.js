"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoCountOrderByAggregateInput_1 = require("../inputs/ObjetivoCountOrderByAggregateInput");
const ObjetivoMaxOrderByAggregateInput_1 = require("../inputs/ObjetivoMaxOrderByAggregateInput");
const ObjetivoMinOrderByAggregateInput_1 = require("../inputs/ObjetivoMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ObjetivoOrderByWithAggregationInput = class ObjetivoOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoOrderByWithAggregationInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoOrderByWithAggregationInput.prototype, "tipo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoOrderByWithAggregationInput.prototype, "proyectoId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoCountOrderByAggregateInput_1.ObjetivoCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoCountOrderByAggregateInput_1.ObjetivoCountOrderByAggregateInput)
], ObjetivoOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoMaxOrderByAggregateInput_1.ObjetivoMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoMaxOrderByAggregateInput_1.ObjetivoMaxOrderByAggregateInput)
], ObjetivoOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoMinOrderByAggregateInput_1.ObjetivoMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoMinOrderByAggregateInput_1.ObjetivoMinOrderByAggregateInput)
], ObjetivoOrderByWithAggregationInput.prototype, "_min", void 0);
ObjetivoOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoOrderByWithAggregationInput", {
        isAbstract: true
    })
], ObjetivoOrderByWithAggregationInput);
exports.ObjetivoOrderByWithAggregationInput = ObjetivoOrderByWithAggregationInput;
