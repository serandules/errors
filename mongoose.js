module.exports.OK = 0;
module.exports.InternalError = 1;
module.exports.BadValue = 2;
module.exports.OBSOLETE_DuplicateKey = 3;
module.exports.NoSuchKey = 4;
module.exports.GraphContainsCycle = 5;
module.exports.HostUnreachable = 6;
module.exports.HostNotFound = 7;
module.exports.UnknownError = 8;
module.exports.FailedToParse = 9;
module.exports.CannotMutateObject = 10;
module.exports.UserNotFound = 11;
module.exports.UnsupportedFormat = 12;
module.exports.Unauthorized = 13;
module.exports.TypeMismatch = 14;
module.exports.Overflow = 15;
module.exports.InvalidLength = 16;
module.exports.ProtocolError = 17;
module.exports.AuthenticationFailed = 18;
module.exports.CannotReuseObject = 19;
module.exports.IllegalOperation = 20;
module.exports.EmptyArrayOperation = 21;
module.exports.InvalidBSON = 22;
module.exports.AlreadyInitialized = 23;
module.exports.LockTimeout = 24;
module.exports.RemoteValidationError = 25;
module.exports.NamespaceNotFound = 26;
module.exports.IndexNotFound = 27;
module.exports.PathNotViable = 28;
module.exports.NonExistentPath = 29;
module.exports.InvalidPath = 30;
module.exports.RoleNotFound = 31;
module.exports.RolesNotRelated = 32;
module.exports.PrivilegeNotFound = 33;
module.exports.CannotBackfillArray = 34;
module.exports.UserModificationFailed = 35;
module.exports.RemoteChangeDetected = 36;
module.exports.FileRenameFailed = 37;
module.exports.FileNotOpen = 38;
module.exports.FileStreamFailed = 39;
module.exports.ConflictingUpdateOperators = 40;
module.exports.FileAlreadyOpen = 41;
module.exports.LogWriteFailed = 42;
module.exports.CursorNotFound = 43;
module.exports.UserDataInconsistent = 45;
module.exports.LockBusy = 46;
module.exports.NoMatchingDocument = 47;
module.exports.NamespaceExists = 48;
module.exports.InvalidRoleModification = 49;
module.exports.ExceededTimeLimit = 50;
module.exports.ManualInterventionRequired = 51;
module.exports.DollarPrefixedFieldName = 52;
module.exports.InvalidIdField = 53;
module.exports.NotSingleValueField = 54;
module.exports.InvalidDBRef = 55;
module.exports.EmptyFieldName = 56;
module.exports.DottedFieldName = 57;
module.exports.RoleModificationFailed = 58;
module.exports.CommandNotFound = 59;
module.exports.OBSOLETE_DatabaseNotFound = 60;
module.exports.ShardKeyNotFound = 61;
module.exports.OplogOperationUnsupported = 62;
module.exports.StaleShardVersion = 63;
module.exports.WriteConcernFailed = 64;
module.exports.MultipleErrorsOccurred = 65;
module.exports.ImmutableField = 66;
module.exports.CannotCreateIndex = 67;
module.exports.IndexAlreadyExists = 68;
module.exports.AuthSchemaIncompatible = 69;
module.exports.ShardNotFound = 70;
module.exports.ReplicaSetNotFound = 71;
module.exports.InvalidOptions = 72;
module.exports.InvalidNamespace = 73;
module.exports.NodeNotFound = 74;
module.exports.WriteConcernLegacyOK = 75;
module.exports.NoReplicationEnabled = 76;
module.exports.OperationIncomplete = 77;
module.exports.CommandResultSchemaViolation = 78;
module.exports.UnknownReplWriteConcern = 79;
module.exports.RoleDataInconsistent = 80;
module.exports.NoMatchParseContext = 81;
module.exports.NoProgressMade = 82;
module.exports.RemoteResultsUnavailable = 83;
module.exports.DuplicateKeyValue = 84;
module.exports.IndexOptionsConflict = 85;
module.exports.IndexKeySpecsConflict = 86;
module.exports.CannotSplit = 87;
module.exports.SplitFailed_OBSOLETE = 88;
module.exports.NetworkTimeout = 89;
module.exports.CallbackCanceled = 90;
module.exports.ShutdownInProgress = 91;
module.exports.SecondaryAheadOfPrimary = 92;
module.exports.InvalidReplicaSetConfig = 93;
module.exports.NotYetInitialized = 94;
module.exports.NotSecondary = 95;
module.exports.OperationFailed = 96;
module.exports.NoProjectionFound = 97;
module.exports.DBPathInUse = 98;
module.exports.CannotSatisfyWriteConcern = 100;
module.exports.OutdatedClient = 101;
module.exports.IncompatibleAuditMetadata = 102;
module.exports.NewReplicaSetConfigurationIncompatible = 103;
module.exports.NodeNotElectable = 104;
module.exports.IncompatibleShardingMetadata = 105;
module.exports.DistributedClockSkewed = 106;
module.exports.LockFailed = 107;
module.exports.InconsistentReplicaSetNames = 108;
module.exports.ConfigurationInProgress = 109;
module.exports.CannotInitializeNodeWithData = 110;
module.exports.NotExactValueField = 111;
module.exports.WriteConflict = 112;
module.exports.InitialSyncFailure = 113;
module.exports.InitialSyncOplogSourceMissing = 114;
module.exports.CommandNotSupported = 115;
module.exports.DocTooLargeForCapped = 116;
module.exports.ConflictingOperationInProgress = 117;
module.exports.NamespaceNotSharded = 118;
module.exports.InvalidSyncSource = 119;
module.exports.OplogStartMissing = 120;
module.exports.DocumentValidationFailure = 121;
module.exports.OBSOLETE_ReadAfterOptimeTimeout = 122;
module.exports.NotAReplicaSet = 123;
module.exports.IncompatibleElectionProtocol = 124;
module.exports.CommandFailed = 125;
module.exports.RPCProtocolNegotiationFailed = 126;
module.exports.UnrecoverableRollbackError = 127;
module.exports.LockNotFound = 128;
module.exports.LockStateChangeFailed = 129;
module.exports.SymbolNotFound = 130;
module.exports.RLPInitializationFailed = 131;
module.exports.ConfigServersInconsistent = 132;
module.exports.FailedToSatisfyReadPreference = 133;
module.exports.ReadConcernMajorityNotAvailableYet = 134;
module.exports.StaleTerm = 135;
module.exports.CappedPositionLost = 136;
module.exports.IncompatibleShardingConfigVersion = 137;
module.exports.RemoteOplogStale = 138;
module.exports.JSInterpreterFailure = 139;
module.exports.InvalidSSLConfiguration = 140;
module.exports.SSLHandshakeFailed = 141;
module.exports.JSUncatchableError = 142;
module.exports.CursorInUse = 143;
module.exports.IncompatibleCatalogManager = 144;
module.exports.PooledConnectionsDropped = 145;
module.exports.ExceededMemoryLimit = 146;
module.exports.ZLibError = 147;
module.exports.ReadConcernMajorityNotEnabled = 148;
module.exports.NoConfigMaster = 149;
module.exports.StaleEpoch = 150;
module.exports.OperationCannotBeBatched = 151;
module.exports.OplogOutOfOrder = 152;
module.exports.ChunkTooBig = 153;
module.exports.InconsistentShardIdentity = 154;
module.exports.CannotApplyOplogWhilePrimary = 155;
module.exports.NeedsDocumentMove = 156;
module.exports.CanRepairToDowngrade = 157;
module.exports.MustUpgrade = 158;
module.exports.DurationOverflow = 159;
module.exports.MaxStalenessOutOfRange = 160;
module.exports.IncompatibleCollationVersion = 161;


