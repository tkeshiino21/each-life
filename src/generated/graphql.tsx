import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBATransparency: any;
  RGBAHue: any;
  /** Raw JSON value */
  Json: any;
  Hex: any;
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  coverImagePost: Array<Post>;
  authorAvatar: Array<Author>;
  bookBiding: Array<Book>;
  foodImage: Array<Food>;
  photoImage: Array<Photo>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCoverImagePostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type AssetAuthorAvatarArgs = {
  where?: Maybe<AuthorWhereInput>;
  orderBy?: Maybe<AuthorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type AssetBookBidingArgs = {
  where?: Maybe<BookWhereInput>;
  orderBy?: Maybe<BookOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type AssetFoodImageArgs = {
  where?: Maybe<FoodWhereInput>;
  orderBy?: Maybe<FoodOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type AssetPhotoImageArgs = {
  where?: Maybe<PhotoWhereInput>;
  orderBy?: Maybe<PhotoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  coverImagePost?: Maybe<PostCreateManyInlineInput>;
  authorAvatar?: Maybe<AuthorCreateManyInlineInput>;
  bookBiding?: Maybe<BookCreateManyInlineInput>;
  foodImage?: Maybe<FoodCreateManyInlineInput>;
  photoImage?: Maybe<PhotoCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  coverImagePost_every?: Maybe<PostWhereInput>;
  coverImagePost_some?: Maybe<PostWhereInput>;
  coverImagePost_none?: Maybe<PostWhereInput>;
  authorAvatar_every?: Maybe<AuthorWhereInput>;
  authorAvatar_some?: Maybe<AuthorWhereInput>;
  authorAvatar_none?: Maybe<AuthorWhereInput>;
  bookBiding_every?: Maybe<BookWhereInput>;
  bookBiding_some?: Maybe<BookWhereInput>;
  bookBiding_none?: Maybe<BookWhereInput>;
  foodImage_every?: Maybe<FoodWhereInput>;
  foodImage_some?: Maybe<FoodWhereInput>;
  foodImage_none?: Maybe<FoodWhereInput>;
  photoImage_every?: Maybe<PhotoWhereInput>;
  photoImage_some?: Maybe<PhotoWhereInput>;
  photoImage_none?: Maybe<PhotoWhereInput>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  coverImagePost?: Maybe<PostUpdateManyInlineInput>;
  authorAvatar?: Maybe<AuthorUpdateManyInlineInput>;
  bookBiding?: Maybe<BookUpdateManyInlineInput>;
  foodImage?: Maybe<FoodUpdateManyInlineInput>;
  photoImage?: Maybe<PhotoUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Optional updates to localizations */
  localizations?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyLocalizationInput = {
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  coverImagePost_every?: Maybe<PostWhereInput>;
  coverImagePost_some?: Maybe<PostWhereInput>;
  coverImagePost_none?: Maybe<PostWhereInput>;
  authorAvatar_every?: Maybe<AuthorWhereInput>;
  authorAvatar_some?: Maybe<AuthorWhereInput>;
  authorAvatar_none?: Maybe<AuthorWhereInput>;
  bookBiding_every?: Maybe<BookWhereInput>;
  bookBiding_some?: Maybe<BookWhereInput>;
  bookBiding_none?: Maybe<BookWhereInput>;
  foodImage_every?: Maybe<FoodWhereInput>;
  foodImage_some?: Maybe<FoodWhereInput>;
  foodImage_none?: Maybe<FoodWhereInput>;
  photoImage_every?: Maybe<PhotoWhereInput>;
  photoImage_some?: Maybe<PhotoWhereInput>;
  photoImage_none?: Maybe<PhotoWhereInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Author = Node & {
  __typename?: 'Author';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Author>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Asset>;
  posts: Array<Post>;
  bibliography?: Maybe<Scalars['String']>;
};


export type AuthorDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type AuthorPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type AuthorConnectInput = {
  /** Document to connect */
  where: AuthorWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AuthorConnection = {
  __typename?: 'AuthorConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AuthorEdge>;
  aggregate: Aggregate;
};

export type AuthorCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<AssetCreateOneInlineInput>;
  posts?: Maybe<PostCreateManyInlineInput>;
  bibliography?: Maybe<Scalars['String']>;
};

export type AuthorCreateManyInlineInput = {
  /** Create and connect multiple existing Author documents */
  create?: Maybe<Array<AuthorCreateInput>>;
  /** Connect multiple existing Author documents */
  connect?: Maybe<Array<AuthorWhereUniqueInput>>;
};

export type AuthorCreateOneInlineInput = {
  /** Create and connect one Author document */
  create?: Maybe<AuthorCreateInput>;
  /** Connect one existing Author document */
  connect?: Maybe<AuthorWhereUniqueInput>;
};

/** An edge in a connection. */
export type AuthorEdge = {
  __typename?: 'AuthorEdge';
  /** The item at the end of the edge. */
  node: Author;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AuthorManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AuthorWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<AssetWhereInput>;
  posts_every?: Maybe<PostWhereInput>;
  posts_some?: Maybe<PostWhereInput>;
  posts_none?: Maybe<PostWhereInput>;
  bibliography?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bibliography_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bibliography_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bibliography_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  bibliography_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bibliography_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bibliography_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bibliography_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bibliography_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  bibliography_not_ends_with?: Maybe<Scalars['String']>;
};

export enum AuthorOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  BibliographyAsc = 'bibliography_ASC',
  BibliographyDesc = 'bibliography_DESC'
}

export type AuthorUpdateInput = {
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<AssetUpdateOneInlineInput>;
  posts?: Maybe<PostUpdateManyInlineInput>;
  bibliography?: Maybe<Scalars['String']>;
};

export type AuthorUpdateManyInlineInput = {
  /** Create and connect multiple Author documents */
  create?: Maybe<Array<AuthorCreateInput>>;
  /** Connect multiple existing Author documents */
  connect?: Maybe<Array<AuthorConnectInput>>;
  /** Override currently-connected documents with multiple existing Author documents */
  set?: Maybe<Array<AuthorWhereUniqueInput>>;
  /** Update multiple Author documents */
  update?: Maybe<Array<AuthorUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Author documents */
  upsert?: Maybe<Array<AuthorUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Author documents */
  disconnect?: Maybe<Array<AuthorWhereUniqueInput>>;
  /** Delete multiple Author documents */
  delete?: Maybe<Array<AuthorWhereUniqueInput>>;
};

export type AuthorUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  bibliography?: Maybe<Scalars['String']>;
};

export type AuthorUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AuthorWhereInput;
  /** Update many input */
  data: AuthorUpdateManyInput;
};

export type AuthorUpdateOneInlineInput = {
  /** Create and connect one Author document */
  create?: Maybe<AuthorCreateInput>;
  /** Update single Author document */
  update?: Maybe<AuthorUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Author document */
  upsert?: Maybe<AuthorUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Author document */
  connect?: Maybe<AuthorWhereUniqueInput>;
  /** Disconnect currently connected Author document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Author document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AuthorUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AuthorWhereUniqueInput;
  /** Document to update */
  data: AuthorUpdateInput;
};

export type AuthorUpsertInput = {
  /** Create document if it didn't exist */
  create: AuthorCreateInput;
  /** Update document if it exists */
  update: AuthorUpdateInput;
};

export type AuthorUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AuthorWhereUniqueInput;
  /** Upsert data */
  data: AuthorUpsertInput;
};

/** Identifies documents */
export type AuthorWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AuthorWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<AssetWhereInput>;
  posts_every?: Maybe<PostWhereInput>;
  posts_some?: Maybe<PostWhereInput>;
  posts_none?: Maybe<PostWhereInput>;
  bibliography?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bibliography_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bibliography_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bibliography_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  bibliography_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bibliography_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bibliography_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bibliography_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bibliography_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  bibliography_not_ends_with?: Maybe<Scalars['String']>;
};

