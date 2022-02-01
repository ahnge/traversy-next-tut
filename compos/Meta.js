import Head from "next/head";

const Meta = ({ keywords, description, title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Webdev News",
  keywords: "webdevelopment",
  description: "whatever the fuck is this",
};

export default Meta;
