"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateManyLiderInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoCreateManyLiderInput_1 = require("../inputs/ProyectoCreateManyLiderInput");
let ProyectoCreateManyLiderInputEnvelope = class ProyectoCreateManyLiderInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProyectoCreateManyLiderInput_1.ProyectoCreateManyLiderInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoCreateManyLiderInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ProyectoCreateManyLiderInputEnvelope.prototype, "skipDuplicates", void 0);
ProyectoCreateManyLiderInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoCreateManyLiderInputEnvelope", {
        isAbstract: true
    })
], ProyectoCreateManyLiderInputEnvelope);
exports.ProyectoCreateManyLiderInputEnvelope = ProyectoCreateManyLiderInputEnvelope;
