"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ObjetivoCountOrderByAggregateInput = class ObjetivoCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoCountOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoCountOrderByAggregateInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoCountOrderByAggregateInput.prototype, "tipo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoCountOrderByAggregateInput.prototype, "proyectoId", void 0);
ObjetivoCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoCountOrderByAggregateInput", {
        isAbstract: true
    })
], ObjetivoCountOrderByAggregateInput);
exports.ObjetivoCountOrderByAggregateInput = ObjetivoCountOrderByAggregateInput;
