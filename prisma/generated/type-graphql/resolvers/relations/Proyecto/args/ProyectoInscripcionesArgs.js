"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoInscripcionesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InscripcionOrderByWithRelationInput_1 = require("../../../inputs/InscripcionOrderByWithRelationInput");
const InscripcionWhereInput_1 = require("../../../inputs/InscripcionWhereInput");
const InscripcionWhereUniqueInput_1 = require("../../../inputs/InscripcionWhereUniqueInput");
const InscripcionScalarFieldEnum_1 = require("../../../../enums/InscripcionScalarFieldEnum");
let ProyectoInscripcionesArgs = class ProyectoInscripcionesArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionWhereInput_1.InscripcionWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionWhereInput_1.InscripcionWhereInput)
], ProyectoInscripcionesArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [InscripcionOrderByWithRelationInput_1.InscripcionOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoInscripcionesArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput)
], ProyectoInscripcionesArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProyectoInscripcionesArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProyectoInscripcionesArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [InscripcionScalarFieldEnum_1.InscripcionScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoInscripcionesArgs.prototype, "distinct", void 0);
ProyectoInscripcionesArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], ProyectoInscripcionesArgs);
exports.ProyectoInscripcionesArgs = ProyectoInscripcionesArgs;
