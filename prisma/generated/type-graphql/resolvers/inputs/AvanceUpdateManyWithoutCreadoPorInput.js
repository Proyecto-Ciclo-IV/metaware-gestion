"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpdateManyWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCreateManyCreadoPorInputEnvelope_1 = require("../inputs/AvanceCreateManyCreadoPorInputEnvelope");
const AvanceCreateOrConnectWithoutCreadoPorInput_1 = require("../inputs/AvanceCreateOrConnectWithoutCreadoPorInput");
const AvanceCreateWithoutCreadoPorInput_1 = require("../inputs/AvanceCreateWithoutCreadoPorInput");
const AvanceScalarWhereInput_1 = require("../inputs/AvanceScalarWhereInput");
const AvanceUpdateManyWithWhereWithoutCreadoPorInput_1 = require("../inputs/AvanceUpdateManyWithWhereWithoutCreadoPorInput");
const AvanceUpdateWithWhereUniqueWithoutCreadoPorInput_1 = require("../inputs/AvanceUpdateWithWhereUniqueWithoutCreadoPorInput");
const AvanceUpsertWithWhereUniqueWithoutCreadoPorInput_1 = require("../inputs/AvanceUpsertWithWhereUniqueWithoutCreadoPorInput");
const AvanceWhereUniqueInput_1 = require("../inputs/AvanceWhereUniqueInput");
let AvanceUpdateManyWithoutCreadoPorInput = class AvanceUpdateManyWithoutCreadoPorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceCreateWithoutCreadoPorInput_1.AvanceCreateWithoutCreadoPorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceUpdateManyWithoutCreadoPorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceCreateOrConnectWithoutCreadoPorInput_1.AvanceCreateOrConnectWithoutCreadoPorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceUpdateManyWithoutCreadoPorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceUpsertWithWhereUniqueWithoutCreadoPorInput_1.AvanceUpsertWithWhereUniqueWithoutCreadoPorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceUpdateManyWithoutCreadoPorInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateManyCreadoPorInputEnvelope_1.AvanceCreateManyCreadoPorInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateManyCreadoPorInputEnvelope_1.AvanceCreateManyCreadoPorInputEnvelope)
], AvanceUpdateManyWithoutCreadoPorInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceWhereUniqueInput_1.AvanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceUpdateManyWithoutCreadoPorInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceWhereUniqueInput_1.AvanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceUpdateManyWithoutCreadoPorInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceWhereUniqueInput_1.AvanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceUpdateManyWithoutCreadoPorInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceWhereUniqueInput_1.AvanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceUpdateManyWithoutCreadoPorInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceUpdateWithWhereUniqueWithoutCreadoPorInput_1.AvanceUpdateWithWhereUniqueWithoutCreadoPorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceUpdateManyWithoutCreadoPorInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceUpdateManyWithWhereWithoutCreadoPorInput_1.AvanceUpdateManyWithWhereWithoutCreadoPorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceUpdateManyWithoutCreadoPorInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceScalarWhereInput_1.AvanceScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceUpdateManyWithoutCreadoPorInput.prototype, "deleteMany", void 0);
AvanceUpdateManyWithoutCreadoPorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceUpdateManyWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvanceUpdateManyWithoutCreadoPorInput);
exports.AvanceUpdateManyWithoutCreadoPorInput = AvanceUpdateManyWithoutCreadoPorInput;
