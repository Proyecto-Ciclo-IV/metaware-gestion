"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateNestedManyWithoutLiderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoCreateManyLiderInputEnvelope_1 = require("../inputs/ProyectoCreateManyLiderInputEnvelope");
const ProyectoCreateOrConnectWithoutLiderInput_1 = require("../inputs/ProyectoCreateOrConnectWithoutLiderInput");
const ProyectoCreateWithoutLiderInput_1 = require("../inputs/ProyectoCreateWithoutLiderInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoCreateNestedManyWithoutLiderInput = class ProyectoCreateNestedManyWithoutLiderInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProyectoCreateWithoutLiderInput_1.ProyectoCreateWithoutLiderInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoCreateNestedManyWithoutLiderInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProyectoCreateOrConnectWithoutLiderInput_1.ProyectoCreateOrConnectWithoutLiderInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoCreateNestedManyWithoutLiderInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateManyLiderInputEnvelope_1.ProyectoCreateManyLiderInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateManyLiderInputEnvelope_1.ProyectoCreateManyLiderInputEnvelope)
], ProyectoCreateNestedManyWithoutLiderInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoCreateNestedManyWithoutLiderInput.prototype, "connect", void 0);
ProyectoCreateNestedManyWithoutLiderInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoCreateNestedManyWithoutLiderInput", {
        isAbstract: true
    })
], ProyectoCreateNestedManyWithoutLiderInput);
exports.ProyectoCreateNestedManyWithoutLiderInput = ProyectoCreateNestedManyWithoutLiderInput;
