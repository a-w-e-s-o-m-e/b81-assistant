export interface Charge {
  fulfillment: string;
}

export interface MetaData {
  type: string;
  section: string;
  priority: number;
  mobile_icon: string;
  country_code: string;
  is_challenge: boolean;
  num_workouts?: any;
  count_interval: string;
}

export interface ActiveSubscription {
  type: string;
  status: string;
  deleted: boolean;
  plan_id: string;
  meta_data: MetaData;
  created_at: number;
  is_deleted: boolean;
  started_at: number;
  updated_at: number;
  customer_id: string;
  activated_at: number;
  cancelled_at?: any;
  currency_code: string;
  plan_quantity: number;
  billing_period: number;
  created_at_utc: Date;
  started_at_utc: Date;
  updated_at_utc: Date;
  next_billing_at: number;
  plan_unit_price: number;
  activated_at_utc: Date;
  cancelled_at_utc?: any;
  current_term_end: number;
  current_term_start: number;
  billing_period_unit: string;
  current_term_end_utc: Date;
  current_term_start_utc: Date;
  cancel_schedule_created_at?: any;
  cancel_schedule_created_at_utc?: any;
}

export interface Payment {
  charge: Charge;
  pending?: any;
  provider?: any;
  situation: string;
  is_virtual: boolean;
  provider_id?: any;
  provider_meta?: any;
  trial_ends_at?: any;
  active_subscriptions: ActiveSubscription[];
}

export interface SysFlags {
  integrations_dispatched: boolean;
}

export interface Flags {
  needs_coach_replacement: boolean;
}

export interface ParticipantsPrediction {
  on_120_hours_left: number;
  on_168_hours_left: number;
  on_72_hours_left?: number;
  on_240_hours_left?: number;
  on_24_hours_left?: number;
  on_0_hours_left?: number;
}

export interface SysFlags2 {
  participants_prediction: ParticipantsPrediction;
}

export interface BookingOptions {
  requires_paying_customer: boolean;
}

export interface Type {
  id: string;
  is_published: boolean;
  is_archived: boolean;
  slug: string;
  seo_slug?: any;
  workout_category?: any;
  workout_plan_id?: any;
  event_type_structure_id: string;
  tags?: any;
  subtags?: any;
  flags?: any;
  booking_options: BookingOptions;
  header_image_desc?: any;
  name_id?: any;
  adjustment_factor?: any;
  join_mode: string;
  visibility: string;
  fitness_goal?: any;
  fitness_goal_level?: any;
  difficulty_level: string;
  cardio_level: number;
  strength_level: number;
  created_by: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  description: string;
  seo_title: string;
  seo_description?: any;
}

export interface Address {
  zip: string;
  address1: string;
}

export interface FeatureFlags {
  indoors: boolean;
}

export interface Flags2 {
  automatic_cancellation: boolean;
}

export interface Link {
  name: string;
  url: string;
}

export interface Amenity {
  id: string;
  label: string;
  selected: boolean;
}

export interface Location {
  map_image?: any;
  id: string;
  is_published: boolean;
  analytics_name: string;
  slug?: any;
  type: string;
  opening_hours?: any;
  tags?: any;
  subtags?: any;
  lat: number;
  lon: number;
  country_code: string;
  city_code: string;
  district_code: string;
  address: Address;
  timezone: string;
  feature_flags: FeatureFlags;
  flags: Flags2;
  sys_flags?: any;
  created_by: string;
  created_at: Date;
  updated_at: Date;
  coach_id: string;
  news: string;
  rules: any[];
  equipment?: any;
  tech?: any;
  entry_guide?: any;
  links: Link[];
  amenities: Amenity[];
  name: string;
  description: string;
  description_short?: any;
  description_address?: any;
}

export interface Meta {
  date_begin: Date;
}

export interface CurrentStatus {
  id: string;
  event_id: string;
  status_name: string;
  transitioned_at: Date;
  meta: Meta;
  sys_flags?: any;
  created_by?: any;
  created_at: Date;
  updated_at: Date;
}

