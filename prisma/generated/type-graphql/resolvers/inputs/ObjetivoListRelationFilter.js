"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoWhereInput_1 = require("../inputs/ObjetivoWhereInput");
let ObjetivoListRelationFilter = class ObjetivoListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereInput_1.ObjetivoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereInput_1.ObjetivoWhereInput)
], ObjetivoListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereInput_1.ObjetivoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereInput_1.ObjetivoWhereInput)
], ObjetivoListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereInput_1.ObjetivoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereInput_1.ObjetivoWhereInput)
], ObjetivoListRelationFilter.prototype, "none", void 0);
ObjetivoListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoListRelationFilter", {
        isAbstract: true
    })
], ObjetivoListRelationFilter);
exports.ObjetivoListRelationFilter = ObjetivoListRelationFilter;
