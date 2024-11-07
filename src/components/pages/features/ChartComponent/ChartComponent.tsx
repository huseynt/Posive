import style from './chartComponent.module.scss';
import React, { useState } from 'react';
import HomeLineChart from './Chart/Chart';



const ChartComponent: React.FC = () => {
    const today = new Date()
    const [selectedYear, setSelectedYear] = useState<string>(`${today.getFullYear()}`);
    const [selectedPeriod, setSelectedPeriod] = useState<string>('1Y');
    // const report = generateCardReport(orders, selectedYear, selectedPeriod);
    // const filteredYears = [...orders.map((order) => order.dateTime.split(' ')[0]).map((date) => date.split('/')[2]).filter((year, index, self) => self.indexOf(year) === index)]

    
    const order = [ 1000, 200, 300, 400, 500, 600, 700, 200, 900, 1000, 1100, 110 ]
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const year = ["2023", "2024"]



    return (
        <div className={style.chartComp}>
            <div className={style.chartComp_up}>
                <div className={style.chartComp_up_head}>Income Statistics</div>

                <div className={style.chartComp_up_actions}>
                    <div className={style.chartComp_up_actions_year}>

                        <div className={style.chartComp_up_actions_year_selected}>{selectedYear}</div>
                        
                        <div className={style.chartComp_up_actions_year_down}>
                            {year.map((year) => (
                                <div className={style.chartComp_up_actions_year_down_option} 
                                onClick={() => setSelectedYear(`${year}`)} 
                                key={year}
                                style={{backgroundColor: selectedYear===year ? "#fff" : ""}}
                                >{year}</div>
                            ))}
                        </div>
                    </div>

                    <div className={style.chartComp_up_actions_period}>
                        <div className={style.chartComp_up_actions_period_option} 
                        style={{backgroundColor: selectedPeriod==="1M" ? "#fff" : "",
                            color: selectedPeriod==="1M" ? "#000" : ""
                        }}
                        onClick={() => setSelectedPeriod("1M")}>1M</div>
                        <div className={style.chartComp_up_actions_period_option} 
                        style={{backgroundColor: selectedPeriod==="3M" ? "#fff" : "",
                            color: selectedPeriod==="3M" ? "#000" : ""
                        }}
                        onClick={() => setSelectedPeriod("3M")}>3M</div>
                        <div className={style.chartComp_up_actions_period_option} 
                        style={{backgroundColor: selectedPeriod==="6M" ? "#fff" : "",
                            color: selectedPeriod==="6M" ? "#000" : ""
                        }}
                        onClick={() => setSelectedPeriod("6M")}>6M</div>
                        <div className={style.chartComp_up_actions_period_option} 
                        style={{backgroundColor: selectedPeriod==="1Y" ? "#fff" : "",
                            color: selectedPeriod==="1Y" ? "#000" : ""
                        }}
                        onClick={() => setSelectedPeriod("1Y")}>1Y</div>
                    </div>
                </div>
            </div>

            <div className={style.chartComp_chart}>
                <HomeLineChart data={{
                    labels: month,
                    datasets: [{
                        label: 'Total Price',
                        data: order,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                    }]
                }} />
            </div>
        </div>
    );
};

export default ChartComponent;