/** References Author record uniquely */
export type AuthorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Book = Node & {
  __typename?: 'Book';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Book>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  binding: Asset;
  review: RichText;
  like: Scalars['Int'];
  comment: Array<Scalars['String']>;
};


export type BookDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type BookConnectInput = {
  /** Document to connect */
  where: BookWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type BookConnection = {
  __typename?: 'BookConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<BookEdge>;
  aggregate: Aggregate;
};

export type BookCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  binding: AssetCreateOneInlineInput;
  review: Scalars['RichTextAST'];
  like: Scalars['Int'];
  comment?: Maybe<Array<Scalars['String']>>;
};

export type BookCreateManyInlineInput = {
  /** Create and connect multiple existing Book documents */
  create?: Maybe<Array<BookCreateInput>>;
  /** Connect multiple existing Book documents */
  connect?: Maybe<Array<BookWhereUniqueInput>>;
};

export type BookCreateOneInlineInput = {
  /** Create and connect one Book document */
  create?: Maybe<BookCreateInput>;
  /** Connect one existing Book document */
  connect?: Maybe<BookWhereUniqueInput>;
};

/** An edge in a connection. */
export type BookEdge = {
  __typename?: 'BookEdge';
  /** The item at the end of the edge. */
  node: Book;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type BookManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BookWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BookWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BookWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none?: Maybe<Array<Scalars['String']>>;
  binding?: Maybe<AssetWhereInput>;
  like?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  like_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  like_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  like_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  like_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  like_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  like_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  like_gte?: Maybe<Scalars['Int']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  comment?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  comment_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  comment_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  comment_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  comment_contains_none?: Maybe<Array<Scalars['String']>>;
};

export enum BookOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC',
  LikeAsc = 'like_ASC',
  LikeDesc = 'like_DESC',
  CommentAsc = 'comment_ASC',
  CommentDesc = 'comment_DESC'
}

export type BookUpdateInput = {
  title?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  binding?: Maybe<AssetUpdateOneInlineInput>;
  review?: Maybe<Scalars['RichTextAST']>;
  like?: Maybe<Scalars['Int']>;
  comment?: Maybe<Array<Scalars['String']>>;
};

export type BookUpdateManyInlineInput = {
  /** Create and connect multiple Book documents */
  create?: Maybe<Array<BookCreateInput>>;
  /** Connect multiple existing Book documents */
  connect?: Maybe<Array<BookConnectInput>>;
  /** Override currently-connected documents with multiple existing Book documents */
  set?: Maybe<Array<BookWhereUniqueInput>>;
  /** Update multiple Book documents */
  update?: Maybe<Array<BookUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Book documents */
  upsert?: Maybe<Array<BookUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Book documents */
  disconnect?: Maybe<Array<BookWhereUniqueInput>>;
  /** Delete multiple Book documents */
  delete?: Maybe<Array<BookWhereUniqueInput>>;
};

