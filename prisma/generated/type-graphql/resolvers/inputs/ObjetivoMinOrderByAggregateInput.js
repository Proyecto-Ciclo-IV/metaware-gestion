"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ObjetivoMinOrderByAggregateInput = class ObjetivoMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoMinOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoMinOrderByAggregateInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoMinOrderByAggregateInput.prototype, "tipo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoMinOrderByAggregateInput.prototype, "proyectoId", void 0);
ObjetivoMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoMinOrderByAggregateInput", {
        isAbstract: true
    })
], ObjetivoMinOrderByAggregateInput);
exports.ObjetivoMinOrderByAggregateInput = ObjetivoMinOrderByAggregateInput;
