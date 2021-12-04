"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AvanceMaxOrderByAggregateInput = class AvanceMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceMaxOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceMaxOrderByAggregateInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceMaxOrderByAggregateInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceMaxOrderByAggregateInput.prototype, "observaciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceMaxOrderByAggregateInput.prototype, "proyectoId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceMaxOrderByAggregateInput.prototype, "UserId", void 0);
AvanceMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceMaxOrderByAggregateInput", {
        isAbstract: true
    })
], AvanceMaxOrderByAggregateInput);
exports.AvanceMaxOrderByAggregateInput = AvanceMaxOrderByAggregateInput;