export type BookUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  review: Scalars['RichTextAST'];
  like: Scalars['Int'];
  comment?: Maybe<Array<Scalars['String']>>;
};

export type BookUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: BookWhereInput;
  /** Update many input */
  data: BookUpdateManyInput;
};

export type BookUpdateOneInlineInput = {
  /** Create and connect one Book document */
  create?: Maybe<BookCreateInput>;
  /** Update single Book document */
  update?: Maybe<BookUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Book document */
  upsert?: Maybe<BookUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Book document */
  connect?: Maybe<BookWhereUniqueInput>;
  /** Disconnect currently connected Book document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Book document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type BookUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: BookWhereUniqueInput;
  /** Document to update */
  data: BookUpdateInput;
};

export type BookUpsertInput = {
  /** Create document if it didn't exist */
  create: BookCreateInput;
  /** Update document if it exists */
  update: BookUpdateInput;
};

export type BookUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: BookWhereUniqueInput;
  /** Upsert data */
  data: BookUpsertInput;
};

/** Identifies documents */
export type BookWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BookWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BookWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BookWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none?: Maybe<Array<Scalars['String']>>;
  binding?: Maybe<AssetWhereInput>;
  like?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  like_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  like_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  like_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  like_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  like_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  like_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  like_gte?: Maybe<Scalars['Int']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  comment?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  comment_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  comment_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  comment_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  comment_contains_none?: Maybe<Array<Scalars['String']>>;
};

/** References Book record uniquely */
export type BookWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};



export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   * 
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export type Food = Node & {
  __typename?: 'Food';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Food>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  image: Asset;
  ingredients: Array<Scalars['String']>;
  caption: Scalars['String'];
  like: Scalars['Int'];
  comment: Array<Scalars['String']>;
};


export type FoodDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type FoodConnectInput = {
  /** Document to connect */
  where: FoodWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type FoodConnection = {
  __typename?: 'FoodConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<FoodEdge>;
  aggregate: Aggregate;
};

export type FoodCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  image: AssetCreateOneInlineInput;
  ingredients?: Maybe<Array<Scalars['String']>>;
  caption: Scalars['String'];
  like: Scalars['Int'];
  comment?: Maybe<Array<Scalars['String']>>;
};

export type FoodCreateManyInlineInput = {
  /** Create and connect multiple existing Food documents */
  create?: Maybe<Array<FoodCreateInput>>;
  /** Connect multiple existing Food documents */
  connect?: Maybe<Array<FoodWhereUniqueInput>>;
};

export type FoodCreateOneInlineInput = {
  /** Create and connect one Food document */
  create?: Maybe<FoodCreateInput>;
  /** Connect one existing Food document */
  connect?: Maybe<FoodWhereUniqueInput>;
};

/** An edge in a connection. */
export type FoodEdge = {
  __typename?: 'FoodEdge';
  /** The item at the end of the edge. */
  node: Food;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type FoodManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FoodWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FoodWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FoodWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  image?: Maybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  ingredients?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  ingredients_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  ingredients_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  ingredients_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  ingredients_contains_none?: Maybe<Array<Scalars['String']>>;
  caption?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  caption_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  caption_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  caption_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  caption_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  caption_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  caption_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  caption_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  caption_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  caption_not_ends_with?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  like_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  like_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  like_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  like_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  like_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  like_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  like_gte?: Maybe<Scalars['Int']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  comment?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  comment_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  comment_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  comment_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  comment_contains_none?: Maybe<Array<Scalars['String']>>;
};

export enum FoodOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  IngredientsAsc = 'ingredients_ASC',
  IngredientsDesc = 'ingredients_DESC',
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  LikeAsc = 'like_ASC',
  LikeDesc = 'like_DESC',
  CommentAsc = 'comment_ASC',
  CommentDesc = 'comment_DESC'
}

export type FoodUpdateInput = {
  image?: Maybe<AssetUpdateOneInlineInput>;
  ingredients?: Maybe<Array<Scalars['String']>>;
  caption?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['Int']>;
  comment?: Maybe<Array<Scalars['String']>>;
};

export type FoodUpdateManyInlineInput = {
  /** Create and connect multiple Food documents */
  create?: Maybe<Array<FoodCreateInput>>;
  /** Connect multiple existing Food documents */
  connect?: Maybe<Array<FoodConnectInput>>;
  /** Override currently-connected documents with multiple existing Food documents */
  set?: Maybe<Array<FoodWhereUniqueInput>>;
  /** Update multiple Food documents */
  update?: Maybe<Array<FoodUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Food documents */
  upsert?: Maybe<Array<FoodUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Food documents */
  disconnect?: Maybe<Array<FoodWhereUniqueInput>>;
  /** Delete multiple Food documents */
  delete?: Maybe<Array<FoodWhereUniqueInput>>;
};

export type FoodUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ingredients?: Maybe<Array<Scalars['String']>>;
  caption: Scalars['String'];
  like: Scalars['Int'];
  comment?: Maybe<Array<Scalars['String']>>;
};

export type FoodUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FoodWhereInput;
  /** Update many input */
  data: FoodUpdateManyInput;
};

