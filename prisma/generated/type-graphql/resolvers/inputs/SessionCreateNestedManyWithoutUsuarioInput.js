"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateNestedManyWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionCreateManyUsuarioInputEnvelope_1 = require("../inputs/SessionCreateManyUsuarioInputEnvelope");
const SessionCreateOrConnectWithoutUsuarioInput_1 = require("../inputs/SessionCreateOrConnectWithoutUsuarioInput");
const SessionCreateWithoutUsuarioInput_1 = require("../inputs/SessionCreateWithoutUsuarioInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionCreateNestedManyWithoutUsuarioInput = class SessionCreateNestedManyWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionCreateWithoutUsuarioInput_1.SessionCreateWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionCreateNestedManyWithoutUsuarioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionCreateOrConnectWithoutUsuarioInput_1.SessionCreateOrConnectWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionCreateNestedManyWithoutUsuarioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionCreateManyUsuarioInputEnvelope_1.SessionCreateManyUsuarioInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionCreateManyUsuarioInputEnvelope_1.SessionCreateManyUsuarioInputEnvelope)
], SessionCreateNestedManyWithoutUsuarioInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionWhereUniqueInput_1.SessionWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionCreateNestedManyWithoutUsuarioInput.prototype, "connect", void 0);
SessionCreateNestedManyWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionCreateNestedManyWithoutUsuarioInput", {
        isAbstract: true
    })
], SessionCreateNestedManyWithoutUsuarioInput);
exports.SessionCreateNestedManyWithoutUsuarioInput = SessionCreateNestedManyWithoutUsuarioInput;