module.exports.SocketException = 9001;
module.exports.RecvStaleConfig = 9996;
module.exports.NotMaster = 10107;
module.exports.CannotGrowDocumentInCappedNamespace = 10003;
module.exports.DuplicateKey = 11000;
module.exports.InterruptedAtShutdown = 11600;
module.exports.Interrupted = 11601;
module.exports.InterruptedDueToReplStateChange = 11602;
module.exports.OutOfDiskSpace = 14031;
module.exports.KeyTooLong = 17280;
module.exports.BackgroundOperationInProgressForDatabase = 12586;
module.exports.BackgroundOperationInProgressForNamespace = 12587;
module.exports.NotMasterOrSecondary = 13436;
module.exports.NotMasterNoSlaveOk = 13435;
module.exports.ShardKeyTooBig = 13334;
module.exports.SendStaleConfig = 13388;
module.exports.DatabaseDifferCase = 13297;
module.exports.OBSOLETE_PrepareConfigsFailed = 13104;


module.exports.NetworkError = [
  module.exports.HostUnreachable,
  module.exports.HostNotFound,
  module.exports.NetworkTimeout
];
module.exports.Interruption = [
  module.exports.Interrupted,
  module.exports.InterruptedAtShutdown,
  module.exports.InterruptedDueToReplStateChange,
  module.exports.ExceededTimeLimit
];
module.exports.NotMasterError = [module.exports.NotMaster, module.exports.NotMasterNoSlaveOk];
module.exports.StaleShardingError = [
  module.exports.RecvStaleConfig,
  module.exports.SendStaleConfig,
  module.exports.StaleShardVersion,
  module.exports.StaleEpoch
];
module.exports.WriteConcernError = [
  module.exports.WriteConcernFailed,
  module.exports.WriteConcernLegacyOK,
  module.exports.UnknownReplWriteConcern,
  module.exports.CannotSatisfyWriteConcern
];