export type FoodUpdateOneInlineInput = {
  /** Create and connect one Food document */
  create?: Maybe<FoodCreateInput>;
  /** Update single Food document */
  update?: Maybe<FoodUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Food document */
  upsert?: Maybe<FoodUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Food document */
  connect?: Maybe<FoodWhereUniqueInput>;
  /** Disconnect currently connected Food document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Food document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type FoodUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FoodWhereUniqueInput;
  /** Document to update */
  data: FoodUpdateInput;
};

export type FoodUpsertInput = {
  /** Create document if it didn't exist */
  create: FoodCreateInput;
  /** Update document if it exists */
  update: FoodUpdateInput;
};

export type FoodUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FoodWhereUniqueInput;
  /** Upsert data */
  data: FoodUpsertInput;
};

/** Identifies documents */
export type FoodWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FoodWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FoodWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FoodWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  image?: Maybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  ingredients?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  ingredients_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  ingredients_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  ingredients_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  ingredients_contains_none?: Maybe<Array<Scalars['String']>>;
  caption?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  caption_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  caption_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  caption_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  caption_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  caption_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  caption_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  caption_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  caption_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  caption_not_ends_with?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  like_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  like_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  like_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  like_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  like_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  like_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  like_gte?: Maybe<Scalars['Int']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  comment?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  comment_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  comment_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  comment_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  comment_contains_none?: Maybe<Array<Scalars['String']>>;
};

/** References Food record uniquely */
export type FoodWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /**
   * Resizes the image to fit the specified parameters exactly by removing any
   * parts of the image that don't fit within the boundaries.
   */
  Crop = 'crop',
  /**
   * Resizes the image to fit the specified parameters exactly by scaling the image
   * to the desired size. The aspect ratio of the image is not respected and the
   * image can be distorted using this method.
   */
  Scale = 'scale',
  /**
   * Resizes the image to fit within the parameters, but as opposed to 'fit:clip'
   * will not scale the image if the image is smaller than the output size.
   */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};


/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /**
   * Unpublish one asset from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
   */
  unpublishAsset?: Maybe<Asset>;
  /** Update many assets */
  updateManyAssets: BatchPayload;
  /** Delete many Asset documents */
  deleteManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssets: BatchPayload;
  /** Unpublish many Asset documents */
  unpublishManyAssets: BatchPayload;
  /** Create one author */
  createAuthor?: Maybe<Author>;
  /** Update one author */
  updateAuthor?: Maybe<Author>;
  /** Delete one author from _all_ existing stages. Returns deleted document. */
  deleteAuthor?: Maybe<Author>;
  /** Upsert one author */
  upsertAuthor?: Maybe<Author>;
  /** Publish one author */
  publishAuthor?: Maybe<Author>;
  /**
   * Unpublish one author from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
   */
  unpublishAuthor?: Maybe<Author>;
  /** Update many authors */
  updateManyAuthors: BatchPayload;
  /** Delete many Author documents */
  deleteManyAuthors: BatchPayload;
  /** Publish many Author documents */
  publishManyAuthors: BatchPayload;
  /** Unpublish many Author documents */
  unpublishManyAuthors: BatchPayload;
  /** Create one book */
  createBook?: Maybe<Book>;
  /** Update one book */
  updateBook?: Maybe<Book>;
  /** Delete one book from _all_ existing stages. Returns deleted document. */
  deleteBook?: Maybe<Book>;
  /** Upsert one book */
  upsertBook?: Maybe<Book>;
  /** Publish one book */
  publishBook?: Maybe<Book>;
  /**
   * Unpublish one book from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
   */
  unpublishBook?: Maybe<Book>;
  /** Update many books */
  updateManyBooks: BatchPayload;
  /** Delete many Book documents */
  deleteManyBooks: BatchPayload;
  /** Publish many Book documents */
  publishManyBooks: BatchPayload;
  /** Unpublish many Book documents */
  unpublishManyBooks: BatchPayload;
  /** Create one food */
  createFood?: Maybe<Food>;
  /** Update one food */
  updateFood?: Maybe<Food>;
  /** Delete one food from _all_ existing stages. Returns deleted document. */
  deleteFood?: Maybe<Food>;
  /** Upsert one food */
  upsertFood?: Maybe<Food>;
  /** Publish one food */
  publishFood?: Maybe<Food>;
  /**
   * Unpublish one food from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
   */
  unpublishFood?: Maybe<Food>;
  /** Update many foods */
  updateManyFoods: BatchPayload;
  /** Delete many Food documents */
  deleteManyFoods: BatchPayload;
  /** Publish many Food documents */
  publishManyFoods: BatchPayload;
  /** Unpublish many Food documents */
  unpublishManyFoods: BatchPayload;
  /** Create one photo */
  createPhoto?: Maybe<Photo>;
  /** Update one photo */
  updatePhoto?: Maybe<Photo>;
  /** Delete one photo from _all_ existing stages. Returns deleted document. */
  deletePhoto?: Maybe<Photo>;
  /** Upsert one photo */
  upsertPhoto?: Maybe<Photo>;
  /** Publish one photo */
  publishPhoto?: Maybe<Photo>;
  /**
   * Unpublish one photo from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
   */
  unpublishPhoto?: Maybe<Photo>;
  /** Update many photos */
  updateManyPhotos: BatchPayload;
  /** Delete many Photo documents */
  deleteManyPhotos: BatchPayload;
  /** Publish many Photo documents */
  publishManyPhotos: BatchPayload;
  /** Unpublish many Photo documents */
  unpublishManyPhotos: BatchPayload;
  /** Create one post */
  createPost?: Maybe<Post>;
  /** Update one post */
  updatePost?: Maybe<Post>;
  /** Delete one post from _all_ existing stages. Returns deleted document. */
  deletePost?: Maybe<Post>;
  /** Upsert one post */
  upsertPost?: Maybe<Post>;
  /** Publish one post */
  publishPost?: Maybe<Post>;
  /**
   * Unpublish one post from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
   */
  unpublishPost?: Maybe<Post>;
  /** Update many posts */
  updateManyPosts: BatchPayload;
  /** Delete many Post documents */
  deleteManyPosts: BatchPayload;
  /** Publish many Post documents */
  publishManyPosts: BatchPayload;
  /** Unpublish many Post documents */
  unpublishManyPosts: BatchPayload;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateAuthorArgs = {
  data: AuthorCreateInput;
};


