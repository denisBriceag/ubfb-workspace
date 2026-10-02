import { Role } from './roles.enum';
import { Capability } from './capabilities.enum';

export const ROLE_CAPABILITIES: Record<Role, readonly Capability[]> = {
  [Role.SUPER_ADMIN]: Object.values(Capability),

  [Role.ADMIN]: [
    Capability.MODERATOR_READ,
    Capability.MODERATOR_CREATE,
    Capability.MODERATOR_UPDATE,
    Capability.MODERATOR_DELETE,

    Capability.ORDER_MANAGER_READ,
    Capability.ORDER_MANAGER_CREATE,
    Capability.ORDER_MANAGER_UPDATE,
    Capability.ORDER_MANAGER_DELETE,

    Capability.PRODUCT_READ,
    Capability.PRODUCT_CREATE,
    Capability.PRODUCT_UPDATE,
    Capability.PRODUCT_DELETE,

    Capability.CATEGORY_READ,
    Capability.CATEGORY_CREATE,
    Capability.CATEGORY_UPDATE,
    Capability.CATEGORY_DELETE,

    Capability.ORDER_READ,
    Capability.ORDER_CONFIRM,
    Capability.ORDER_PROCESS,
    Capability.ORDER_MARK_READY,
    Capability.ORDER_COMPLETE,
    Capability.ORDER_CANCEL,
  ],

  [Role.MODERATOR]: [
    Capability.PRODUCT_READ,
    Capability.PRODUCT_CREATE,
    Capability.PRODUCT_UPDATE,
    Capability.PRODUCT_DELETE,

    Capability.CATEGORY_READ,
    Capability.CATEGORY_CREATE,
    Capability.CATEGORY_UPDATE,
    Capability.CATEGORY_DELETE,
  ],

  [Role.ORDER_MANAGER]: [
    Capability.ORDER_READ,
    Capability.ORDER_CONFIRM,
    Capability.ORDER_PROCESS,
    Capability.ORDER_MARK_READY,
    Capability.ORDER_COMPLETE,
    Capability.ORDER_CANCEL,
  ],

  [Role.CUSTOMER]: [
    Capability.CART_CREATE,
    Capability.CART_READ_OWN,
    Capability.CART_UPDATE_OWN,

    Capability.ORDER_CREATE,
    Capability.ORDER_READ_OWN,
    Capability.ORDER_CANCEL_OWN,
  ],
};
