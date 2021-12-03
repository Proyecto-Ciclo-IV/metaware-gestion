"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Objetivo_1 = require("../../../models/Objetivo");
const Proyecto_1 = require("../../../models/Proyecto");
const helpers_1 = require("../../../helpers");
let ObjetivoRelationsResolver = class ObjetivoRelationsResolver {
    async proyecto(objetivo, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.findUnique({
            where: {
                id: objetivo.id,
            },
        }).proyecto({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Proyecto_1.Proyecto, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Objetivo_1.Objetivo, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ObjetivoRelationsResolver.prototype, "proyecto", null);
ObjetivoRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Objetivo_1.Objetivo)
], ObjetivoRelationsResolver);
exports.ObjetivoRelationsResolver = ObjetivoRelationsResolver;
