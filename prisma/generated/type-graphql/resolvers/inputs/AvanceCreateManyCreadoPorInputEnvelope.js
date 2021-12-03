"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateManyCreadoPorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCreateManyCreadoPorInput_1 = require("../inputs/AvanceCreateManyCreadoPorInput");
let AvanceCreateManyCreadoPorInputEnvelope = class AvanceCreateManyCreadoPorInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceCreateManyCreadoPorInput_1.AvanceCreateManyCreadoPorInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceCreateManyCreadoPorInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AvanceCreateManyCreadoPorInputEnvelope.prototype, "skipDuplicates", void 0);
AvanceCreateManyCreadoPorInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceCreateManyCreadoPorInputEnvelope", {
        isAbstract: true
    })
], AvanceCreateManyCreadoPorInputEnvelope);
exports.AvanceCreateManyCreadoPorInputEnvelope = AvanceCreateManyCreadoPorInputEnvelope;
