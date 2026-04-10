'use client'

import React from 'react';
import Styles from './dashboardStats.module.css';
import Image from 'next/image';


export default function DashboardStats() {


    return (
        <div className={Styles.dashContainer}>
            <div className={Styles.employees}>
                <Image src="/icons8-employees-48.png" className={Styles.logo} width={48} height={48} />
                <div>
                    <h3>7</h3>
                    <p>Employees</p>
                </div>
            </div>
            <div className={Styles.departments}>
                <img src="/icons8-department-48.png" className={Styles.logo}/>
                <div>
                    <h3>7</h3>
                    <p>Departments</p>
                </div>
            </div>
            <div className={Styles.locations}>
                <img src="/icons8-location-48.png" className={Styles.logo}/>
                <div>
                    <h3>9</h3>
                    <p>Locations</p>
                </div>
            </div>
        </div>
    )
}