"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let UsuarioCount = class UsuarioCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UsuarioCount.prototype, "proyectosLiderados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UsuarioCount.prototype, "avancesCreados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UsuarioCount.prototype, "inscripciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UsuarioCount.prototype, "accounts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UsuarioCount.prototype, "sessions", void 0);
UsuarioCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("UsuarioCount", {
        isAbstract: true
    })
], UsuarioCount);
exports.UsuarioCount = UsuarioCount;