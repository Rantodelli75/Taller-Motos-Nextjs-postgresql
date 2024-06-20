import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";
import motobg from "@/app/elements1/motobg.png"
import motobackground from "@/app/elements1/motobackground.png"
import AOS from "aos";
import { link } from "fs";
/* eslint-disable @next/next/no-img-element */

const Hero = () => {
    const router = useRouter();
    return (
    <div className="mt-1 mb-3">
        <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
            >
            <img
                src={motobg.src}
                alt=""
                className="sm:scale-110 relative -z-10 max-h-[500px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
        </div>
            <div className="space-y-5 order-2 sm:order-1 mb-6 ml-8 sm:pr-32 ">
                <h1
                data-aos="fade-up"
                data-aos-delay="600"
                className="text-5xl lg:text-7xl font-semibold font-serif"
                >
                FORZA
                <h1 
                data-aos="fade-up"
                data-aos-delay="600"
                className="text-5xl lg:text-7xl font-semibold text-orange-500 font-serif"
                >MOTOR
                </h1>CLUB
                </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
            Somos una página dedicada al manejo y gestión de motocicletas, repuestos y contamos con un centro de servicios para el cuidado de tu inversión. {" "}
            </p>
            <button
                data-aos="fade-up"
                data-aos-delay="1500"
                onClick={() => {
                AOS.refreshHard();
                }}
                className="rounded-xl bg-neutral-950 hover:bg-orange-600 transition duration-500 py-2 px-6 text-white font-semibold"
            >
                <a onClick={() => router.push('/components/Registro')}>Registrar Moto</a> 
            </button>
        </div>
        </div>
    </div>
    </div>
);
};

export default Hero;