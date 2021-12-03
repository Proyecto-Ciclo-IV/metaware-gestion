"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateOrConnectWithoutAvancesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoCreateWithoutAvancesInput_1 = require("../inputs/ProyectoCreateWithoutAvancesInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoCreateOrConnectWithoutAvancesInput = class ProyectoCreateOrConnectWithoutAvancesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoCreateOrConnectWithoutAvancesInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutAvancesInput_1.ProyectoCreateWithoutAvancesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateWithoutAvancesInput_1.ProyectoCreateWithoutAvancesInput)
], ProyectoCreateOrConnectWithoutAvancesInput.prototype, "create", void 0);
ProyectoCreateOrConnectWithoutAvancesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoCreateOrConnectWithoutAvancesInput", {
        isAbstract: true
    })
], ProyectoCreateOrConnectWithoutAvancesInput);
exports.ProyectoCreateOrConnectWithoutAvancesInput = ProyectoCreateOrConnectWithoutAvancesInput;
