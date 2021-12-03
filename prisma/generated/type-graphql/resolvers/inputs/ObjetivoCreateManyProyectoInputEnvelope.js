"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoCreateManyProyectoInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoCreateManyProyectoInput_1 = require("../inputs/ObjetivoCreateManyProyectoInput");
let ObjetivoCreateManyProyectoInputEnvelope = class ObjetivoCreateManyProyectoInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoCreateManyProyectoInput_1.ObjetivoCreateManyProyectoInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoCreateManyProyectoInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ObjetivoCreateManyProyectoInputEnvelope.prototype, "skipDuplicates", void 0);
ObjetivoCreateManyProyectoInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoCreateManyProyectoInputEnvelope", {
        isAbstract: true
    })
], ObjetivoCreateManyProyectoInputEnvelope);
exports.ObjetivoCreateManyProyectoInputEnvelope = ObjetivoCreateManyProyectoInputEnvelope;
