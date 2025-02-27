"use client";

import { useState } from "react";
import TabSection from "./_components/TabSection";

const Dashboard: React.FC = () => {

    const [data, setData] = useState<unknown | null>(null); // Supports any response or null

    const getData = (result: unknown) => {
        setData(result);
        console.log(data)
    };

     
 
    return (
        <>
            <TabSection getData={getData} />
        </>
    );
};

export default Dashboard;