export type MutationUpdateAuthorArgs = {
  where: AuthorWhereUniqueInput;
  data: AuthorUpdateInput;
};


export type MutationDeleteAuthorArgs = {
  where: AuthorWhereUniqueInput;
};


export type MutationUpsertAuthorArgs = {
  where: AuthorWhereUniqueInput;
  upsert: AuthorUpsertInput;
};


export type MutationPublishAuthorArgs = {
  where: AuthorWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishAuthorArgs = {
  where: AuthorWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyAuthorsArgs = {
  where?: Maybe<AuthorManyWhereInput>;
  data: AuthorUpdateManyInput;
};


export type MutationDeleteManyAuthorsArgs = {
  where?: Maybe<AuthorManyWhereInput>;
};


export type MutationPublishManyAuthorsArgs = {
  where?: Maybe<AuthorManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyAuthorsArgs = {
  where?: Maybe<AuthorManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateBookArgs = {
  data: BookCreateInput;
};


export type MutationUpdateBookArgs = {
  where: BookWhereUniqueInput;
  data: BookUpdateInput;
};


export type MutationDeleteBookArgs = {
  where: BookWhereUniqueInput;
};


export type MutationUpsertBookArgs = {
  where: BookWhereUniqueInput;
  upsert: BookUpsertInput;
};


export type MutationPublishBookArgs = {
  where: BookWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishBookArgs = {
  where: BookWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyBooksArgs = {
  where?: Maybe<BookManyWhereInput>;
  data: BookUpdateManyInput;
};


export type MutationDeleteManyBooksArgs = {
  where?: Maybe<BookManyWhereInput>;
};


export type MutationPublishManyBooksArgs = {
  where?: Maybe<BookManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyBooksArgs = {
  where?: Maybe<BookManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateFoodArgs = {
  data: FoodCreateInput;
};


export type MutationUpdateFoodArgs = {
  where: FoodWhereUniqueInput;
  data: FoodUpdateInput;
};


export type MutationDeleteFoodArgs = {
  where: FoodWhereUniqueInput;
};


export type MutationUpsertFoodArgs = {
  where: FoodWhereUniqueInput;
  upsert: FoodUpsertInput;
};


export type MutationPublishFoodArgs = {
  where: FoodWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishFoodArgs = {
  where: FoodWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyFoodsArgs = {
  where?: Maybe<FoodManyWhereInput>;
  data: FoodUpdateManyInput;
};


export type MutationDeleteManyFoodsArgs = {
  where?: Maybe<FoodManyWhereInput>;
};


export type MutationPublishManyFoodsArgs = {
  where?: Maybe<FoodManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyFoodsArgs = {
  where?: Maybe<FoodManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreatePhotoArgs = {
  data: PhotoCreateInput;
};


export type MutationUpdatePhotoArgs = {
  where: PhotoWhereUniqueInput;
  data: PhotoUpdateInput;
};


export type MutationDeletePhotoArgs = {
  where: PhotoWhereUniqueInput;
};


export type MutationUpsertPhotoArgs = {
  where: PhotoWhereUniqueInput;
  upsert: PhotoUpsertInput;
};


export type MutationPublishPhotoArgs = {
  where: PhotoWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPhotoArgs = {
  where: PhotoWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPhotosArgs = {
  where?: Maybe<PhotoManyWhereInput>;
  data: PhotoUpdateManyInput;
};


export type MutationDeleteManyPhotosArgs = {
  where?: Maybe<PhotoManyWhereInput>;
};


export type MutationPublishManyPhotosArgs = {
  where?: Maybe<PhotoManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPhotosArgs = {
  where?: Maybe<PhotoManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationUpdatePostArgs = {
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationUpsertPostArgs = {
  where: PostWhereUniqueInput;
  upsert: PostUpsertInput;
};


export type MutationPublishPostArgs = {
  where: PostWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPostArgs = {
  where: PostWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
  data: PostUpdateManyInput;
};


export type MutationDeleteManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
};


export type MutationPublishManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
  from?: Array<Stage>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Photo = Node & {
  __typename?: 'Photo';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Photo>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  image: Asset;
  season: Season;
  caption: Scalars['String'];
  like: Scalars['Int'];
  comment: Array<Scalars['String']>;
};


export type PhotoDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type PhotoConnectInput = {
  /** Document to connect */
  where: PhotoWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PhotoConnection = {
  __typename?: 'PhotoConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PhotoEdge>;
  aggregate: Aggregate;
};

export type PhotoCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  image: AssetCreateOneInlineInput;
  season: Season;
  caption: Scalars['String'];
  like: Scalars['Int'];
  comment?: Maybe<Array<Scalars['String']>>;
};

export type PhotoCreateManyInlineInput = {
  /** Create and connect multiple existing Photo documents */
  create?: Maybe<Array<PhotoCreateInput>>;
  /** Connect multiple existing Photo documents */
  connect?: Maybe<Array<PhotoWhereUniqueInput>>;
};

export type PhotoCreateOneInlineInput = {
  /** Create and connect one Photo document */
  create?: Maybe<PhotoCreateInput>;
  /** Connect one existing Photo document */
  connect?: Maybe<PhotoWhereUniqueInput>;
};

/** An edge in a connection. */
export type PhotoEdge = {
  __typename?: 'PhotoEdge';
  /** The item at the end of the edge. */
  node: Photo;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PhotoManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PhotoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PhotoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PhotoWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  image?: Maybe<AssetWhereInput>;
  season?: Maybe<Season>;
  /** All values that are not equal to given value. */
  season_not?: Maybe<Season>;
  /** All values that are contained in given list. */
  season_in?: Maybe<Array<Season>>;
  /** All values that are not contained in given list. */
  season_not_in?: Maybe<Array<Season>>;
  caption?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  caption_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  caption_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  caption_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  caption_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  caption_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  caption_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  caption_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  caption_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  caption_not_ends_with?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  like_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  like_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  like_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  like_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  like_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  like_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  like_gte?: Maybe<Scalars['Int']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  comment?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  comment_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  comment_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  comment_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  comment_contains_none?: Maybe<Array<Scalars['String']>>;
};

export enum PhotoOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SeasonAsc = 'season_ASC',
  SeasonDesc = 'season_DESC',
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  LikeAsc = 'like_ASC',
  LikeDesc = 'like_DESC',
  CommentAsc = 'comment_ASC',
  CommentDesc = 'comment_DESC'
}

export type PhotoUpdateInput = {
  image?: Maybe<AssetUpdateOneInlineInput>;
  season?: Maybe<Season>;
  caption?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['Int']>;
  comment?: Maybe<Array<Scalars['String']>>;
};

export type PhotoUpdateManyInlineInput = {
  /** Create and connect multiple Photo documents */
  create?: Maybe<Array<PhotoCreateInput>>;
  /** Connect multiple existing Photo documents */
  connect?: Maybe<Array<PhotoConnectInput>>;
  /** Override currently-connected documents with multiple existing Photo documents */
  set?: Maybe<Array<PhotoWhereUniqueInput>>;
  /** Update multiple Photo documents */
  update?: Maybe<Array<PhotoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Photo documents */
  upsert?: Maybe<Array<PhotoUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Photo documents */
  disconnect?: Maybe<Array<PhotoWhereUniqueInput>>;
  /** Delete multiple Photo documents */
  delete?: Maybe<Array<PhotoWhereUniqueInput>>;
};

export type PhotoUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  season: Season;
  caption: Scalars['String'];
  like: Scalars['Int'];
  comment?: Maybe<Array<Scalars['String']>>;
};

export type PhotoUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PhotoWhereInput;
  /** Update many input */
  data: PhotoUpdateManyInput;
};

export type PhotoUpdateOneInlineInput = {
  /** Create and connect one Photo document */
  create?: Maybe<PhotoCreateInput>;
  /** Update single Photo document */
  update?: Maybe<PhotoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Photo document */
  upsert?: Maybe<PhotoUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Photo document */
  connect?: Maybe<PhotoWhereUniqueInput>;
  /** Disconnect currently connected Photo document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Photo document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PhotoUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PhotoWhereUniqueInput;
  /** Document to update */
  data: PhotoUpdateInput;
};

export type PhotoUpsertInput = {
  /** Create document if it didn't exist */
  create: PhotoCreateInput;
  /** Update document if it exists */
  update: PhotoUpdateInput;
};

export type PhotoUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PhotoWhereUniqueInput;
  /** Upsert data */
  data: PhotoUpsertInput;
};

/** Identifies documents */
export type PhotoWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PhotoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PhotoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PhotoWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  image?: Maybe<AssetWhereInput>;
  season?: Maybe<Season>;
  /** All values that are not equal to given value. */
  season_not?: Maybe<Season>;
  /** All values that are contained in given list. */
  season_in?: Maybe<Array<Season>>;
  /** All values that are not contained in given list. */
  season_not_in?: Maybe<Array<Season>>;
  caption?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  caption_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  caption_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  caption_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  caption_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  caption_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  caption_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  caption_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  caption_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  caption_not_ends_with?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  like_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  like_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  like_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  like_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  like_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  like_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  like_gte?: Maybe<Scalars['Int']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  comment?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  comment_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  comment_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  comment_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  comment_contains_none?: Maybe<Array<Scalars['String']>>;
};

/** References Photo record uniquely */
export type PhotoWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Post = Node & {
  __typename?: 'Post';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Post>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  date?: Maybe<Scalars['Date']>;
  excerpt?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Asset>;
  content?: Maybe<RichText>;
  tags: Array<Scalars['String']>;
  author?: Maybe<Author>;
};


export type PostDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type PostConnectInput = {
  /** Document to connect */
  where: PostWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: 'PostConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PostEdge>;
  aggregate: Aggregate;
};

export type PostCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  date?: Maybe<Scalars['Date']>;
  excerpt?: Maybe<Scalars['String']>;
  coverImage?: Maybe<AssetCreateOneInlineInput>;
  content?: Maybe<Scalars['RichTextAST']>;
  tags?: Maybe<Array<Scalars['String']>>;
  author?: Maybe<AuthorCreateOneInlineInput>;
};

export type PostCreateManyInlineInput = {
  /** Create and connect multiple existing Post documents */
  create?: Maybe<Array<PostCreateInput>>;
  /** Connect multiple existing Post documents */
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateOneInlineInput = {
  /** Create and connect one Post document */
  create?: Maybe<PostCreateInput>;
  /** Connect one existing Post document */
  connect?: Maybe<PostWhereUniqueInput>;
};

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge';
  /** The item at the end of the edge. */
  node: Post;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PostManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>;
  excerpt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  excerpt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  excerpt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  excerpt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  excerpt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  excerpt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  excerpt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  excerpt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with?: Maybe<Scalars['String']>;
  coverImage?: Maybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none?: Maybe<Array<Scalars['String']>>;
  author?: Maybe<AuthorWhereInput>;
};

export enum PostOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC'
}

export type PostUpdateInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  excerpt?: Maybe<Scalars['String']>;
  coverImage?: Maybe<AssetUpdateOneInlineInput>;
  content?: Maybe<Scalars['RichTextAST']>;
  tags?: Maybe<Array<Scalars['String']>>;
  author?: Maybe<AuthorUpdateOneInlineInput>;
};

export type PostUpdateManyInlineInput = {
  /** Create and connect multiple Post documents */
  create?: Maybe<Array<PostCreateInput>>;
  /** Connect multiple existing Post documents */
  connect?: Maybe<Array<PostConnectInput>>;
  /** Override currently-connected documents with multiple existing Post documents */
  set?: Maybe<Array<PostWhereUniqueInput>>;
  /** Update multiple Post documents */
  update?: Maybe<Array<PostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Post documents */
  upsert?: Maybe<Array<PostUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Post documents */
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  /** Delete multiple Post documents */
  delete?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  excerpt?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type PostUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PostWhereInput;
  /** Update many input */
  data: PostUpdateManyInput;
};

export type PostUpdateOneInlineInput = {
  /** Create and connect one Post document */
  create?: Maybe<PostCreateInput>;
  /** Update single Post document */
  update?: Maybe<PostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Post document */
  upsert?: Maybe<PostUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Post document */
  connect?: Maybe<PostWhereUniqueInput>;
  /** Disconnect currently connected Post document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Post document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PostUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PostWhereUniqueInput;
  /** Document to update */
  data: PostUpdateInput;
};

export type PostUpsertInput = {
  /** Create document if it didn't exist */
  create: PostCreateInput;
  /** Update document if it exists */
  update: PostUpdateInput;
};

export type PostUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PostWhereUniqueInput;
  /** Upsert data */
  data: PostUpsertInput;
};

/** Identifies documents */
export type PostWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>;
  excerpt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  excerpt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  excerpt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  excerpt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  excerpt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  excerpt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  excerpt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  excerpt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with?: Maybe<Scalars['String']>;
  coverImage?: Maybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none?: Maybe<Array<Scalars['String']>>;
  author?: Maybe<AuthorWhereInput>;
};

/** References Post record uniquely */
export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve multiple authors */
  authors: Array<Author>;
  /** Retrieve a single author */
  author?: Maybe<Author>;
  /** Retrieve multiple authors using the Relay connection interface */
  authorsConnection: AuthorConnection;
  /** Retrieve multiple books */
  books: Array<Book>;
  /** Retrieve a single book */
  book?: Maybe<Book>;
  /** Retrieve multiple books using the Relay connection interface */
  booksConnection: BookConnection;
  /** Retrieve multiple foods */
  foods: Array<Food>;
  /** Retrieve a single food */
  food?: Maybe<Food>;
  /** Retrieve multiple foods using the Relay connection interface */
  foodsConnection: FoodConnection;
  /** Retrieve multiple photos */
  photos: Array<Photo>;
  /** Retrieve a single photo */
  photo?: Maybe<Photo>;
  /** Retrieve multiple photos using the Relay connection interface */
  photosConnection: PhotoConnection;
  /** Retrieve multiple posts */
  posts: Array<Post>;
  /** Retrieve a single post */
  post?: Maybe<Post>;
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: PostConnection;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAuthorsArgs = {
  where?: Maybe<AuthorWhereInput>;
  orderBy?: Maybe<AuthorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryAuthorArgs = {
  where: AuthorWhereUniqueInput;
  stage?: Stage;
};


export type QueryAuthorsConnectionArgs = {
  where?: Maybe<AuthorWhereInput>;
  orderBy?: Maybe<AuthorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryBooksArgs = {
  where?: Maybe<BookWhereInput>;
  orderBy?: Maybe<BookOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryBookArgs = {
  where: BookWhereUniqueInput;
  stage?: Stage;
};


export type QueryBooksConnectionArgs = {
  where?: Maybe<BookWhereInput>;
  orderBy?: Maybe<BookOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryFoodsArgs = {
  where?: Maybe<FoodWhereInput>;
  orderBy?: Maybe<FoodOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryFoodArgs = {
  where: FoodWhereUniqueInput;
  stage?: Stage;
};


export type QueryFoodsConnectionArgs = {
  where?: Maybe<FoodWhereInput>;
  orderBy?: Maybe<FoodOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryPhotosArgs = {
  where?: Maybe<PhotoWhereInput>;
  orderBy?: Maybe<PhotoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryPhotoArgs = {
  where: PhotoWhereUniqueInput;
  stage?: Stage;
};


export type QueryPhotosConnectionArgs = {
  where?: Maybe<PhotoWhereInput>;
  orderBy?: Maybe<PhotoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
  stage?: Stage;
};


export type QueryPostsConnectionArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


export enum Season {
  Autumn = 'autumn',
  Spring = 'spring',
  Summer = 'summer',
  Winter = 'winter'
}

/** Stage system enumeration */
export enum Stage {
  /** System Published Stage */
  Published = 'PUBLISHED',
  /** System Draft Stage */
  Draft = 'DRAFT'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export type GetFoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFoodsQuery = (
  { __typename?: 'Query' }
  & { foods: Array<(
    { __typename?: 'Food' }
    & Pick<Food, 'id' | 'caption' | 'ingredients' | 'updatedAt'>
    & { image: (
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'handle'>
    ) }
  )> }
);

export type GetPhotosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPhotosQuery = (
  { __typename?: 'Query' }
  & { photos: Array<(
    { __typename?: 'Photo' }
    & Pick<Photo, 'id' | 'caption' | 'updatedAt'>
    & { image: (
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'url'>
    ) }
  )> }
);

export type GetSeasonPhotosQueryVariables = Exact<{
  season?: Maybe<Season>;
}>;


export type GetSeasonPhotosQuery = (
  { __typename?: 'Query' }
  & { photos: Array<(
    { __typename?: 'Photo' }
    & Pick<Photo, 'id' | 'caption' | 'updatedAt'>
    & { image: (
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'url'>
    ) }
  )> }
);


export const GetFoodsDocument = gql`
    query GetFoods {
  foods {
    id
    image {
      id
      handle
    }
    caption
    ingredients
    updatedAt
  }
}
    `;

/**
 * __useGetFoodsQuery__
 *
 * To run a query within a React component, call `useGetFoodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFoodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFoodsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFoodsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFoodsQuery, GetFoodsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetFoodsQuery, GetFoodsQueryVariables>(GetFoodsDocument, baseOptions);
      }
export function useGetFoodsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFoodsQuery, GetFoodsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetFoodsQuery, GetFoodsQueryVariables>(GetFoodsDocument, baseOptions);
        }
export type GetFoodsQueryHookResult = ReturnType<typeof useGetFoodsQuery>;
export type GetFoodsLazyQueryHookResult = ReturnType<typeof useGetFoodsLazyQuery>;
export type GetFoodsQueryResult = ApolloReactCommon.QueryResult<GetFoodsQuery, GetFoodsQueryVariables>;
export const GetPhotosDocument = gql`
    query GetPhotos {
  photos {
    id
    image {
      id
      url
    }
    caption
    updatedAt
  }
}
    `;

/**
 * __useGetPhotosQuery__
 *
 * To run a query within a React component, call `useGetPhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhotosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPhotosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPhotosQuery, GetPhotosQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPhotosQuery, GetPhotosQueryVariables>(GetPhotosDocument, baseOptions);
      }
export function useGetPhotosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPhotosQuery, GetPhotosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPhotosQuery, GetPhotosQueryVariables>(GetPhotosDocument, baseOptions);
        }
export type GetPhotosQueryHookResult = ReturnType<typeof useGetPhotosQuery>;
export type GetPhotosLazyQueryHookResult = ReturnType<typeof useGetPhotosLazyQuery>;
export type GetPhotosQueryResult = ApolloReactCommon.QueryResult<GetPhotosQuery, GetPhotosQueryVariables>;
export const GetSeasonPhotosDocument = gql`
    query GetSeasonPhotos($season: Season) {
  photos(where: {season: $season}) {
    id
    image {
      id
      url
    }
    caption
    updatedAt
  }
}
    `;

/**
 * __useGetSeasonPhotosQuery__
 *
 * To run a query within a React component, call `useGetSeasonPhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSeasonPhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSeasonPhotosQuery({
 *   variables: {
 *      season: // value for 'season'
 *   },
 * });
 */
export function useGetSeasonPhotosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSeasonPhotosQuery, GetSeasonPhotosQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSeasonPhotosQuery, GetSeasonPhotosQueryVariables>(GetSeasonPhotosDocument, baseOptions);
      }
export function useGetSeasonPhotosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSeasonPhotosQuery, GetSeasonPhotosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSeasonPhotosQuery, GetSeasonPhotosQueryVariables>(GetSeasonPhotosDocument, baseOptions);
        }
export type GetSeasonPhotosQueryHookResult = ReturnType<typeof useGetSeasonPhotosQuery>;
export type GetSeasonPhotosLazyQueryHookResult = ReturnType<typeof useGetSeasonPhotosLazyQuery>;
export type GetSeasonPhotosQueryResult = ApolloReactCommon.QueryResult<GetSeasonPhotosQuery, GetSeasonPhotosQueryVariables>;