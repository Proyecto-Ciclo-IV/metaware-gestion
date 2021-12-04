"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCountAggregate_1 = require("../outputs/AvanceCountAggregate");
const AvanceMaxAggregate_1 = require("../outputs/AvanceMaxAggregate");
const AvanceMinAggregate_1 = require("../outputs/AvanceMinAggregate");
let AvanceGroupBy = class AvanceGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AvanceGroupBy.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceGroupBy.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceGroupBy.prototype, "observaciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceGroupBy.prototype, "proyectoId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceGroupBy.prototype, "UserId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCountAggregate_1.AvanceCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCountAggregate_1.AvanceCountAggregate)
], AvanceGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceMinAggregate_1.AvanceMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceMinAggregate_1.AvanceMinAggregate)
], AvanceGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceMaxAggregate_1.AvanceMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceMaxAggregate_1.AvanceMaxAggregate)
], AvanceGroupBy.prototype, "_max", void 0);
AvanceGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AvanceGroupBy", {
        isAbstract: true
    })
], AvanceGroupBy);
exports.AvanceGroupBy = AvanceGroupBy;
