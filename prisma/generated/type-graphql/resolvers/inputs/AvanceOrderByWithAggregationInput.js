"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCountOrderByAggregateInput_1 = require("../inputs/AvanceCountOrderByAggregateInput");
const AvanceMaxOrderByAggregateInput_1 = require("../inputs/AvanceMaxOrderByAggregateInput");
const AvanceMinOrderByAggregateInput_1 = require("../inputs/AvanceMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AvanceOrderByWithAggregationInput = class AvanceOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceOrderByWithAggregationInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceOrderByWithAggregationInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceOrderByWithAggregationInput.prototype, "observaciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceOrderByWithAggregationInput.prototype, "proyectoId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceOrderByWithAggregationInput.prototype, "UserId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCountOrderByAggregateInput_1.AvanceCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCountOrderByAggregateInput_1.AvanceCountOrderByAggregateInput)
], AvanceOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceMaxOrderByAggregateInput_1.AvanceMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceMaxOrderByAggregateInput_1.AvanceMaxOrderByAggregateInput)
], AvanceOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceMinOrderByAggregateInput_1.AvanceMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceMinOrderByAggregateInput_1.AvanceMinOrderByAggregateInput)
], AvanceOrderByWithAggregationInput.prototype, "_min", void 0);
AvanceOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceOrderByWithAggregationInput", {
        isAbstract: true
    })
], AvanceOrderByWithAggregationInput);
exports.AvanceOrderByWithAggregationInput = AvanceOrderByWithAggregationInput;
