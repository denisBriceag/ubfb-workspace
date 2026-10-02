import { z } from 'zod';

import { OrderStatus } from './order-status.enum';
import { OrderCancellationReason } from './order-cancellation-reason.enum';
import { AgeVerificationStatus } from './age-verification-status.enum';

export const OrderStatusSchema = z.enum(OrderStatus);

export const OrderCancellationReasonSchema = z.enum(OrderCancellationReason);

export const AgeVerificationStatusSchema = z.enum(AgeVerificationStatus);

export const AgeVerificationSchema = z.object({
  status: AgeVerificationStatusSchema,
  verifiedAt: z.iso.datetime().optional(),
  verifiedBy: z.string().optional(),
});
export const OrderCancellationSchema = z.object({
  reason: OrderCancellationReasonSchema,
  cancelledAt: z.iso.datetime(),
  cancelledBy: z.string(),
  comment: z.string().optional(),
});

export type AgeVerification = z.infer<typeof AgeVerificationSchema>;
export type OrderCancellation = z.infer<typeof OrderCancellationSchema>;
