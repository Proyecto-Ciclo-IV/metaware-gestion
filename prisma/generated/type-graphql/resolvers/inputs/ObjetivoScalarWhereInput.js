"use strict";
var ObjetivoScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumEnum_TipoObjetivoFilter_1 = require("../inputs/EnumEnum_TipoObjetivoFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ObjetivoScalarWhereInput = ObjetivoScalarWhereInput_1 = class ObjetivoScalarWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoScalarWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoScalarWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoScalarWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ObjetivoScalarWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ObjetivoScalarWhereInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_TipoObjetivoFilter_1.EnumEnum_TipoObjetivoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_TipoObjetivoFilter_1.EnumEnum_TipoObjetivoFilter)
], ObjetivoScalarWhereInput.prototype, "tipo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ObjetivoScalarWhereInput.prototype, "proyectoId", void 0);
ObjetivoScalarWhereInput = ObjetivoScalarWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoScalarWhereInput", {
        isAbstract: true
    })
], ObjetivoScalarWhereInput);
exports.ObjetivoScalarWhereInput = ObjetivoScalarWhereInput;
