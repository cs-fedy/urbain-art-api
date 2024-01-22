/**
 * product controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => {
    return {
      async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query("api::product.product").findOne({
          where: { tag: id },
          populate: true,
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
      },
    };
  }
);
