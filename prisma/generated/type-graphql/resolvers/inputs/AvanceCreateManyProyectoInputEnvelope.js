"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateManyProyectoInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCreateManyProyectoInput_1 = require("../inputs/AvanceCreateManyProyectoInput");
let AvanceCreateManyProyectoInputEnvelope = class AvanceCreateManyProyectoInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceCreateManyProyectoInput_1.AvanceCreateManyProyectoInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceCreateManyProyectoInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AvanceCreateManyProyectoInputEnvelope.prototype, "skipDuplicates", void 0);
AvanceCreateManyProyectoInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceCreateManyProyectoInputEnvelope", {
        isAbstract: true
    })
], AvanceCreateManyProyectoInputEnvelope);
exports.AvanceCreateManyProyectoInputEnvelope = AvanceCreateManyProyectoInputEnvelope;
