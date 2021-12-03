"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAvance = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCountAggregate_1 = require("../outputs/AvanceCountAggregate");
const AvanceMaxAggregate_1 = require("../outputs/AvanceMaxAggregate");
const AvanceMinAggregate_1 = require("../outputs/AvanceMinAggregate");
let AggregateAvance = class AggregateAvance {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCountAggregate_1.AvanceCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCountAggregate_1.AvanceCountAggregate)
], AggregateAvance.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceMinAggregate_1.AvanceMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceMinAggregate_1.AvanceMinAggregate)
], AggregateAvance.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceMaxAggregate_1.AvanceMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceMaxAggregate_1.AvanceMaxAggregate)
], AggregateAvance.prototype, "_max", void 0);
AggregateAvance = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateAvance", {
        isAbstract: true
    })
], AggregateAvance);
exports.AggregateAvance = AggregateAvance;
