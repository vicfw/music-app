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
