"use strict";
var SessionWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UsuarioRelationFilter_1 = require("../inputs/UsuarioRelationFilter");
let SessionWhereInput = SessionWhereInput_1 = class SessionWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], SessionWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], SessionWhereInput.prototype, "sessionToken", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], SessionWhereInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], SessionWhereInput.prototype, "expires", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioRelationFilter_1.UsuarioRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioRelationFilter_1.UsuarioRelationFilter)
], SessionWhereInput.prototype, "usuario", void 0);
SessionWhereInput = SessionWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionWhereInput", {
        isAbstract: true
    })
], SessionWhereInput);
exports.SessionWhereInput = SessionWhereInput;
