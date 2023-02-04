import {
  ProductionEquity,
  ProductionStatus,
  ProductionType,
  RoleStatus,
  StageRole
} from '../shared/profile.types';

export type Profile = {
  account_id: string;
  complete_profile: boolean;
  description?: string;
  location?: string;
  number_of_members?: string;
  primary_contact?: string;
  primary_contact_email?: string;
  profile_image_url?: string;
  additional_photos?: { [key: string]: string };
  theatre_name: string;
  uid: string;
  shows?: Production[];
};

export type Production = {
  account_id: string;
  production_id: string;
  production_name: string;
  production_image_url?: string;
  type?: ProductionType;
  type_other?: string;
  status?: ProductionStatus;
  description?: string;
  director?: string;
  musical_director?: string;
  equity?: ProductionEquity;
  audition_start?: string;
  audition_end?: string;
  callback_start?: string;
  callback_end?: string;
  rehearsal_start?: string;
  rehearsal_end?: string;
  tech_week_start?: string;
  tech_week_end?: string;
  open_and_close_start?: string;
  open_and_close_end?: string;
  writers?: string;
  onStageRoles?: Role[];
  offStageRoles?: Role[];
};

export type Role = {
  type?: StageRole;
  role_id?: string;
  role_name?: string;
  description?: string;
  gender_identity?: string[];
  ethnicity?: string[];
  role_status?: RoleStatus;
  age_range?: string[];
  additional_requirements?: string[];
};