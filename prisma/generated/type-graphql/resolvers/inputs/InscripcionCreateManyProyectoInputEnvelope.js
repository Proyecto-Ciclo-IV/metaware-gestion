"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateManyProyectoInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InscripcionCreateManyProyectoInput_1 = require("../inputs/InscripcionCreateManyProyectoInput");
let InscripcionCreateManyProyectoInputEnvelope = class InscripcionCreateManyProyectoInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [InscripcionCreateManyProyectoInput_1.InscripcionCreateManyProyectoInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], InscripcionCreateManyProyectoInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], InscripcionCreateManyProyectoInputEnvelope.prototype, "skipDuplicates", void 0);
InscripcionCreateManyProyectoInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InscripcionCreateManyProyectoInputEnvelope", {
        isAbstract: true
    })
], InscripcionCreateManyProyectoInputEnvelope);
exports.InscripcionCreateManyProyectoInputEnvelope = InscripcionCreateManyProyectoInputEnvelope;
