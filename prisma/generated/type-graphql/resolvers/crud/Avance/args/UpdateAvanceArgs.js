"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAvanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceUpdateInput_1 = require("../../../inputs/AvanceUpdateInput");
const AvanceWhereUniqueInput_1 = require("../../../inputs/AvanceWhereUniqueInput");
let UpdateAvanceArgs = class UpdateAvanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceUpdateInput_1.AvanceUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceUpdateInput_1.AvanceUpdateInput)
], UpdateAvanceArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], UpdateAvanceArgs.prototype, "where", void 0);
UpdateAvanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateAvanceArgs);
exports.UpdateAvanceArgs = UpdateAvanceArgs;
