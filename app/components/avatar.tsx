"use client"

import Image from "next/image";
import { MotionTransition } from "./transition-component";

const Avatar = () => {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden z-50 md:inline-block md:fixed">
            <Image  src= "/avatar-works.png" width={330} height={330}
             alt="Avatar" />

        </MotionTransition>
    )
}

export default Avatar;