"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Account_1 = require("../../../models/Account");
const Avance_1 = require("../../../models/Avance");
const Inscripcion_1 = require("../../../models/Inscripcion");
const Proyecto_1 = require("../../../models/Proyecto");
const Session_1 = require("../../../models/Session");
const Usuario_1 = require("../../../models/Usuario");
const UsuarioAccountsArgs_1 = require("./args/UsuarioAccountsArgs");
const UsuarioAvancesCreadosArgs_1 = require("./args/UsuarioAvancesCreadosArgs");
const UsuarioInscripcionesArgs_1 = require("./args/UsuarioInscripcionesArgs");
const UsuarioProyectosLideradosArgs_1 = require("./args/UsuarioProyectosLideradosArgs");
const UsuarioSessionsArgs_1 = require("./args/UsuarioSessionsArgs");
const helpers_1 = require("../../../helpers");
let UsuarioRelationsResolver = class UsuarioRelationsResolver {
    async proyectosLiderados(usuario, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findUnique({
            where: {
                id: usuario.id,
            },
        }).proyectosLiderados(args);
    }
    async avancesCreados(usuario, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findUnique({
            where: {
                id: usuario.id,
            },
        }).avancesCreados(args);
    }
    async inscripciones(usuario, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findUnique({
            where: {
                id: usuario.id,
            },
        }).inscripciones(args);
    }
    async accounts(usuario, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findUnique({
            where: {
                id: usuario.id,
            },
        }).accounts(args);
    }
    async sessions(usuario, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findUnique({
            where: {
                id: usuario.id,
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
    (0, tslib_1.__metadata)("design:paramtypes", [Usuario_1.Usuario, Object, UsuarioProyectosLideradosArgs_1.UsuarioProyectosLideradosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioRelationsResolver.prototype, "proyectosLiderados", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Avance_1.Avance], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Usuario_1.Usuario, Object, UsuarioAvancesCreadosArgs_1.UsuarioAvancesCreadosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioRelationsResolver.prototype, "avancesCreados", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Inscripcion_1.Inscripcion], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Usuario_1.Usuario, Object, UsuarioInscripcionesArgs_1.UsuarioInscripcionesArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioRelationsResolver.prototype, "inscripciones", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Account_1.Account], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Usuario_1.Usuario, Object, UsuarioAccountsArgs_1.UsuarioAccountsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioRelationsResolver.prototype, "accounts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Session_1.Session], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Usuario_1.Usuario, Object, UsuarioSessionsArgs_1.UsuarioSessionsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioRelationsResolver.prototype, "sessions", null);
UsuarioRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], UsuarioRelationsResolver);
exports.UsuarioRelationsResolver = UsuarioRelationsResolver;
