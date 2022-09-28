export interface ShazamCoreRootObject {
  artists: Artist[];
  highlightsurls: Highlightsurls;
  hub: Hub;
  images: Images;
  key: string;
  layout: string;
  properties: Highlightsurls;
  share: Share;
  subtitle: string;
  title: string;
  type: RootObjectType;
  url: string;
}

export interface Artist {
  adamid: string;
  alias: string;
  id: string;
}

export interface Highlightsurls {}

export interface Hub {
  actions: Action[];
  displayname: Displayname;
  explicit: boolean;
  image: string;
  options: Option[];
  type: HubType;
}

export interface Action {
  id?: string;
  name: Name;
  type: ActionType;
  uri?: string;
}

export enum Name {
  Apple = 'apple',
  HubApplemusicDeeplink = 'hub:applemusic:deeplink',
}

export enum ActionType {
  Applemusicopen = 'applemusicopen',
  Applemusicplay = 'applemusicplay',
  URI = 'uri',
}

export enum Displayname {
  AppleMusic = 'APPLE MUSIC',
}

export interface Option {
  actions: Action[];
  beacondata: Beacondata;
  caption: Caption;
  colouroverflowimage: boolean;
  image: string;
  listcaption: Listcaption;
  overflowimage: string;
  providername: Providername;
  type: BeacondataType;
}

export interface Beacondata {
  providername: Providername;
  type: BeacondataType;
}

export enum Providername {
  Applemusic = 'applemusic',
}

export enum BeacondataType {
  Open = 'open',
}

export enum Caption {
  Open = 'OPEN',
}

export enum Listcaption {
  OpenInAppleMusic = 'Open in Apple Music',
}

export enum HubType {
  Applemusic = 'APPLEMUSIC',
}

export interface Images {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}

export interface Share {
  avatar: string;
  href: string;
  html: string;
  image: string;
  snapchat: string;
  subject: string;
  text: string;
  twitter: string;
}

export enum RootObjectType {
  Music = 'MUSIC',
}

export interface SingleSongRootObject {
  albumadamid: string;
  alias: string;
  artists: Artist[];
  genres: Genres;
  highlightsurls: Highlightsurls;
  hub: Hub;
  images: Images;
  isrc: string;
  key: string;
  layout: string;
  releasedate: string;
  sections: Section[];
  share: Share;
  subtitle: string;
  title: string;
  trackadamid: string;
  type: string;
  url: string;
  urlparams: Urlparams;
}

export interface Artist {
  adamid: string;
  alias: string;
  id: string;
}

export interface Genres {
  primary: string;
}

export interface Highlightsurls {}

export interface OptionBeacondata {
  providername: string;
  type: string;
}

export interface Images {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}

export interface Section {
  beacondata?: SectionBeacondata;
  footer?: string;
  metadata?: Metadatum[];
  metapages?: Metapage[];
  tabname: string;
  text?: string[];
  type: string;
}

export interface SectionBeacondata {
  commontrackid: string;
  lyricsid: string;
  providername: string;
}

export interface Metadatum {
  text: string;
  title: string;
}

export interface Metapage {
  caption: string;
  image: string;
}

export interface Share {
  avatar: string;
  href: string;
  html: string;
  image: string;
  snapchat: string;
  subject: string;
  text: string;
  twitter: string;
}

export interface Urlparams {
  '{trackartist}': string;
  '{tracktitle}': string;
}

export interface RelatedSongsRootObject {
  artists: Artist[];
  highlightsurls: Highlightsurls;
  hub: Hub;
  images: Images;
  key: string;
  layout: string;
  properties: Highlightsurls;
  share: Share;
  subtitle: string;
  title: string;
  type: RootObjectType;
  url: string;
}

export interface Artist {
  adamid: string;
  alias: string;
  id: string;
}

export interface Highlightsurls {}

export interface Hub {
  actions: Action[];
  displayname: Displayname;
  explicit: boolean;
  image: string;
  options: Option[];
  type: HubType;
}

export interface Action {
  id?: string;
  name: Name;
  type: ActionType;
  uri?: string;
}

export interface Option {
  actions: Action[];
  beacondata: Beacondata;
  caption: Caption;
  colouroverflowimage: boolean;
  image: string;
  listcaption: Listcaption;
  overflowimage: string;
  providername: Providername;
  type: BeacondataType;
}

export interface Beacondata {
  providername: Providername;
  type: BeacondataType;
}

export interface Images {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}

export interface Share {
  avatar: string;
  href: string;
  html: string;
  image: string;
  snapchat: string;
  subject: string;
  text: string;
  twitter: string;
}

export interface ArtistDetailsRootObject {
  albums: { [key: string]: Album };
  artists: Artists;
  songs: { [key: string]: Album };
}

export interface Album {
  attributes?: AlbumAttributes;
  href: string;
  id: string;
  type: Type;
}

export interface AlbumAttributes {
  albumName?: string;
  artistName: string;
  artwork: Artwork;
  audioLocale?: string;
  audioTraits: AudioTrait[];
  composerName?: string;
  copyright?: string;
  discNumber?: number;
  durationInMillis?: number;
  genreNames: GenreName[];
  hasLyrics?: boolean;
  hasTimeSyncedLyrics?: boolean;
  isAppleDigitalMaster?: boolean;
  isCompilation?: boolean;
  isComplete?: boolean;
  isMasteredForItunes: boolean;
  isPrerelease?: boolean;
  isSingle?: boolean;
  isrc?: string;
  name: string;
  playParams: PlayParams;
  previews?: Preview[];
  recordLabel?: string;
  releaseDate: Date;
  trackCount?: number;
  trackNumber?: number;
  upc?: string;
  url: string;
}

export interface Artwork {
  bgColor: string;
  hasP3: boolean;
  height: number;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
  url: string;
  width: number;
}

export enum AudioTrait {
  HiResLossless = 'hi-res-lossless',
  Lossless = 'lossless',
  LossyStereo = 'lossy-stereo',
}

export enum GenreName {
  KPop = 'K-Pop',
  Music = 'Music',
  Pop = 'Pop',
  Soundtrack = 'Soundtrack',
  TVSoundtrack = 'TV Soundtrack',
}

export interface PlayParams {
  id: string;
  kind: string;
}

export interface Preview {
  url: string;
}

export enum Type {
  Albums = 'albums',
  Songs = 'songs',
}

export interface Artists {
  '1191850724': The1191850724;
}

export interface The1191850724 {
  attributes: The1191850724_Attributes;
  href: string;
  id: string;
  meta: Meta;
  relationships: Relationships;
  type: string;
  views: The1191850724_Views;
}

export interface The1191850724_Attributes {
  artwork: Artwork;
  genreNames: GenreName[];
  name: string;
  url: string;
}

export interface Meta {
  views: MetaViews;
}

export interface MetaViews {
  order: string[];
}

export interface Relationships {
  albums: Albums;
}

export interface Albums {
  data: Album[];
  href: string;
}

export interface The1191850724_Views {
  'latest-release': LatestRelease;
  'top-songs': LatestRelease;
}

export interface LatestRelease {
  attributes: LatestReleaseAttributes;
  data: Album[];
  href: string;
}

export interface LatestReleaseAttributes {
  title: string;
}
