"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateOneRequiredWithoutObjetivosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoCreateOrConnectWithoutObjetivosInput_1 = require("../inputs/ProyectoCreateOrConnectWithoutObjetivosInput");
const ProyectoCreateWithoutObjetivosInput_1 = require("../inputs/ProyectoCreateWithoutObjetivosInput");
const ProyectoUpdateWithoutObjetivosInput_1 = require("../inputs/ProyectoUpdateWithoutObjetivosInput");
const ProyectoUpsertWithoutObjetivosInput_1 = require("../inputs/ProyectoUpsertWithoutObjetivosInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoUpdateOneRequiredWithoutObjetivosInput = class ProyectoUpdateOneRequiredWithoutObjetivosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutObjetivosInput_1.ProyectoCreateWithoutObjetivosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateWithoutObjetivosInput_1.ProyectoCreateWithoutObjetivosInput)
], ProyectoUpdateOneRequiredWithoutObjetivosInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutObjetivosInput_1.ProyectoCreateOrConnectWithoutObjetivosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateOrConnectWithoutObjetivosInput_1.ProyectoCreateOrConnectWithoutObjetivosInput)
], ProyectoUpdateOneRequiredWithoutObjetivosInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoUpsertWithoutObjetivosInput_1.ProyectoUpsertWithoutObjetivosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoUpsertWithoutObjetivosInput_1.ProyectoUpsertWithoutObjetivosInput)
], ProyectoUpdateOneRequiredWithoutObjetivosInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoUpdateOneRequiredWithoutObjetivosInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoUpdateWithoutObjetivosInput_1.ProyectoUpdateWithoutObjetivosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoUpdateWithoutObjetivosInput_1.ProyectoUpdateWithoutObjetivosInput)
], ProyectoUpdateOneRequiredWithoutObjetivosInput.prototype, "update", void 0);
ProyectoUpdateOneRequiredWithoutObjetivosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoUpdateOneRequiredWithoutObjetivosInput", {
        isAbstract: true
    })
], ProyectoUpdateOneRequiredWithoutObjetivosInput);
exports.ProyectoUpdateOneRequiredWithoutObjetivosInput = ProyectoUpdateOneRequiredWithoutObjetivosInput;
