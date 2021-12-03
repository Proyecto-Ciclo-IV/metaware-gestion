"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateOrConnectWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCreateWithoutCreadoPorInput_1 = require("../inputs/AvanceCreateWithoutCreadoPorInput");
const AvanceWhereUniqueInput_1 = require("../inputs/AvanceWhereUniqueInput");
let AvanceCreateOrConnectWithoutCreadoPorInput = class AvanceCreateOrConnectWithoutCreadoPorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], AvanceCreateOrConnectWithoutCreadoPorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateWithoutCreadoPorInput_1.AvanceCreateWithoutCreadoPorInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateWithoutCreadoPorInput_1.AvanceCreateWithoutCreadoPorInput)
], AvanceCreateOrConnectWithoutCreadoPorInput.prototype, "create", void 0);
AvanceCreateOrConnectWithoutCreadoPorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceCreateOrConnectWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvanceCreateOrConnectWithoutCreadoPorInput);
exports.AvanceCreateOrConnectWithoutCreadoPorInput = AvanceCreateOrConnectWithoutCreadoPorInput;
