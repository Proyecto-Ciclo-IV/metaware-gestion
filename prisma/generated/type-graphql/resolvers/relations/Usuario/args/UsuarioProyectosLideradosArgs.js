"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioProyectosLideradosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoOrderByWithRelationInput_1 = require("../../../inputs/ProyectoOrderByWithRelationInput");
const ProyectoWhereInput_1 = require("../../../inputs/ProyectoWhereInput");
const ProyectoWhereUniqueInput_1 = require("../../../inputs/ProyectoWhereUniqueInput");
const ProyectoScalarFieldEnum_1 = require("../../../../enums/ProyectoScalarFieldEnum");
let UsuarioProyectosLideradosArgs = class UsuarioProyectosLideradosArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoWhereInput_1.ProyectoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoWhereInput_1.ProyectoWhereInput)
], UsuarioProyectosLideradosArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProyectoOrderByWithRelationInput_1.ProyectoOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UsuarioProyectosLideradosArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], UsuarioProyectosLideradosArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UsuarioProyectosLideradosArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UsuarioProyectosLideradosArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProyectoScalarFieldEnum_1.ProyectoScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UsuarioProyectosLideradosArgs.prototype, "distinct", void 0);
UsuarioProyectosLideradosArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UsuarioProyectosLideradosArgs);
exports.UsuarioProyectosLideradosArgs = UsuarioProyectosLideradosArgs;
