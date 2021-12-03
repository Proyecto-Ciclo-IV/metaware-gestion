"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceWhereInput_1 = require("../inputs/AvanceWhereInput");
let AvanceListRelationFilter = class AvanceListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereInput_1.AvanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereInput_1.AvanceWhereInput)
], AvanceListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereInput_1.AvanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereInput_1.AvanceWhereInput)
], AvanceListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereInput_1.AvanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereInput_1.AvanceWhereInput)
], AvanceListRelationFilter.prototype, "none", void 0);
AvanceListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceListRelationFilter", {
        isAbstract: true
    })
], AvanceListRelationFilter);
exports.AvanceListRelationFilter = AvanceListRelationFilter;
