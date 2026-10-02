import { z } from 'zod';

import { Role } from './roles.enum';
import { Capability } from './capabilities.enum';

export const RoleSchema = z.enum(Role);

export const CapabilitySchema = z.enum(Capability);

export const UserAuthorizationSchema = z.object({
  roles: z.array(RoleSchema),
  capabilities: z.array(CapabilitySchema),
});

export type UserAuthorization = z.infer<typeof UserAuthorizationSchema>;
