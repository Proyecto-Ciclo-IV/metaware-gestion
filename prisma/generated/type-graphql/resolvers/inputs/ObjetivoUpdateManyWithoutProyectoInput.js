"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoUpdateManyWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoCreateManyProyectoInputEnvelope_1 = require("../inputs/ObjetivoCreateManyProyectoInputEnvelope");
const ObjetivoCreateOrConnectWithoutProyectoInput_1 = require("../inputs/ObjetivoCreateOrConnectWithoutProyectoInput");
const ObjetivoCreateWithoutProyectoInput_1 = require("../inputs/ObjetivoCreateWithoutProyectoInput");
const ObjetivoScalarWhereInput_1 = require("../inputs/ObjetivoScalarWhereInput");
const ObjetivoUpdateManyWithWhereWithoutProyectoInput_1 = require("../inputs/ObjetivoUpdateManyWithWhereWithoutProyectoInput");
const ObjetivoUpdateWithWhereUniqueWithoutProyectoInput_1 = require("../inputs/ObjetivoUpdateWithWhereUniqueWithoutProyectoInput");
const ObjetivoUpsertWithWhereUniqueWithoutProyectoInput_1 = require("../inputs/ObjetivoUpsertWithWhereUniqueWithoutProyectoInput");
const ObjetivoWhereUniqueInput_1 = require("../inputs/ObjetivoWhereUniqueInput");
let ObjetivoUpdateManyWithoutProyectoInput = class ObjetivoUpdateManyWithoutProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoCreateWithoutProyectoInput_1.ObjetivoCreateWithoutProyectoInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoUpdateManyWithoutProyectoInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoCreateOrConnectWithoutProyectoInput_1.ObjetivoCreateOrConnectWithoutProyectoInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoUpdateManyWithoutProyectoInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoUpsertWithWhereUniqueWithoutProyectoInput_1.ObjetivoUpsertWithWhereUniqueWithoutProyectoInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoUpdateManyWithoutProyectoInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoCreateManyProyectoInputEnvelope_1.ObjetivoCreateManyProyectoInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoCreateManyProyectoInputEnvelope_1.ObjetivoCreateManyProyectoInputEnvelope)
], ObjetivoUpdateManyWithoutProyectoInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoUpdateManyWithoutProyectoInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoUpdateManyWithoutProyectoInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoUpdateManyWithoutProyectoInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoUpdateManyWithoutProyectoInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoUpdateWithWhereUniqueWithoutProyectoInput_1.ObjetivoUpdateWithWhereUniqueWithoutProyectoInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoUpdateManyWithoutProyectoInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoUpdateManyWithWhereWithoutProyectoInput_1.ObjetivoUpdateManyWithWhereWithoutProyectoInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoUpdateManyWithoutProyectoInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoScalarWhereInput_1.ObjetivoScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoUpdateManyWithoutProyectoInput.prototype, "deleteMany", void 0);
ObjetivoUpdateManyWithoutProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoUpdateManyWithoutProyectoInput", {
        isAbstract: true
    })
], ObjetivoUpdateManyWithoutProyectoInput);
exports.ObjetivoUpdateManyWithoutProyectoInput = ObjetivoUpdateManyWithoutProyectoInput;
