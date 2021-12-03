"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpsertWithWhereUniqueWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCreateWithoutCreadoPorInput_1 = require("../inputs/AvanceCreateWithoutCreadoPorInput");
const AvanceUpdateWithoutCreadoPorInput_1 = require("../inputs/AvanceUpdateWithoutCreadoPorInput");
const AvanceWhereUniqueInput_1 = require("../inputs/AvanceWhereUniqueInput");
let AvanceUpsertWithWhereUniqueWithoutCreadoPorInput = class AvanceUpsertWithWhereUniqueWithoutCreadoPorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], AvanceUpsertWithWhereUniqueWithoutCreadoPorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceUpdateWithoutCreadoPorInput_1.AvanceUpdateWithoutCreadoPorInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceUpdateWithoutCreadoPorInput_1.AvanceUpdateWithoutCreadoPorInput)
], AvanceUpsertWithWhereUniqueWithoutCreadoPorInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateWithoutCreadoPorInput_1.AvanceCreateWithoutCreadoPorInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateWithoutCreadoPorInput_1.AvanceCreateWithoutCreadoPorInput)
], AvanceUpsertWithWhereUniqueWithoutCreadoPorInput.prototype, "create", void 0);
AvanceUpsertWithWhereUniqueWithoutCreadoPorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceUpsertWithWhereUniqueWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvanceUpsertWithWhereUniqueWithoutCreadoPorInput);
exports.AvanceUpsertWithWhereUniqueWithoutCreadoPorInput = AvanceUpsertWithWhereUniqueWithoutCreadoPorInput;
