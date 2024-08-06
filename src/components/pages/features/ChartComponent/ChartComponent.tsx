import style from './chartComponent.module.scss';
import React, { useState } from 'react';
import { orders } from '../../../test/db/transactions';
import HomeLineChart from './Chart/Chart';

interface IOrder {
    orderId: string;
    receiptNo: string;
    menu: string[];
    collectedBy: string;
    dateTime: string;
    paymentMethod: string;
    action: string;
    totalPrice: number;
}

interface ICardReport {
    labels: string[];
    datasets: number[];
}

const generateCardReport = (orders: IOrder[], year: string, period: string): ICardReport => {
    const datePattern = (month: string, day: string) => new RegExp(`${month}/${day}/${year}`);

    const getDailyData = (months: string[]) => {
        const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));
        return days.map(day => (
            months.reduce((acc, month) => (
                acc + orders
                    .filter(order => datePattern(month, day).test(order.dateTime))
                    .reduce((acc, curr) => acc + curr.totalPrice, 0)
            ), 0)
        ));
    };

    const getMonthlyData = (months: string[]) => {
        return months.map(month => (
            orders
                .filter(order => new RegExp(`${month}/\\d{2}/${year}`).test(order.dateTime))
                .reduce((acc, curr) => acc + curr.totalPrice, 0)
        ));
    };

    if (period === '1M') {
        return {
            labels: Array.from({ length: 31 }, (_, i) => `Day ${i + 1}`),
            datasets: getDailyData(['03']) 
        };
    }

    if (period === '3M') {
        const months = ['01', '02', '03'];
        return {
            labels: ["Jan", "Feb", "Mar"],
            datasets: getMonthlyData(months)
        };
    }

    if (period === '6M') {
        const months = ['01', '02', '03', '04', '05', '06'];
        return {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: getMonthlyData(months)
        };
    }

    if (period === '1Y') {
        const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        return {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: getMonthlyData(months)
        };
    }

    return { labels: [], datasets: [] };
};

const ChartComponent: React.FC = () => {
    const today = new Date()
    const [selectedYear, setSelectedYear] = useState<string>(`${today.getFullYear()}`);
    const [selectedPeriod, setSelectedPeriod] = useState<string>('1Y');
    const report = generateCardReport(orders, selectedYear, selectedPeriod);
    const filteredYears = [...orders.map((order) => order.dateTime.split(' ')[0]).map((date) => date.split('/')[2]).filter((year, index, self) => self.indexOf(year) === index)]


    return (
        <div className={style.chartComp}>
            <div className={style.chartComp_up}>
                <div className={style.chartComp_up_head}>Income Statistics</div>

                <div className={style.chartComp_up_actions}>
                    <div className={style.chartComp_up_actions_year}>

                        <div className={style.chartComp_up_actions_year_selected}>{selectedYear}</div>
                        
                        <div className={style.chartComp_up_actions_year_down}>
                            {filteredYears.map((year) => (
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
                    labels: report.labels,
                    datasets: [{
                        label: 'Total Price',
                        data: report.datasets,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                    }]
                }} />
            </div>
        </div>
    );
};

export default ChartComponent;
