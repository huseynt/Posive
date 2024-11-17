import style from './chartComponent.module.scss';
import React, { useEffect, useState } from 'react';
import HomeLineChart from './Chart/Chart';
import { useQuery } from '@tanstack/react-query';
import { createGetStatistics } from '../../../utils/API/API';
import { useTranslation } from 'react-i18next';

interface IGetStatistics {
    incomes: number[],
    years: string[],
    monthlyIncome: number,
    products: number,
    purchase: number,
}

interface IChartComponenrtProps {
    setMonthlyIncome: React.Dispatch<React.SetStateAction<number>>;
    setProductsNumber: React.Dispatch<React.SetStateAction<number>>;
    setPurchanes: React.Dispatch<React.SetStateAction<number>>;
}


const ChartComponent: React.FC<IChartComponenrtProps> = (props) => {
    const {setMonthlyIncome, setProductsNumber, setPurchanes} = props;
    const today = new Date()
    const {t} = useTranslation();
    const [selectedYear, setSelectedYear] = useState<string>(`${today.getFullYear()}`);
    const [selectedPeriod, setSelectedPeriod] = useState<string>('1Y');
    // const [firstItem, setFirstItem] = useState<string>('');
    const [selectedMonth, setSelectedMonth] = useState<string>(
       "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec"
    );

    // ------------------- get orders ------------------------
    const {
        data: StatisticsData,
        isPending
    } = useQuery<IGetStatistics | undefined>({
        queryKey: ["getStatistics", { months: selectedMonth, year: selectedYear}],
        queryFn: () => createGetStatistics(selectedMonth, Number(selectedYear)),
    });

    useEffect(() => {
        console.log("StatisticsData", StatisticsData);
    }, [StatisticsData]);
    
    useEffect(() => {
        if (StatisticsData && !isPending) {
        console.log("StatisticsData", StatisticsData.incomes, StatisticsData.years);
        setProductsNumber(StatisticsData.products);
        setMonthlyIncome(StatisticsData.monthlyIncome);
        setPurchanes(StatisticsData.purchase);
        }
        }, [StatisticsData, isPending]);
    // const dataset = StatisticsData.incomes.map((income: any) => income.totalPrice);
    //  ----------------- get orders ---------------------------


    // const report = generateCardReport(orders, selectedYear, selectedPeriod);
    // const filteredYears = [...orders.map((order) => order.dateTime.split(' ')[0]).map((date) => date.split('/')[2]).filter((year, index, self) => self.indexOf(year) === index)]

    
    // const order = [ 1000, 200, 300, 400, 500, 600, 700, 200, 900, 1000, 1100, 110 ]
    // const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    // const year = ["2023", "2024"]


    const days = (month: string) => {
        switch (month) {
            case 'Jan':
            case 'Mar':
            case 'May':
            case 'Jul':
            case 'Aug':
            case 'Oct':
            case 'Dec':
                return 31;
            case 'Apr':
            case 'Jun':
            case 'Sep':
            case 'Nov':
                return 30;
            case 'Feb':
                return 28;
            default:
                return 31;
        }
    }




    return (
        <div className={style.chartComp}>
            <div className={style.chartComp_up}>
                <div className={style.chartComp_up_head}>{t("Income Statistics")}</div>

                <div className={style.chartComp_up_actions}>
                    <div className={style.chartComp_up_actions_year}>

                        <div className={style.chartComp_up_actions_year_selected}>{selectedYear}</div>
                        
                        <div className={style.chartComp_up_actions_year_down}>
                            {StatisticsData?.years ? StatisticsData.years.map((year) => (
                                <div className={style.chartComp_up_actions_year_down_option} 
                                onClick={() => setSelectedYear(`${year}`)} 
                                key={year}
                                style={{backgroundColor: selectedYear===year ? "#fff" : ""}}
                                >{year}</div>
                                )) 
                                : 
                                (
                                    <div className={style.chartComp_up_actions_year_down_option} 
                                    style={{backgroundColor: "#fff"}}>2024</div>
                                )
                            }   
                        </div>
                    </div>

                    <div className={style.chartComp_up_actions_period}>
                        <div className={`${style.chartComp_up_actions_period_option} ${style.chartComp_up_actions_period_option_m}`} 
                        style={{backgroundColor: selectedPeriod==="1M" ? "#fff" : "",
                            color: selectedPeriod==="1M" ? "#000" : ""}}
                        title="Select a month from the dropdown list"
                        >{t("1M")}</div>
                        
                        <div className={`${style.chartComp_up_actions_period_option} ${style.chartComp_up_actions_period_option_three}`}
                        style={{backgroundColor: selectedPeriod==="3M" ? "#fff" : "",
                            color: selectedPeriod==="3M" ? "#000" : ""}}
                        title='Select a quarter from the dropdown list'
                        >{t("3M")}</div>

                        <div className={`${style.chartComp_up_actions_period_option} ${style.chartComp_up_actions_period_option_six}`}
                        style={{backgroundColor: selectedPeriod==="6M" ? "#fff" : "",
                            color: selectedPeriod==="6M" ? "#000" : ""}}
                        title='Select a half-year from the dropdown list'
                        >{t("6M")}</div>

                        <div className={style.chartComp_up_actions_period_option} 
                        style={{backgroundColor: selectedPeriod==="1Y" ? "#fff" : "",
                            color: selectedPeriod==="1Y" ? "#000" : ""}}
                        onClick={() => {
                            setSelectedPeriod("1Y") 
                            setSelectedMonth("Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec")
                        }}>{t("1Y")}</div>


                        <div className={style.chartComp_up_actions_period_mDown} 
                        onClick={() => setSelectedPeriod("1M")}>
                            <div className={style.chartComp_up_actions_period_mDown_option}
                            onClick={() => setSelectedMonth("Jan")}
                            >{t("Jan")}</div>
                            <div className={style.chartComp_up_actions_period_mDown_option}
                            onClick={() => setSelectedMonth("Feb")}
                            >{t("Feb")}</div>
                            <div className={style.chartComp_up_actions_period_mDown_option}
                            onClick={() => setSelectedMonth("Mar")}
                            >{t("Mar")}</div>
                            <div className={style.chartComp_up_actions_period_mDown_option}
                            onClick={() => setSelectedMonth("Apr")}
                            >{t("Apr")}</div>
                            <div className={style.chartComp_up_actions_period_mDown_option}
                            onClick={() => setSelectedMonth("May")}
                            >{t("May")}</div>
                            <div className={style.chartComp_up_actions_period_mDown_option}
                            onClick={() => setSelectedMonth("Jun")}
                            >{t("Jun")}</div>
                            <div className={style.chartComp_up_actions_period_mDown_option}
                            onClick={() => setSelectedMonth("Jul")}
                            >{t("Jul")}</div>
                            <div className={style.chartComp_up_actions_period_mDown_option}
                            onClick={() => setSelectedMonth("Aug")}
                            >{t("Aug")}</div>
                            <div className={style.chartComp_up_actions_period_mDown_option}
                            onClick={() => setSelectedMonth("Sep")}
                            >{t("Sep")}</div>
                            <div className={style.chartComp_up_actions_period_mDown_option}
                            onClick={() => setSelectedMonth("Oct")}
                            >{t("Oct")}</div>
                            <div className={style.chartComp_up_actions_period_mDown_option}
                            onClick={() => setSelectedMonth("Nov")}
                            >{t("Nov")}</div>
                            <div className={style.chartComp_up_actions_period_mDown_option}
                            onClick={() => setSelectedMonth("Dec")}
                            >{t("Dec")}</div>
                        </div>

                        <div className={style.chartComp_up_actions_period_threeDown}
                        onClick={() => setSelectedPeriod("3M")}
                        >
                            <div className={style.chartComp_up_actions_period_threeDown_option}
                            onClick={() => setSelectedMonth("Jan, Feb, Mar, Apr")}
                            >I {t("quarter")}</div>
                            <div className={style.chartComp_up_actions_period_threeDown_option}
                            onClick={() => setSelectedMonth("May, Jun, Jul, Aug")}
                            >II {t("quarter")}</div>
                            <div className={style.chartComp_up_actions_period_threeDown_option}
                            onClick={() => setSelectedMonth("Sep, Oct, Nov, Dec")}
                            >III {t("quarter")}</div>
                        </div>

                        <div className={style.chartComp_up_actions_period_sixDown}
                        onClick={() => setSelectedPeriod("6M")}>
                            <div className={style.chartComp_up_actions_period_sixDown_option}
                            onClick={() => setSelectedMonth("Jan, Feb, Mar, Apr, May, Jun")}
                            >I {t("half-year")}</div>
                            <div className={style.chartComp_up_actions_period_sixDown_option}
                            onClick={() => setSelectedMonth("Jul, Aug, Sep, Oct, Nov, Dec")}
                            >II {t("half-year")}</div>
                        </div>
                        


                    </div>
                </div>
            </div>

            <div className={style.chartComp_chart}>
                <HomeLineChart data={{
                    labels: selectedMonth.split(', ').length == 1 ? Array.from({ length: days(selectedMonth) }, (_, i) => String(i + 1)): 
                    selectedMonth.split(', ').map((month) => t(month)),
                    datasets: [{
                        label: 'Total Price',
                        data:  StatisticsData?.incomes || [],
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                    }]
                }} />
            </div>
        </div>
    );
};

export default ChartComponent;
