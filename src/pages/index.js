import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
);

export default IndexPage;
