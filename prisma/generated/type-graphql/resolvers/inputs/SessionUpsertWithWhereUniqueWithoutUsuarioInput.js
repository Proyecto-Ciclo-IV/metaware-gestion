"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpsertWithWhereUniqueWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionCreateWithoutUsuarioInput_1 = require("../inputs/SessionCreateWithoutUsuarioInput");
const SessionUpdateWithoutUsuarioInput_1 = require("../inputs/SessionUpdateWithoutUsuarioInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionUpsertWithWhereUniqueWithoutUsuarioInput = class SessionUpsertWithWhereUniqueWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], SessionUpsertWithWhereUniqueWithoutUsuarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionUpdateWithoutUsuarioInput_1.SessionUpdateWithoutUsuarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionUpdateWithoutUsuarioInput_1.SessionUpdateWithoutUsuarioInput)
], SessionUpsertWithWhereUniqueWithoutUsuarioInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionCreateWithoutUsuarioInput_1.SessionCreateWithoutUsuarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionCreateWithoutUsuarioInput_1.SessionCreateWithoutUsuarioInput)
], SessionUpsertWithWhereUniqueWithoutUsuarioInput.prototype, "create", void 0);
SessionUpsertWithWhereUniqueWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionUpsertWithWhereUniqueWithoutUsuarioInput", {
        isAbstract: true
    })
], SessionUpsertWithWhereUniqueWithoutUsuarioInput);
exports.SessionUpsertWithWhereUniqueWithoutUsuarioInput = SessionUpsertWithWhereUniqueWithoutUsuarioInput;
