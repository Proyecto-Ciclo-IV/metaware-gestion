"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoWhereInput_1 = require("../inputs/ProyectoWhereInput");
let ProyectoRelationFilter = class ProyectoRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoWhereInput_1.ProyectoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoWhereInput_1.ProyectoWhereInput)
], ProyectoRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoWhereInput_1.ProyectoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoWhereInput_1.ProyectoWhereInput)
], ProyectoRelationFilter.prototype, "isNot", void 0);
ProyectoRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoRelationFilter", {
        isAbstract: true
    })
], ProyectoRelationFilter);
exports.ProyectoRelationFilter = ProyectoRelationFilter;
