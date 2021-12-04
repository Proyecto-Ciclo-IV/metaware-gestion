"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Avance_1 = require("../../../models/Avance");
const Inscripcion_1 = require("../../../models/Inscripcion");
const Objetivo_1 = require("../../../models/Objetivo");
const Proyecto_1 = require("../../../models/Proyecto");
const User_1 = require("../../../models/User");
const ProyectoAvancesArgs_1 = require("./args/ProyectoAvancesArgs");
const ProyectoInscripcionesArgs_1 = require("./args/ProyectoInscripcionesArgs");
const ProyectoObjetivosArgs_1 = require("./args/ProyectoObjetivosArgs");
const helpers_1 = require("../../../helpers");
let ProyectoRelationsResolver = class ProyectoRelationsResolver {
    async lider(proyecto, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findUnique({
            where: {
                id: proyecto.id,
            },
        }).lider({});
    }
    async objetivos(proyecto, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findUnique({
            where: {
                id: proyecto.id,
            },
        }).objetivos(args);
    }
    async avances(proyecto, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findUnique({
            where: {
                id: proyecto.id,
            },
        }).avances(args);
    }
    async inscripciones(proyecto, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findUnique({
            where: {
                id: proyecto.id,
            },
        }).inscripciones(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Proyecto_1.Proyecto, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProyectoRelationsResolver.prototype, "lider", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Objetivo_1.Objetivo], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Proyecto_1.Proyecto, Object, ProyectoObjetivosArgs_1.ProyectoObjetivosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProyectoRelationsResolver.prototype, "objetivos", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Avance_1.Avance], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Proyecto_1.Proyecto, Object, ProyectoAvancesArgs_1.ProyectoAvancesArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProyectoRelationsResolver.prototype, "avances", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Inscripcion_1.Inscripcion], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Proyecto_1.Proyecto, Object, ProyectoInscripcionesArgs_1.ProyectoInscripcionesArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProyectoRelationsResolver.prototype, "inscripciones", null);
ProyectoRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Proyecto_1.Proyecto)
], ProyectoRelationsResolver);
exports.ProyectoRelationsResolver = ProyectoRelationsResolver;
