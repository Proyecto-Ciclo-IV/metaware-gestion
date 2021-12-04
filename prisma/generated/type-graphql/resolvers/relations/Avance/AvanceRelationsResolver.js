"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Avance_1 = require("../../../models/Avance");
const Proyecto_1 = require("../../../models/Proyecto");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let AvanceRelationsResolver = class AvanceRelationsResolver {
    async proyecto(avance, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findUnique({
            where: {
                id: avance.id,
            },
        }).proyecto({});
    }
    async creadoPor(avance, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findUnique({
            where: {
                id: avance.id,
            },
        }).creadoPor({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Proyecto_1.Proyecto, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Avance_1.Avance, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvanceRelationsResolver.prototype, "proyecto", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Avance_1.Avance, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvanceRelationsResolver.prototype, "creadoPor", null);
AvanceRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], AvanceRelationsResolver);
exports.AvanceRelationsResolver = AvanceRelationsResolver;
