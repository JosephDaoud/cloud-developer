export const config = {
  dev: {
    username: "jdbUdacity",
    password: "Udacitydb",
    database: "UdacityTest",
    host: "jdbudacitynew.ccxxwxma2pl3.us-east-1.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "us-east-1",
    aws_profile: "default",
    aws_media_bucket: "myjws001bucket",
  },
  jwt: {
    secret: " ",
  },
  prod: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "postgres",
  },
};
