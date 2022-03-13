import dotenv from "dotenv";
import * as yup from "yup";
dotenv.config();
const configSchema = yup.object().shape({
  port: yup
    .number()
    .integer()
    .positive()
    .min(80)
    .max(65535)
    .required("please specified a port for hosting the app"),
  db: yup.object().shape({
    client: yup.string().oneOf(["pg"]).required(),
    connection: yup.object().shape({
      user: yup.string("please pass your database user for working"),
      password: yup.string("please pass your database password for working"),
      database: yup
        .string()
        .required("please specified a database for working"),
    }),
    migrations: yup.object().shape({
      stub: yup.string().required("please specified a stub for migration"),
    }),
  }),
  security: yup.object().shape({
    password: yup.object().shape({
      characterNumber: yup
        .number()
        .integer()
        .required(
          "pleease specified a number of character should be result the hash"
        ),
      iterationNumber: yup
        .number()
        .integer()
        .required("please specified a hashing iteration amount"),
      digestAlgo: yup
        .string()
        .oneOf(["sha512"])
        .required("please specified a digest algo for hashing password"),
      pepper: yup
        .string()
        .min(10)
        .required("please specified a pepper for security"),
    }),
    session: yup.object().shape({
      jwtSecret: yup
        .string()
        .min(10)
        .required(
          "please specified a jwtSecret should with at least 10 character"
        ),
      expiresIn: yup.string().required("please specified a jwt duration"),
    }),
  }),
});

const data = {
  port: process.env.PORT,
  db: {
    client: process.env.DB_CLIENT,
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      stub: "./src/db/migration.stub",
    },
  },
  security: {
    password: {
      characterNumber: 128,
      iterationNumber: 100000,
      digestAlgo: "sha512",
      pepper: process.env.PW_PEPPER,
    },
    session: { jwtSecret: process.env.JWT_SECRET, expiresIn: "2h" },
  },
};

const config = configSchema.validateSync(data);

export default config;
