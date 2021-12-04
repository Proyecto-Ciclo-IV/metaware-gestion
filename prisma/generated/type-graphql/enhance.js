"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = (0, tslib_1.__importStar)(require("tslib"));
const crudResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = (0, tslib_1.__importStar)(require("./resolvers/crud/args.index"));
const actionResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = (0, tslib_1.__importStar)(require("./resolvers/relations/resolvers.index"));
const models = (0, tslib_1.__importStar)(require("./models"));
const outputTypes = (0, tslib_1.__importStar)(require("./resolvers/outputs"));
const inputTypes = (0, tslib_1.__importStar)(require("./resolvers/inputs"));
const crudResolversMap = {
    Account: crudResolvers.AccountCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    User: crudResolvers.UserCrudResolver,
    VerificationToken: crudResolvers.VerificationTokenCrudResolver,
    Proyecto: crudResolvers.ProyectoCrudResolver,
    Objetivo: crudResolvers.ObjetivoCrudResolver,
    Avance: crudResolvers.AvanceCrudResolver,
    Inscripcion: crudResolvers.InscripcionCrudResolver
};
const actionResolversMap = {
    Account: {
        account: actionResolvers.FindUniqueAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        createAccount: actionResolvers.CreateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        deleteAccount: actionResolvers.DeleteAccountResolver,
        updateAccount: actionResolvers.UpdateAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        upsertAccount: actionResolvers.UpsertAccountResolver,
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver
    },
    Session: {
        session: actionResolvers.FindUniqueSessionResolver,
        findFirstSession: actionResolvers.FindFirstSessionResolver,
        sessions: actionResolvers.FindManySessionResolver,
        createSession: actionResolvers.CreateSessionResolver,
        createManySession: actionResolvers.CreateManySessionResolver,
        deleteSession: actionResolvers.DeleteSessionResolver,
        updateSession: actionResolvers.UpdateSessionResolver,
        deleteManySession: actionResolvers.DeleteManySessionResolver,
        updateManySession: actionResolvers.UpdateManySessionResolver,
        upsertSession: actionResolvers.UpsertSessionResolver,
        aggregateSession: actionResolvers.AggregateSessionResolver,
        groupBySession: actionResolvers.GroupBySessionResolver
    },
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    },
    VerificationToken: {
        verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
        findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
        verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
        createVerificationToken: actionResolvers.CreateVerificationTokenResolver,
        createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
        deleteVerificationToken: actionResolvers.DeleteVerificationTokenResolver,
        updateVerificationToken: actionResolvers.UpdateVerificationTokenResolver,
        deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
        updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
        upsertVerificationToken: actionResolvers.UpsertVerificationTokenResolver,
        aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
        groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver
    },
    Proyecto: {
        proyecto: actionResolvers.FindUniqueProyectoResolver,
        findFirstProyecto: actionResolvers.FindFirstProyectoResolver,
        proyectos: actionResolvers.FindManyProyectoResolver,
        createProyecto: actionResolvers.CreateProyectoResolver,
        createManyProyecto: actionResolvers.CreateManyProyectoResolver,
        deleteProyecto: actionResolvers.DeleteProyectoResolver,
        updateProyecto: actionResolvers.UpdateProyectoResolver,
        deleteManyProyecto: actionResolvers.DeleteManyProyectoResolver,
        updateManyProyecto: actionResolvers.UpdateManyProyectoResolver,
        upsertProyecto: actionResolvers.UpsertProyectoResolver,
        aggregateProyecto: actionResolvers.AggregateProyectoResolver,
        groupByProyecto: actionResolvers.GroupByProyectoResolver
    },
    Objetivo: {
        objetivo: actionResolvers.FindUniqueObjetivoResolver,
        findFirstObjetivo: actionResolvers.FindFirstObjetivoResolver,
        objetivos: actionResolvers.FindManyObjetivoResolver,
        createObjetivo: actionResolvers.CreateObjetivoResolver,
        createManyObjetivo: actionResolvers.CreateManyObjetivoResolver,
        deleteObjetivo: actionResolvers.DeleteObjetivoResolver,
        updateObjetivo: actionResolvers.UpdateObjetivoResolver,
        deleteManyObjetivo: actionResolvers.DeleteManyObjetivoResolver,
        updateManyObjetivo: actionResolvers.UpdateManyObjetivoResolver,
        upsertObjetivo: actionResolvers.UpsertObjetivoResolver,
        aggregateObjetivo: actionResolvers.AggregateObjetivoResolver,
        groupByObjetivo: actionResolvers.GroupByObjetivoResolver
    },
    Avance: {
        avance: actionResolvers.FindUniqueAvanceResolver,
        findFirstAvance: actionResolvers.FindFirstAvanceResolver,
        avances: actionResolvers.FindManyAvanceResolver,
        createAvance: actionResolvers.CreateAvanceResolver,
        createManyAvance: actionResolvers.CreateManyAvanceResolver,
        deleteAvance: actionResolvers.DeleteAvanceResolver,
        updateAvance: actionResolvers.UpdateAvanceResolver,
        deleteManyAvance: actionResolvers.DeleteManyAvanceResolver,
        updateManyAvance: actionResolvers.UpdateManyAvanceResolver,
        upsertAvance: actionResolvers.UpsertAvanceResolver,
        aggregateAvance: actionResolvers.AggregateAvanceResolver,
        groupByAvance: actionResolvers.GroupByAvanceResolver
    },
    Inscripcion: {
        inscripcion: actionResolvers.FindUniqueInscripcionResolver,
        findFirstInscripcion: actionResolvers.FindFirstInscripcionResolver,
        inscripcions: actionResolvers.FindManyInscripcionResolver,
        createInscripcion: actionResolvers.CreateInscripcionResolver,
        createManyInscripcion: actionResolvers.CreateManyInscripcionResolver,
        deleteInscripcion: actionResolvers.DeleteInscripcionResolver,
        updateInscripcion: actionResolvers.UpdateInscripcionResolver,
        deleteManyInscripcion: actionResolvers.DeleteManyInscripcionResolver,
        updateManyInscripcion: actionResolvers.UpdateManyInscripcionResolver,
        upsertInscripcion: actionResolvers.UpsertInscripcionResolver,
        aggregateInscripcion: actionResolvers.AggregateInscripcionResolver,
        groupByInscripcion: actionResolvers.GroupByInscripcionResolver
    }
};
const crudResolversInfo = {
    Account: ["account", "findFirstAccount", "accounts", "createAccount", "createManyAccount", "deleteAccount", "updateAccount", "deleteManyAccount", "updateManyAccount", "upsertAccount", "aggregateAccount", "groupByAccount"],
    Session: ["session", "findFirstSession", "sessions", "createSession", "createManySession", "deleteSession", "updateSession", "deleteManySession", "updateManySession", "upsertSession", "aggregateSession", "groupBySession"],
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
    VerificationToken: ["verificationToken", "findFirstVerificationToken", "verificationTokens", "createVerificationToken", "createManyVerificationToken", "deleteVerificationToken", "updateVerificationToken", "deleteManyVerificationToken", "updateManyVerificationToken", "upsertVerificationToken", "aggregateVerificationToken", "groupByVerificationToken"],
    Proyecto: ["proyecto", "findFirstProyecto", "proyectos", "createProyecto", "createManyProyecto", "deleteProyecto", "updateProyecto", "deleteManyProyecto", "updateManyProyecto", "upsertProyecto", "aggregateProyecto", "groupByProyecto"],
    Objetivo: ["objetivo", "findFirstObjetivo", "objetivos", "createObjetivo", "createManyObjetivo", "deleteObjetivo", "updateObjetivo", "deleteManyObjetivo", "updateManyObjetivo", "upsertObjetivo", "aggregateObjetivo", "groupByObjetivo"],
    Avance: ["avance", "findFirstAvance", "avances", "createAvance", "createManyAvance", "deleteAvance", "updateAvance", "deleteManyAvance", "updateManyAvance", "upsertAvance", "aggregateAvance", "groupByAvance"],
    Inscripcion: ["inscripcion", "findFirstInscripcion", "inscripcions", "createInscripcion", "createManyInscripcion", "deleteInscripcion", "updateInscripcion", "deleteManyInscripcion", "updateManyInscripcion", "upsertInscripcion", "aggregateInscripcion", "groupByInscripcion"]
};
const argsInfo = {
    FindUniqueAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAccountArgs: ["data"],
    CreateManyAccountArgs: ["data", "skipDuplicates"],
    DeleteAccountArgs: ["where"],
    UpdateAccountArgs: ["data", "where"],
    DeleteManyAccountArgs: ["where"],
    UpdateManyAccountArgs: ["data", "where"],
    UpsertAccountArgs: ["where", "create", "update"],
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueSessionArgs: ["where"],
    FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateSessionArgs: ["data"],
    CreateManySessionArgs: ["data", "skipDuplicates"],
    DeleteSessionArgs: ["where"],
    UpdateSessionArgs: ["data", "where"],
    DeleteManySessionArgs: ["where"],
    UpdateManySessionArgs: ["data", "where"],
    UpsertSessionArgs: ["where", "create", "update"],
    AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueVerificationTokenArgs: ["where"],
    FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateVerificationTokenArgs: ["data"],
    CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
    DeleteVerificationTokenArgs: ["where"],
    UpdateVerificationTokenArgs: ["data", "where"],
    DeleteManyVerificationTokenArgs: ["where"],
    UpdateManyVerificationTokenArgs: ["data", "where"],
    UpsertVerificationTokenArgs: ["where", "create", "update"],
    AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueProyectoArgs: ["where"],
    FindFirstProyectoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProyectoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateProyectoArgs: ["data"],
    CreateManyProyectoArgs: ["data", "skipDuplicates"],
    DeleteProyectoArgs: ["where"],
    UpdateProyectoArgs: ["data", "where"],
    DeleteManyProyectoArgs: ["where"],
    UpdateManyProyectoArgs: ["data", "where"],
    UpsertProyectoArgs: ["where", "create", "update"],
    AggregateProyectoArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByProyectoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueObjetivoArgs: ["where"],
    FindFirstObjetivoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyObjetivoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateObjetivoArgs: ["data"],
    CreateManyObjetivoArgs: ["data", "skipDuplicates"],
    DeleteObjetivoArgs: ["where"],
    UpdateObjetivoArgs: ["data", "where"],
    DeleteManyObjetivoArgs: ["where"],
    UpdateManyObjetivoArgs: ["data", "where"],
    UpsertObjetivoArgs: ["where", "create", "update"],
    AggregateObjetivoArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByObjetivoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueAvanceArgs: ["where"],
    FindFirstAvanceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAvanceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAvanceArgs: ["data"],
    CreateManyAvanceArgs: ["data", "skipDuplicates"],
    DeleteAvanceArgs: ["where"],
    UpdateAvanceArgs: ["data", "where"],
    DeleteManyAvanceArgs: ["where"],
    UpdateManyAvanceArgs: ["data", "where"],
    UpsertAvanceArgs: ["where", "create", "update"],
    AggregateAvanceArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAvanceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueInscripcionArgs: ["where"],
    FindFirstInscripcionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyInscripcionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateInscripcionArgs: ["data"],
    CreateManyInscripcionArgs: ["data", "skipDuplicates"],
    DeleteInscripcionArgs: ["where"],
    UpdateInscripcionArgs: ["data", "where"],
    DeleteManyInscripcionArgs: ["where"],
    UpdateManyInscripcionArgs: ["data", "where"],
    UpsertInscripcionArgs: ["where", "create", "update"],
    AggregateInscripcionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByInscripcionArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Account: relationResolvers.AccountRelationsResolver,
    Session: relationResolvers.SessionRelationsResolver,
    User: relationResolvers.UserRelationsResolver,
    Proyecto: relationResolvers.ProyectoRelationsResolver,
    Objetivo: relationResolvers.ObjetivoRelationsResolver,
    Avance: relationResolvers.AvanceRelationsResolver,
    Inscripcion: relationResolvers.InscripcionRelationsResolver
};
const relationResolversInfo = {
    Account: ["user"],
    Session: ["user"],
    User: ["proyectosLiderados", "avancesCreados", "inscripciones", "accounts", "sessions"],
    Proyecto: ["lider", "objetivos", "avances", "inscripciones"],
    Objetivo: ["proyecto"],
    Avance: ["proyecto", "creadoPor"],
    Inscripcion: ["proyecto", "estudiante"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Account: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    Session: ["id", "sessionToken", "userId", "expires"],
    User: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado"],
    VerificationToken: ["identifier", "token", "expires"],
    Proyecto: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "UserId", "estado", "fase"],
    Objetivo: ["id", "descripcion", "tipo", "proyectoId"],
    Avance: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "UserId"],
    Inscripcion: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "UserId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
    AccountGroupBy: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateSession: ["_count", "_min", "_max"],
    SessionGroupBy: ["id", "sessionToken", "userId", "expires", "_count", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "_count", "_min", "_max"],
    AggregateVerificationToken: ["_count", "_min", "_max"],
    VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
    AggregateProyecto: ["_count", "_avg", "_sum", "_min", "_max"],
    ProyectoGroupBy: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "UserId", "estado", "fase", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateObjetivo: ["_count", "_min", "_max"],
    ObjetivoGroupBy: ["id", "descripcion", "tipo", "proyectoId", "_count", "_min", "_max"],
    AggregateAvance: ["_count", "_min", "_max"],
    AvanceGroupBy: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "UserId", "_count", "_min", "_max"],
    AggregateInscripcion: ["_count", "_min", "_max"],
    InscripcionGroupBy: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "UserId", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AccountCountAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "_all"],
    AccountAvgAggregate: ["expires_at"],
    AccountSumAggregate: ["expires_at"],
    AccountMinAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountMaxAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionCountAggregate: ["id", "sessionToken", "userId", "expires", "_all"],
    SessionMinAggregate: ["id", "sessionToken", "userId", "expires"],
    SessionMaxAggregate: ["id", "sessionToken", "userId", "expires"],
    UserCount: ["proyectosLiderados", "avancesCreados", "inscripciones", "accounts", "sessions"],
    UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "_all"],
    UserMinAggregate: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado"],
    UserMaxAggregate: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado"],
    VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
    VerificationTokenMinAggregate: ["identifier", "token", "expires"],
    VerificationTokenMaxAggregate: ["identifier", "token", "expires"],
    ProyectoCount: ["objetivos", "avances", "inscripciones"],
    ProyectoCountAggregate: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "UserId", "estado", "fase", "_all"],
    ProyectoAvgAggregate: ["presupuesto"],
    ProyectoSumAggregate: ["presupuesto"],
    ProyectoMinAggregate: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "UserId", "estado", "fase"],
    ProyectoMaxAggregate: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "UserId", "estado", "fase"],
    ObjetivoCountAggregate: ["id", "descripcion", "tipo", "proyectoId", "_all"],
    ObjetivoMinAggregate: ["id", "descripcion", "tipo", "proyectoId"],
    ObjetivoMaxAggregate: ["id", "descripcion", "tipo", "proyectoId"],
    AvanceCountAggregate: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "UserId", "_all"],
    AvanceMinAggregate: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "UserId"],
    AvanceMaxAggregate: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "UserId"],
    InscripcionCountAggregate: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "UserId", "_all"],
    InscripcionMinAggregate: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "UserId"],
    InscripcionMaxAggregate: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "UserId"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "user"],
    AccountOrderByWithRelationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "user"],
    AccountWhereUniqueInput: ["id", "provider_providerAccountId"],
    AccountOrderByWithAggregationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "_count", "_avg", "_max", "_min", "_sum"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires", "user"],
    SessionOrderByWithRelationInput: ["id", "sessionToken", "userId", "expires", "user"],
    SessionWhereUniqueInput: ["id", "sessionToken"],
    SessionOrderByWithAggregationInput: ["id", "sessionToken", "userId", "expires", "_count", "_max", "_min"],
    SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados", "inscripciones", "accounts", "sessions"],
    UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados", "inscripciones", "accounts", "sessions"],
    UserWhereUniqueInput: ["id", "email"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado"],
    VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
    VerificationTokenWhereUniqueInput: ["token", "identifier_token"],
    VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
    VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    ProyectoWhereInput: ["AND", "OR", "NOT", "id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "lider", "UserId", "estado", "fase", "objetivos", "avances", "inscripciones"],
    ProyectoOrderByWithRelationInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "lider", "UserId", "estado", "fase", "objetivos", "avances", "inscripciones"],
    ProyectoWhereUniqueInput: ["id"],
    ProyectoOrderByWithAggregationInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "UserId", "estado", "fase", "_count", "_avg", "_max", "_min", "_sum"],
    ProyectoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "UserId", "estado", "fase"],
    ObjetivoWhereInput: ["AND", "OR", "NOT", "id", "descripcion", "tipo", "proyecto", "proyectoId"],
    ObjetivoOrderByWithRelationInput: ["id", "descripcion", "tipo", "proyecto", "proyectoId"],
    ObjetivoWhereUniqueInput: ["id"],
    ObjetivoOrderByWithAggregationInput: ["id", "descripcion", "tipo", "proyectoId", "_count", "_max", "_min"],
    ObjetivoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "descripcion", "tipo", "proyectoId"],
    AvanceWhereInput: ["AND", "OR", "NOT", "id", "fecha", "descripcion", "observaciones", "proyecto", "proyectoId", "creadoPor", "UserId"],
    AvanceOrderByWithRelationInput: ["id", "fecha", "descripcion", "observaciones", "proyecto", "proyectoId", "creadoPor", "UserId"],
    AvanceWhereUniqueInput: ["id"],
    AvanceOrderByWithAggregationInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "UserId", "_count", "_max", "_min"],
    AvanceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "fecha", "descripcion", "observaciones", "proyectoId", "UserId"],
    InscripcionWhereInput: ["AND", "OR", "NOT", "id", "estado", "fechaIngreso", "fechaEgreso", "proyecto", "proyectoId", "estudiante", "UserId"],
    InscripcionOrderByWithRelationInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyecto", "proyectoId", "estudiante", "UserId"],
    InscripcionWhereUniqueInput: ["id"],
    InscripcionOrderByWithAggregationInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "UserId", "_count", "_max", "_min"],
    InscripcionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "UserId"],
    AccountCreateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "user"],
    AccountUpdateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "user"],
    AccountCreateManyInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountUpdateManyMutationInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionCreateInput: ["id", "sessionToken", "expires", "user"],
    SessionUpdateInput: ["id", "sessionToken", "expires", "user"],
    SessionCreateManyInput: ["id", "sessionToken", "userId", "expires"],
    SessionUpdateManyMutationInput: ["id", "sessionToken", "expires"],
    UserCreateInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados", "inscripciones", "accounts", "sessions"],
    UserUpdateInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados", "inscripciones", "accounts", "sessions"],
    UserCreateManyInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado"],
    UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado"],
    VerificationTokenCreateInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateInput: ["identifier", "token", "expires"],
    VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
    ProyectoCreateInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "objetivos", "avances", "inscripciones"],
    ProyectoUpdateInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "objetivos", "avances", "inscripciones"],
    ProyectoCreateManyInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "UserId", "estado", "fase"],
    ProyectoUpdateManyMutationInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase"],
    ObjetivoCreateInput: ["id", "descripcion", "tipo", "proyecto"],
    ObjetivoUpdateInput: ["id", "descripcion", "tipo", "proyecto"],
    ObjetivoCreateManyInput: ["id", "descripcion", "tipo", "proyectoId"],
    ObjetivoUpdateManyMutationInput: ["id", "descripcion", "tipo"],
    AvanceCreateInput: ["id", "fecha", "descripcion", "observaciones", "proyecto", "creadoPor"],
    AvanceUpdateInput: ["id", "fecha", "descripcion", "observaciones", "proyecto", "creadoPor"],
    AvanceCreateManyInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "UserId"],
    AvanceUpdateManyMutationInput: ["id", "fecha", "descripcion", "observaciones"],
    InscripcionCreateInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyecto", "estudiante"],
    InscripcionUpdateInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyecto", "estudiante"],
    InscripcionCreateManyInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "UserId"],
    InscripcionUpdateManyMutationInput: ["id", "estado", "fechaIngreso", "fechaEgreso"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
    AccountCountOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountAvgOrderByAggregateInput: ["expires_at"],
    AccountMaxOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountMinOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountSumOrderByAggregateInput: ["expires_at"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    SessionCountOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionMaxOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionMinOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    EnumEnum_RolFilter: ["equals", "in", "notIn", "not"],
    EnumEnum_EstadoUserFilter: ["equals", "in", "notIn", "not"],
    ProyectoListRelationFilter: ["every", "some", "none"],
    AvanceListRelationFilter: ["every", "some", "none"],
    InscripcionListRelationFilter: ["every", "some", "none"],
    AccountListRelationFilter: ["every", "some", "none"],
    SessionListRelationFilter: ["every", "some", "none"],
    ProyectoOrderByRelationAggregateInput: ["_count"],
    AvanceOrderByRelationAggregateInput: ["_count"],
    InscripcionOrderByRelationAggregateInput: ["_count"],
    AccountOrderByRelationAggregateInput: ["_count"],
    SessionOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    EnumEnum_RolWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    EnumEnum_EstadoUserWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
    VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    EnumEnum_EstadoProyectoFilter: ["equals", "in", "notIn", "not"],
    EnumEnum_FaseProyectoFilter: ["equals", "in", "notIn", "not"],
    ObjetivoListRelationFilter: ["every", "some", "none"],
    ObjetivoOrderByRelationAggregateInput: ["_count"],
    ProyectoCountOrderByAggregateInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "UserId", "estado", "fase"],
    ProyectoAvgOrderByAggregateInput: ["presupuesto"],
    ProyectoMaxOrderByAggregateInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "UserId", "estado", "fase"],
    ProyectoMinOrderByAggregateInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "UserId", "estado", "fase"],
    ProyectoSumOrderByAggregateInput: ["presupuesto"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    EnumEnum_EstadoProyectoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    EnumEnum_FaseProyectoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    EnumEnum_TipoObjetivoFilter: ["equals", "in", "notIn", "not"],
    ProyectoRelationFilter: ["is", "isNot"],
    ObjetivoCountOrderByAggregateInput: ["id", "descripcion", "tipo", "proyectoId"],
    ObjetivoMaxOrderByAggregateInput: ["id", "descripcion", "tipo", "proyectoId"],
    ObjetivoMinOrderByAggregateInput: ["id", "descripcion", "tipo", "proyectoId"],
    EnumEnum_TipoObjetivoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    AvanceCountOrderByAggregateInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "UserId"],
    AvanceMaxOrderByAggregateInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "UserId"],
    AvanceMinOrderByAggregateInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "UserId"],
    EnumEnum_EstadoInscripcionFilter: ["equals", "in", "notIn", "not"],
    InscripcionCountOrderByAggregateInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "UserId"],
    InscripcionMaxOrderByAggregateInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "UserId"],
    InscripcionMinOrderByAggregateInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "UserId"],
    EnumEnum_EstadoInscripcionWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutAccountsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutSessionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ProyectoCreateNestedManyWithoutLiderInput: ["create", "connectOrCreate", "createMany", "connect"],
    AvanceCreateNestedManyWithoutCreadoPorInput: ["create", "connectOrCreate", "createMany", "connect"],
    InscripcionCreateNestedManyWithoutEstudianteInput: ["create", "connectOrCreate", "createMany", "connect"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    EnumEnum_RolFieldUpdateOperationsInput: ["set"],
    EnumEnum_EstadoUserFieldUpdateOperationsInput: ["set"],
    ProyectoUpdateManyWithoutLiderInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AvanceUpdateManyWithoutCreadoPorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    InscripcionUpdateManyWithoutEstudianteInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AccountUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SessionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutProyectosLideradosInput: ["create", "connectOrCreate", "connect"],
    ObjetivoCreateNestedManyWithoutProyectoInput: ["create", "connectOrCreate", "createMany", "connect"],
    AvanceCreateNestedManyWithoutProyectoInput: ["create", "connectOrCreate", "createMany", "connect"],
    InscripcionCreateNestedManyWithoutProyectoInput: ["create", "connectOrCreate", "createMany", "connect"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    EnumEnum_EstadoProyectoFieldUpdateOperationsInput: ["set"],
    EnumEnum_FaseProyectoFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutProyectosLideradosInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ObjetivoUpdateManyWithoutProyectoInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AvanceUpdateManyWithoutProyectoInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    InscripcionUpdateManyWithoutProyectoInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProyectoCreateNestedOneWithoutObjetivosInput: ["create", "connectOrCreate", "connect"],
    EnumEnum_TipoObjetivoFieldUpdateOperationsInput: ["set"],
    ProyectoUpdateOneRequiredWithoutObjetivosInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ProyectoCreateNestedOneWithoutAvancesInput: ["create", "connectOrCreate", "connect"],
    UserCreateNestedOneWithoutAvancesCreadosInput: ["create", "connectOrCreate", "connect"],
    ProyectoUpdateOneRequiredWithoutAvancesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserUpdateOneRequiredWithoutAvancesCreadosInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ProyectoCreateNestedOneWithoutInscripcionesInput: ["create", "connectOrCreate", "connect"],
    UserCreateNestedOneWithoutInscripcionesInput: ["create", "connectOrCreate", "connect"],
    EnumEnum_EstadoInscripcionFieldUpdateOperationsInput: ["set"],
    ProyectoUpdateOneRequiredWithoutInscripcionesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserUpdateOneRequiredWithoutInscripcionesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_RolFilter: ["equals", "in", "notIn", "not"],
    NestedEnumEnum_EstadoUserFilter: ["equals", "in", "notIn", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedEnumEnum_RolWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumEnum_EstadoUserWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_EstadoProyectoFilter: ["equals", "in", "notIn", "not"],
    NestedEnumEnum_FaseProyectoFilter: ["equals", "in", "notIn", "not"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedEnumEnum_EstadoProyectoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumEnum_FaseProyectoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumEnum_TipoObjetivoFilter: ["equals", "in", "notIn", "not"],
    NestedEnumEnum_TipoObjetivoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumEnum_EstadoInscripcionFilter: ["equals", "in", "notIn", "not"],
    NestedEnumEnum_EstadoInscripcionWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados", "inscripciones", "sessions"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    UserUpsertWithoutAccountsInput: ["update", "create"],
    UserUpdateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados", "inscripciones", "sessions"],
    UserCreateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados", "inscripciones", "accounts"],
    UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
    UserUpsertWithoutSessionsInput: ["update", "create"],
    UserUpdateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados", "inscripciones", "accounts"],
    ProyectoCreateWithoutLiderInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "objetivos", "avances", "inscripciones"],
    ProyectoCreateOrConnectWithoutLiderInput: ["where", "create"],
    ProyectoCreateManyLiderInputEnvelope: ["data", "skipDuplicates"],
    AvanceCreateWithoutCreadoPorInput: ["id", "fecha", "descripcion", "observaciones", "proyecto"],
    AvanceCreateOrConnectWithoutCreadoPorInput: ["where", "create"],
    AvanceCreateManyCreadoPorInputEnvelope: ["data", "skipDuplicates"],
    InscripcionCreateWithoutEstudianteInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyecto"],
    InscripcionCreateOrConnectWithoutEstudianteInput: ["where", "create"],
    InscripcionCreateManyEstudianteInputEnvelope: ["data", "skipDuplicates"],
    AccountCreateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    SessionCreateWithoutUserInput: ["id", "sessionToken", "expires"],
    SessionCreateOrConnectWithoutUserInput: ["where", "create"],
    SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    ProyectoUpsertWithWhereUniqueWithoutLiderInput: ["where", "update", "create"],
    ProyectoUpdateWithWhereUniqueWithoutLiderInput: ["where", "data"],
    ProyectoUpdateManyWithWhereWithoutLiderInput: ["where", "data"],
    ProyectoScalarWhereInput: ["AND", "OR", "NOT", "id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "UserId", "estado", "fase"],
    AvanceUpsertWithWhereUniqueWithoutCreadoPorInput: ["where", "update", "create"],
    AvanceUpdateWithWhereUniqueWithoutCreadoPorInput: ["where", "data"],
    AvanceUpdateManyWithWhereWithoutCreadoPorInput: ["where", "data"],
    AvanceScalarWhereInput: ["AND", "OR", "NOT", "id", "fecha", "descripcion", "observaciones", "proyectoId", "UserId"],
    InscripcionUpsertWithWhereUniqueWithoutEstudianteInput: ["where", "update", "create"],
    InscripcionUpdateWithWhereUniqueWithoutEstudianteInput: ["where", "data"],
    InscripcionUpdateManyWithWhereWithoutEstudianteInput: ["where", "data"],
    InscripcionScalarWhereInput: ["AND", "OR", "NOT", "id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "UserId"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    UserCreateWithoutProyectosLideradosInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "avancesCreados", "inscripciones", "accounts", "sessions"],
    UserCreateOrConnectWithoutProyectosLideradosInput: ["where", "create"],
    ObjetivoCreateWithoutProyectoInput: ["id", "descripcion", "tipo"],
    ObjetivoCreateOrConnectWithoutProyectoInput: ["where", "create"],
    ObjetivoCreateManyProyectoInputEnvelope: ["data", "skipDuplicates"],
    AvanceCreateWithoutProyectoInput: ["id", "fecha", "descripcion", "observaciones", "creadoPor"],
    AvanceCreateOrConnectWithoutProyectoInput: ["where", "create"],
    AvanceCreateManyProyectoInputEnvelope: ["data", "skipDuplicates"],
    InscripcionCreateWithoutProyectoInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "estudiante"],
    InscripcionCreateOrConnectWithoutProyectoInput: ["where", "create"],
    InscripcionCreateManyProyectoInputEnvelope: ["data", "skipDuplicates"],
    UserUpsertWithoutProyectosLideradosInput: ["update", "create"],
    UserUpdateWithoutProyectosLideradosInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "avancesCreados", "inscripciones", "accounts", "sessions"],
    ObjetivoUpsertWithWhereUniqueWithoutProyectoInput: ["where", "update", "create"],
    ObjetivoUpdateWithWhereUniqueWithoutProyectoInput: ["where", "data"],
    ObjetivoUpdateManyWithWhereWithoutProyectoInput: ["where", "data"],
    ObjetivoScalarWhereInput: ["AND", "OR", "NOT", "id", "descripcion", "tipo", "proyectoId"],
    AvanceUpsertWithWhereUniqueWithoutProyectoInput: ["where", "update", "create"],
    AvanceUpdateWithWhereUniqueWithoutProyectoInput: ["where", "data"],
    AvanceUpdateManyWithWhereWithoutProyectoInput: ["where", "data"],
    InscripcionUpsertWithWhereUniqueWithoutProyectoInput: ["where", "update", "create"],
    InscripcionUpdateWithWhereUniqueWithoutProyectoInput: ["where", "data"],
    InscripcionUpdateManyWithWhereWithoutProyectoInput: ["where", "data"],
    ProyectoCreateWithoutObjetivosInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "avances", "inscripciones"],
    ProyectoCreateOrConnectWithoutObjetivosInput: ["where", "create"],
    ProyectoUpsertWithoutObjetivosInput: ["update", "create"],
    ProyectoUpdateWithoutObjetivosInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "avances", "inscripciones"],
    ProyectoCreateWithoutAvancesInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "objetivos", "inscripciones"],
    ProyectoCreateOrConnectWithoutAvancesInput: ["where", "create"],
    UserCreateWithoutAvancesCreadosInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "proyectosLiderados", "inscripciones", "accounts", "sessions"],
    UserCreateOrConnectWithoutAvancesCreadosInput: ["where", "create"],
    ProyectoUpsertWithoutAvancesInput: ["update", "create"],
    ProyectoUpdateWithoutAvancesInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "objetivos", "inscripciones"],
    UserUpsertWithoutAvancesCreadosInput: ["update", "create"],
    UserUpdateWithoutAvancesCreadosInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "proyectosLiderados", "inscripciones", "accounts", "sessions"],
    ProyectoCreateWithoutInscripcionesInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "objetivos", "avances"],
    ProyectoCreateOrConnectWithoutInscripcionesInput: ["where", "create"],
    UserCreateWithoutInscripcionesInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados", "accounts", "sessions"],
    UserCreateOrConnectWithoutInscripcionesInput: ["where", "create"],
    ProyectoUpsertWithoutInscripcionesInput: ["update", "create"],
    ProyectoUpdateWithoutInscripcionesInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "objetivos", "avances"],
    UserUpsertWithoutInscripcionesInput: ["update", "create"],
    UserUpdateWithoutInscripcionesInput: ["id", "name", "email", "emailVerified", "image", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados", "accounts", "sessions"],
    ProyectoCreateManyLiderInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase"],
    AvanceCreateManyCreadoPorInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId"],
    InscripcionCreateManyEstudianteInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId"],
    AccountCreateManyUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionCreateManyUserInput: ["id", "sessionToken", "expires"],
    ProyectoUpdateWithoutLiderInput: ["id", "nombre", "descripcion", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "objetivos", "avances", "inscripciones"],
    AvanceUpdateWithoutCreadoPorInput: ["id", "fecha", "descripcion", "observaciones", "proyecto"],
    InscripcionUpdateWithoutEstudianteInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyecto"],
    AccountUpdateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionUpdateWithoutUserInput: ["id", "sessionToken", "expires"],
    ObjetivoCreateManyProyectoInput: ["id", "descripcion", "tipo"],
    AvanceCreateManyProyectoInput: ["id", "fecha", "descripcion", "observaciones", "UserId"],
    InscripcionCreateManyProyectoInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "UserId"],
    ObjetivoUpdateWithoutProyectoInput: ["id", "descripcion", "tipo"],
    AvanceUpdateWithoutProyectoInput: ["id", "fecha", "descripcion", "observaciones", "creadoPor"],
    InscripcionUpdateWithoutProyectoInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "estudiante"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
