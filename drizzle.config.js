/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://neondb_owner:1jvWgh0bxZPo@ep-morning-glitter-a5bkt6d0.us-east-2.aws.neon.tech/car-market?sslmode=require',
    }
  };