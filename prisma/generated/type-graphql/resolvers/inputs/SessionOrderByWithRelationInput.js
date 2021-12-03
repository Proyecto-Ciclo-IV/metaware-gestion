"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioOrderByWithRelationInput_1 = require("../inputs/UsuarioOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SessionOrderByWithRelationInput = class SessionOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionOrderByWithRelationInput.prototype, "sessionToken", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionOrderByWithRelationInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionOrderByWithRelationInput.prototype, "expires", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioOrderByWithRelationInput_1.UsuarioOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioOrderByWithRelationInput_1.UsuarioOrderByWithRelationInput)
], SessionOrderByWithRelationInput.prototype, "usuario", void 0);
SessionOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionOrderByWithRelationInput", {
        isAbstract: true
    })
], SessionOrderByWithRelationInput);
exports.SessionOrderByWithRelationInput = SessionOrderByWithRelationInput;
