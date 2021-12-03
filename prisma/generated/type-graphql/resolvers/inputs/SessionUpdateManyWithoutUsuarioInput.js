"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateManyWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionCreateManyUsuarioInputEnvelope_1 = require("../inputs/SessionCreateManyUsuarioInputEnvelope");
const SessionCreateOrConnectWithoutUsuarioInput_1 = require("../inputs/SessionCreateOrConnectWithoutUsuarioInput");
const SessionCreateWithoutUsuarioInput_1 = require("../inputs/SessionCreateWithoutUsuarioInput");
const SessionScalarWhereInput_1 = require("../inputs/SessionScalarWhereInput");
const SessionUpdateManyWithWhereWithoutUsuarioInput_1 = require("../inputs/SessionUpdateManyWithWhereWithoutUsuarioInput");
const SessionUpdateWithWhereUniqueWithoutUsuarioInput_1 = require("../inputs/SessionUpdateWithWhereUniqueWithoutUsuarioInput");
const SessionUpsertWithWhereUniqueWithoutUsuarioInput_1 = require("../inputs/SessionUpsertWithWhereUniqueWithoutUsuarioInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionUpdateManyWithoutUsuarioInput = class SessionUpdateManyWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionCreateWithoutUsuarioInput_1.SessionCreateWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionUpdateManyWithoutUsuarioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionCreateOrConnectWithoutUsuarioInput_1.SessionCreateOrConnectWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionUpdateManyWithoutUsuarioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionUpsertWithWhereUniqueWithoutUsuarioInput_1.SessionUpsertWithWhereUniqueWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionUpdateManyWithoutUsuarioInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionCreateManyUsuarioInputEnvelope_1.SessionCreateManyUsuarioInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionCreateManyUsuarioInputEnvelope_1.SessionCreateManyUsuarioInputEnvelope)
], SessionUpdateManyWithoutUsuarioInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionWhereUniqueInput_1.SessionWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionUpdateManyWithoutUsuarioInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionWhereUniqueInput_1.SessionWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionUpdateManyWithoutUsuarioInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionWhereUniqueInput_1.SessionWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionUpdateManyWithoutUsuarioInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionWhereUniqueInput_1.SessionWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionUpdateManyWithoutUsuarioInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionUpdateWithWhereUniqueWithoutUsuarioInput_1.SessionUpdateWithWhereUniqueWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionUpdateManyWithoutUsuarioInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionUpdateManyWithWhereWithoutUsuarioInput_1.SessionUpdateManyWithWhereWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionUpdateManyWithoutUsuarioInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionScalarWhereInput_1.SessionScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionUpdateManyWithoutUsuarioInput.prototype, "deleteMany", void 0);
SessionUpdateManyWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionUpdateManyWithoutUsuarioInput", {
        isAbstract: true
    })
], SessionUpdateManyWithoutUsuarioInput);
exports.SessionUpdateManyWithoutUsuarioInput = SessionUpdateManyWithoutUsuarioInput;
