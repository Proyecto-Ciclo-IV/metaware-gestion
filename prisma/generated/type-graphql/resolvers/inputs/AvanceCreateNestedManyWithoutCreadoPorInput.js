"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateNestedManyWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCreateManyCreadoPorInputEnvelope_1 = require("../inputs/AvanceCreateManyCreadoPorInputEnvelope");
const AvanceCreateOrConnectWithoutCreadoPorInput_1 = require("../inputs/AvanceCreateOrConnectWithoutCreadoPorInput");
const AvanceCreateWithoutCreadoPorInput_1 = require("../inputs/AvanceCreateWithoutCreadoPorInput");
const AvanceWhereUniqueInput_1 = require("../inputs/AvanceWhereUniqueInput");
let AvanceCreateNestedManyWithoutCreadoPorInput = class AvanceCreateNestedManyWithoutCreadoPorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceCreateWithoutCreadoPorInput_1.AvanceCreateWithoutCreadoPorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceCreateNestedManyWithoutCreadoPorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceCreateOrConnectWithoutCreadoPorInput_1.AvanceCreateOrConnectWithoutCreadoPorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceCreateNestedManyWithoutCreadoPorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateManyCreadoPorInputEnvelope_1.AvanceCreateManyCreadoPorInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateManyCreadoPorInputEnvelope_1.AvanceCreateManyCreadoPorInputEnvelope)
], AvanceCreateNestedManyWithoutCreadoPorInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceWhereUniqueInput_1.AvanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceCreateNestedManyWithoutCreadoPorInput.prototype, "connect", void 0);
AvanceCreateNestedManyWithoutCreadoPorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceCreateNestedManyWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvanceCreateNestedManyWithoutCreadoPorInput);
exports.AvanceCreateNestedManyWithoutCreadoPorInput = AvanceCreateNestedManyWithoutCreadoPorInput;
