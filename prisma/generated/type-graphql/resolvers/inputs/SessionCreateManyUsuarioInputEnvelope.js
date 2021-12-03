"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateManyUsuarioInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionCreateManyUsuarioInput_1 = require("../inputs/SessionCreateManyUsuarioInput");
let SessionCreateManyUsuarioInputEnvelope = class SessionCreateManyUsuarioInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionCreateManyUsuarioInput_1.SessionCreateManyUsuarioInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionCreateManyUsuarioInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SessionCreateManyUsuarioInputEnvelope.prototype, "skipDuplicates", void 0);
SessionCreateManyUsuarioInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionCreateManyUsuarioInputEnvelope", {
        isAbstract: true
    })
], SessionCreateManyUsuarioInputEnvelope);
exports.SessionCreateManyUsuarioInputEnvelope = SessionCreateManyUsuarioInputEnvelope;
