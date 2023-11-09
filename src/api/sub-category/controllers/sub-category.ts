/**
 * sub-category controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::sub-category.sub-category",
  ({ strapi }) => {
    return {
      async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db
          .query("api::sub-category.sub-category")
          .findOne({
            where: { tag: id },
          });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
      },
    };
  }
);
