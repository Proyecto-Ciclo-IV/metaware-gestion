"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoAvancesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceOrderByWithRelationInput_1 = require("../../../inputs/AvanceOrderByWithRelationInput");
const AvanceWhereInput_1 = require("../../../inputs/AvanceWhereInput");
const AvanceWhereUniqueInput_1 = require("../../../inputs/AvanceWhereUniqueInput");
const AvanceScalarFieldEnum_1 = require("../../../../enums/AvanceScalarFieldEnum");
let ProyectoAvancesArgs = class ProyectoAvancesArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereInput_1.AvanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereInput_1.AvanceWhereInput)
], ProyectoAvancesArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceOrderByWithRelationInput_1.AvanceOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoAvancesArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], ProyectoAvancesArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProyectoAvancesArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProyectoAvancesArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceScalarFieldEnum_1.AvanceScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoAvancesArgs.prototype, "distinct", void 0);
ProyectoAvancesArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], ProyectoAvancesArgs);
exports.ProyectoAvancesArgs = ProyectoAvancesArgs;
