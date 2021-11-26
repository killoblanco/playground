import { Helmet } from 'react-helmet';

export interface SeoProps {
  title: string;
  description: string;
  keywords: string[];
}

function SEO({ title, description, keywords }: SeoProps) {
  return (
    <Helmet>
      <title>{title} - Kamilo Vasquez</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Kamilo Vasquez" />
    </Helmet>
  );
}

export default SEO;
