"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Inscripcion_1 = require("../../../models/Inscripcion");
const Proyecto_1 = require("../../../models/Proyecto");
const Usuario_1 = require("../../../models/Usuario");
const helpers_1 = require("../../../helpers");
let InscripcionRelationsResolver = class InscripcionRelationsResolver {
    async proyecto(inscripcion, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.findUnique({
            where: {
                id: inscripcion.id,
            },
        }).proyecto({});
    }
    async estudiante(inscripcion, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.findUnique({
            where: {
                id: inscripcion.id,
            },
        }).estudiante({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Proyecto_1.Proyecto, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Inscripcion_1.Inscripcion, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InscripcionRelationsResolver.prototype, "proyecto", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Usuario_1.Usuario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Inscripcion_1.Inscripcion, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InscripcionRelationsResolver.prototype, "estudiante", null);
InscripcionRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], InscripcionRelationsResolver);
exports.InscripcionRelationsResolver = InscripcionRelationsResolver;
