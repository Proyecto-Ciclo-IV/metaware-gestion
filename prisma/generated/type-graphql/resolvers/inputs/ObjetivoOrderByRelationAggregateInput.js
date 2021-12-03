"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ObjetivoOrderByRelationAggregateInput = class ObjetivoOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoOrderByRelationAggregateInput.prototype, "_count", void 0);
ObjetivoOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoOrderByRelationAggregateInput", {
        isAbstract: true
    })
], ObjetivoOrderByRelationAggregateInput);
exports.ObjetivoOrderByRelationAggregateInput = ObjetivoOrderByRelationAggregateInput;
