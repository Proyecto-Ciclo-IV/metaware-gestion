"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateWithWhereUniqueWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionUpdateWithoutUsuarioInput_1 = require("../inputs/SessionUpdateWithoutUsuarioInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionUpdateWithWhereUniqueWithoutUsuarioInput = class SessionUpdateWithWhereUniqueWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], SessionUpdateWithWhereUniqueWithoutUsuarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionUpdateWithoutUsuarioInput_1.SessionUpdateWithoutUsuarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionUpdateWithoutUsuarioInput_1.SessionUpdateWithoutUsuarioInput)
], SessionUpdateWithWhereUniqueWithoutUsuarioInput.prototype, "data", void 0);
SessionUpdateWithWhereUniqueWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionUpdateWithWhereUniqueWithoutUsuarioInput", {
        isAbstract: true
    })
], SessionUpdateWithWhereUniqueWithoutUsuarioInput);
exports.SessionUpdateWithWhereUniqueWithoutUsuarioInput = SessionUpdateWithWhereUniqueWithoutUsuarioInput;
