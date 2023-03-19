import React from 'react';
import Layout from '@theme/Layout';
import { HomePageAnimation } from "@site/src/components/HomePageAnimation";
import "../css/index.css"

export default function Home(): JSX.Element {
    return (
        <Layout
            description="Will's Memo">
            <HomePageAnimation/>
        </Layout>
    );
}
