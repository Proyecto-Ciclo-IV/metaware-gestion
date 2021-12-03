"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpdateWithWhereUniqueWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceUpdateWithoutCreadoPorInput_1 = require("../inputs/AvanceUpdateWithoutCreadoPorInput");
const AvanceWhereUniqueInput_1 = require("../inputs/AvanceWhereUniqueInput");
let AvanceUpdateWithWhereUniqueWithoutCreadoPorInput = class AvanceUpdateWithWhereUniqueWithoutCreadoPorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], AvanceUpdateWithWhereUniqueWithoutCreadoPorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceUpdateWithoutCreadoPorInput_1.AvanceUpdateWithoutCreadoPorInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceUpdateWithoutCreadoPorInput_1.AvanceUpdateWithoutCreadoPorInput)
], AvanceUpdateWithWhereUniqueWithoutCreadoPorInput.prototype, "data", void 0);
AvanceUpdateWithWhereUniqueWithoutCreadoPorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceUpdateWithWhereUniqueWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvanceUpdateWithWhereUniqueWithoutCreadoPorInput);
exports.AvanceUpdateWithWhereUniqueWithoutCreadoPorInput = AvanceUpdateWithWhereUniqueWithoutCreadoPorInput;
