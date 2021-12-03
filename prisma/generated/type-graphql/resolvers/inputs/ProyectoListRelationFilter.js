"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoWhereInput_1 = require("../inputs/ProyectoWhereInput");
let ProyectoListRelationFilter = class ProyectoListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoWhereInput_1.ProyectoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoWhereInput_1.ProyectoWhereInput)
], ProyectoListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoWhereInput_1.ProyectoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoWhereInput_1.ProyectoWhereInput)
], ProyectoListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoWhereInput_1.ProyectoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoWhereInput_1.ProyectoWhereInput)
], ProyectoListRelationFilter.prototype, "none", void 0);
ProyectoListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoListRelationFilter", {
        isAbstract: true
    })
], ProyectoListRelationFilter);
exports.ProyectoListRelationFilter = ProyectoListRelationFilter;
