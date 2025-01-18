'use client'
import { ThreeDot } from "react-loading-indicators";

export default function Loading() {
     return (
        <div className="w-full h-screen flex justify-center items-center">

        <ThreeDot color="#ffbb00" size="medium" text="" textColor="" />
        </div>
    );
}