export interface Coach {
  id: string;
  forename: string;
}

export interface Event {
  id: string;
  event_type_id: string;
  coach_id: string;
  location_id: string;
  current_status_id: string;
  recurrent_id: string;
  is_published: boolean;
  date_begin: Date;
  duration: number;
  max_participants: number;
  language: string;
  company?: any;
  type_special?: any;
  tags?: any;
  subtags?: any;
  streaming_link?: any;
  partners_integrations?: any;
  participants_count: number;
  attendees_count?: any;
  no_shows_count?: any;
  permitted_cancellations_count?: any;
  illicit_cancellations_count?: number;
  waitinglist_count?: any;
  results_count?: any;
  results_with_readings_count?: any;
  gritpoints_avg?: any;
  gritpoints_sum?: any;
  beat_points_avg?: any;
  beat_points_sum?: any;
  recovery_points_avg?: any;
  recovery_points_sum?: any;
  sweat_points_avg?: any;
  sweat_points_sum?: any;
  calories_burned_avg?: any;
  calories_burned_sum?: any;
  has_tracking_abnormality?: any;
  is_successfully_tracked?: any;
  tracking_failure_summary?: any;
  tracking_failure_description?: any;
  tracking_failure_source?: any;
  tracking_failure_unit?: any;
  flags: Flags;
  sys_flags: SysFlags2;
  music_asset_set_id?: any;
  timer_asset_set_id?: any;
  special: boolean;
  special_event_name?: any;
  special_event_description?: any;
  is_chargeable: boolean;
  created_by: string;
  created_at: Date;
  updated_at: Date;
  type: Type;
  location: Location;
  current_status: CurrentStatus;
  current_participants_count: number;
  is_cancelled: boolean;
  coach: Coach;
}

export interface Meta2 {
  ever_on_waitinglist: boolean;
}

export interface CurrentStatus2 {
  id: string;
  ticket_id: string;
  status_name: string;
  transitioned_at: Date;
  meta: Meta2;
  sys_flags?: any;
  created_by: string;
  created_at: Date;
  updated_at: Date;
}

export interface Meta3 {
  ever_on_waitinglist: boolean;
}

export interface StatusHistory {
  id: string;
  ticket_id: string;
  status_name: string;
  transitioned_at: Date;
  meta: Meta3;
  sys_flags?: any;
  created_by: string;
  created_at: Date;
  updated_at: Date;
}

export interface Large {
  url: string;
}

export interface Medium {
  url: string;
}

export interface Small {
  url: string;
}

export interface Thumb {
  url: string;
}

export interface ProfilePicture {
  large: Large;
  medium: Medium;
  small: Small;
  thumb: Thumb;
  publicId: string;
  version: number;
}

export interface User {
  id: string;
  forename: string;
  surname: string;
  email: string;
  profile_picture: ProfilePicture;
}

export interface Data {
  id: string;
  user_id: string;
  event_id: string;
  provider_event_id?: any;
  current_status_id: string;
  invitation_id?: any;
  is_chargeable: boolean;
  is_late_cancel: boolean;
  payment: Payment;
  tags?: any;
  credit_id: string;
  sys_flags: SysFlags;
  created_by: string;
  created_at: Date;
  updated_at: Date;
  event: Event;
  current_status: CurrentStatus2;
  status_history: StatusHistory[];
  has_attended?: any;
  is_cancelled: boolean;
  is_waitinglist: boolean;
  user: User;
}

export interface TicketsAPIResponse {
  data: Data[];
  skip: number;
  limit: number;
  total: number;
}

export interface SanitizedData {
  id: string;
  eventName: string;
  locationName: string;
  date: Date;
  coachName: string;
  maxPax: number;
  currentPax: number;
  kind: string;
}

export interface CachedEventObject {
  data: SanitizedData[];
  skip: number;
  limit: number;
  total: number;
  updatedAt: number;
}
