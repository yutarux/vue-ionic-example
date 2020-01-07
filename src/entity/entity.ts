export interface OpenDbApiResponse {
  onix: Onix;
  hanmoto: Hanmoto;
  summary: Summary;
}
export interface Onix {
  RecordReference: string;
  NotificationType: string;
  ProductIdentifier: ProductIdentifier;
  DescriptiveDetail: DescriptiveDetail;
  CollateralDetail: CollateralDetail;
  PublishingDetail: PublishingDetail;
  ProductSupply: ProductSupply;
}
export interface ProductIdentifier {
  ProductIDType: string;
  IDValue: string;
}
export interface DescriptiveDetail {
  ProductComposition: string;
  ProductForm: string;
  ProductFormDetail: string;
  Collection: Collection;
  TitleDetail: TitleDetail;
  Contributor?: (ContributorEntity)[] | null;
  Language?: (LanguageEntity)[] | null;
  Extent?: (ExtentEntity)[] | null;
  Subject?: (SubjectEntity)[] | null;
  Audience?: (AudienceEntity)[] | null;
}
export interface Collection {
  CollectionType: string;
  CollectionSequence: CollectionSequence;
  TitleDetail: TitleDetail1;
}
export interface CollectionSequence {
  CollectionSequenceType: string;
  CollectionSequenceTypeName: string;
  CollectionSequenceNumber: string;
}
export interface TitleDetail1 {
  TitleType: string;
  TitleElement?: (TitleElementEntityOrTitleElement)[] | null;
}
export interface TitleElementEntityOrTitleElement {
  TitleElementLevel: string;
  TitleText: TitleTextOrPersonName;
}
export interface TitleTextOrPersonName {
  collationkey: string;
  content: string;
}
export interface TitleDetail {
  TitleType: string;
  TitleElement: TitleElementEntityOrTitleElement;
}
export interface ContributorEntity {
  SequenceNumber: string;
  ContributorRole?: (string)[] | null;
  PersonName: TitleTextOrPersonName;
  BiographicalNote: string;
}
export interface LanguageEntity {
  LanguageRole: string;
  LanguageCode: string;
}
export interface ExtentEntity {
  ExtentType: string;
  ExtentValue: string;
  ExtentUnit: string;
}
export interface SubjectEntity {
  SubjectSchemeIdentifier: string;
  SubjectCode: string;
}
export interface AudienceEntity {
  AudienceCodeType: string;
  AudienceCodeValue: string;
}
export interface CollateralDetail {
  TextContent?: (TextContentEntity)[] | null;
  SupportingResource?: (SupportingResourceEntity)[] | null;
}
export interface TextContentEntity {
  TextType: string;
  ContentAudience: string;
  Text: string;
}
export interface SupportingResourceEntity {
  ResourceContentType: string;
  ContentAudience: string;
  ResourceMode: string;
  ResourceVersion?: (ResourceVersionEntity)[] | null;
}
export interface ResourceVersionEntity {
  ResourceForm: string;
  ResourceVersionFeature?: (ResourceVersionFeatureEntity)[] | null;
  ResourceLink: string;
}
export interface ResourceVersionFeatureEntity {
  ResourceVersionFeatureType: string;
  FeatureValue: string;
}
export interface PublishingDetail {
  Imprint: Imprint;
  Publisher: Publisher;
  PublishingDate?: (PublishingDateEntity)[] | null;
}
export interface Imprint {
  ImprintName: string;
}
export interface Publisher {
  PublishingRole: string;
  PublisherIdentifier?: (PublisherIdentifierEntity)[] | null;
  PublisherName: string;
}
export interface PublisherIdentifierEntity {
  PublisherIDType: string;
  IDValue: string;
}
export interface PublishingDateEntity {
  PublishingDateRole: string;
  Date: string;
}
export interface ProductSupply {
  MarketPublishingDetail: MarketPublishingDetail;
  SupplyDetail: SupplyDetail;
}
export interface MarketPublishingDetail {
  MarketPublishingStatus: string;
}
export interface SupplyDetail {
  ProductAvailability: string;
  Price?: (PriceEntity)[] | null;
}
export interface PriceEntity {
  PriceType: string;
  PriceAmount: string;
  CurrencyCode: string;
}
export interface Hanmoto {
  datemodified: string;
  datecreated: string;
  datekoukai: string;
}
export interface Summary {
  isbn: string;
  title: string;
  volume: string;
  series: string;
  publisher: string;
  pubdate: string;
  cover: string;
  author: string;
}
