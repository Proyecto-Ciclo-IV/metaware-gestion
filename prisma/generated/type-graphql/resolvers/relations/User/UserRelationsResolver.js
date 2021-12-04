"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Account_1 = require("../../../models/Account");
const Avance_1 = require("../../../models/Avance");
const Inscripcion_1 = require("../../../models/Inscripcion");
const Proyecto_1 = require("../../../models/Proyecto");
const Session_1 = require("../../../models/Session");
const User_1 = require("../../../models/User");
const UserAccountsArgs_1 = require("./args/UserAccountsArgs");
const UserAvancesCreadosArgs_1 = require("./args/UserAvancesCreadosArgs");
const UserInscripcionesArgs_1 = require("./args/UserInscripcionesArgs");
const UserProyectosLideradosArgs_1 = require("./args/UserProyectosLideradosArgs");
const UserSessionsArgs_1 = require("./args/UserSessionsArgs");
const helpers_1 = require("../../../helpers");
let UserRelationsResolver = class UserRelationsResolver {
    async proyectosLiderados(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).proyectosLiderados(args);
    }
    async avancesCreados(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).avancesCreados(args);
    }
    async inscripciones(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).inscripciones(args);
    }
    async accounts(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).accounts(args);
    }
    async sessions(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).sessions(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Proyecto_1.Proyecto], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [User_1.User, Object, UserProyectosLideradosArgs_1.UserProyectosLideradosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserRelationsResolver.prototype, "proyectosLiderados", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Avance_1.Avance], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [User_1.User, Object, UserAvancesCreadosArgs_1.UserAvancesCreadosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserRelationsResolver.prototype, "avancesCreados", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Inscripcion_1.Inscripcion], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [User_1.User, Object, UserInscripcionesArgs_1.UserInscripcionesArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserRelationsResolver.prototype, "inscripciones", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Account_1.Account], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [User_1.User, Object, UserAccountsArgs_1.UserAccountsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserRelationsResolver.prototype, "accounts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Session_1.Session], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [User_1.User, Object, UserSessionsArgs_1.UserSessionsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserRelationsResolver.prototype, "sessions", null);
UserRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserRelationsResolver);
exports.UserRelationsResolver = UserRelationsResolver;
