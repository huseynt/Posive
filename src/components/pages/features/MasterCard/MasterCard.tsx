import { useEffect, useState } from 'react';
import style from './masterCard.module.scss';

interface MasterCardProps {
    setMastercard: React.Dispatch<React.SetStateAction<boolean>>;
    setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
}


const MasterCard: React.FC<MasterCardProps> = (props) => {
    const { setMastercard, setPaymentMethod } = props;
    const [section, setSection] = useState("card");
    const [flipped, setFlipped] = useState(false);
    const [verifyCode, setVerifyCode] = useState("");
    const [data, setData] = useState({
        cardNumber: "",
        cardHolder: "",
        cardDate: "",
        cardCvv: ""
    });

    useEffect(() => {
        if (section === "verify") {
            setFlipped(false);
        }
    }, [section]);

    const handleVerify = () => {
        if (verifyCode !== "") {
            setMastercard(false);
            setPaymentMethod("mastercard");
        }
    }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "cardNumber") {
            let value = event.target.value.replace(/\D/g, '');
            if (value.length > 16) value = value.slice(0, 16);
            const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
            setData(
                {
                    ...data,
                    cardNumber: formattedValue
                }
            );
        } else if(event.target.name === "cardHolder") {
            let value = event.target.value.replace(/[^a-zA-Z\s]/g, '').toUpperCase();
            if (value.length > 20) value = value.slice(0, 20);
            setData({
                ...data,
                cardHolder: value
            });
        } else if(event.target.name === "date") {
            let value = event.target.value.replace(/\D/g, '');
            if (value.length > 4) value = value.slice(0, 4);
            const formattedValue = value.replace(/(\d{2})(\d{1,2})/, '$1/$2');
            setData({
                ...data,
                cardDate: formattedValue
            });
        } else if(event.target.name === "cvv") {
            let value = event.target.value.replace(/\D/g, '');
            if (value.length > 3) value = value.slice(0, 3);
            setData({
                ...data,
                cardCvv: value
            });
        }
      };

      const changeVerify = (event: React.ChangeEvent<HTMLInputElement>) => {
            setVerifyCode(event.target.value);
        }


  return (
    <div className={style.masterCard}>

        <div className={style.bg}
        onClick={() => setMastercard(false)}
        ></div>

        <div className={style.masterCard_main}>
            <div className={style.masterCard_main_bg}></div>
           
            <div className={style.masterCard_main_form}>
                {
                    section === "card" ? (
                        <>
                            <div className={style.masterCard_main_form_title}>MasterCard Payment</div>
                
                            <div className={style.masterCard_main_form_item}
                            onFocus={() => setFlipped(false)}
                            >
                                <label className={style.masterCard_main_form_item_label} 
                                htmlFor="cardNumber">CARD NUMBER</label>

                                <input  className={`${style.masterCard_main_form_item_input} ${style.cardNumber}`} 
                                type="text" 
                                name="cardNumber" 
                                id="cardNumber" 
                                onChange={handleChange}
                                value={data.cardNumber}
                                placeholder="0000 0000 0000 0000" />
                            </div>
                            <div className={style.masterCard_main_form_item}
                            onFocus={() => setFlipped(false)}
                            >
                                <label className={style.masterCard_main_form_item_label} 
                                htmlFor="cardHolder">CARD HOLDER</label>

                                <input className={`${style.masterCard_main_form_item_input} ${style.cvv}`} 
                                type="text" 
                                name="cardHolder" 
                                id="cardHolder" 
                                onChange={handleChange}
                                value={data.cardHolder}
                                placeholder="name surname" />
                            </div>
                            
                            <div className={style.masterCard_main_form_detail}>
                                <div className={style.masterCard_main_form_item}
                                    onFocus={() => setFlipped(false)}
                                    >
                                        <label className={style.masterCard_main_form_item_label} 
                                        htmlFor="date">CARD DATE</label>

                                        <input className={`${style.masterCard_main_form_item_input} ${style.cvv}`} 
                                        type="text" 
                                        name="date" 
                                        id="date" 
                                        onChange={handleChange}
                                        value={data.cardDate}
                                        placeholder="date" />
                                    </div>
                                    <div className={style.masterCard_main_form_item}
                                    onFocus={() => setFlipped(true)}
                                    >
                                        <label className={style.masterCard_main_form_item_label} 
                                        htmlFor="cvv">CARD CVV</label>

                                        <input className={`${style.masterCard_main_form_item_input} ${style.cvv}`} 
                                        type="text" 
                                        name="cvv" 
                                        id="cvv" 
                                        onChange={handleChange}
                                        value={data.cardCvv}
                                        placeholder="cvv" />
                                </div>
                            </div>

                            <p className={style.masterCard_main_form_info}>verify your card with the code sent to your email address.</p>

                            <div className={style.masterCard_main_form_btn}
                            onClick={() => setSection("verify")}
                            >
                                Verify
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={style.masterCard_main_form_back}>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                                onClick={() => setSection("card")}
                                >
                                    <path d="M9.57 6.6001L3.5 12.6701L9.57 18.7401" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M20.5 12.6699H3.67" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>

                            <div className={style.masterCard_main_form_title}>Verify Payment</div>
                
                            <div className={style.masterCard_main_form_item}>
                                <label className={style.masterCard_main_form_item_label} 
                                htmlFor="verifyCode">VERIFY CODE</label>

                                <input  className={`${style.masterCard_main_form_item_input} ${style.cardNumber}`} 
                                type="text" 
                                name="verifyCode" 
                                id="verifyCode" 
                                onChange={changeVerify}
                                value={verifyCode}
                                placeholder="*****" />
                            </div>
                            
                            <p className={style.masterCard_main_form_info}>verify your card with the code sent to your email address.</p>

                            <div className={style.masterCard_main_form_btn}
                            onClick={handleVerify}
                            >
                                Select This Method
                            </div>
                        </>
                    )
                }
            </div>


            <div className={style.masterCard_main_container}>
                <div className={`${style.masterCard_main_container_card} ${flipped ? style.flipped: ""}`}>
                    
                    <div className={style.masterCard_main_container_card_front}>
                        {/* Ön Tərəf */}
                        <div className={style.masterCard_main_container_card_front_logo}>
                            <img className={style.masterCard_main_container_card_front_logo_img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt="Mastercard logo"/>
                        </div>

                        <div className={style.masterCard_main_container_card_front_chip}>
                            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 511 511" xmlSpace="preserve">
                            <path d="M455.5,56h-400C24.897,56,0,80.897,0,111.5v288C0,430.103,24.897,455,55.5,455h400c30.603,0,55.5-24.897,55.5-55.5v-288
                                C511,80.897,486.103,56,455.5,56z M464,248H343v-56.5c0-4.687,3.813-8.5,8.5-8.5H464V248z M343,263h121v65H343V263z M479,223h17v65
                                h-17V223z M479,208v-65h17v65H479z M464,168H351.5c-12.958,0-23.5,10.542-23.5,23.5V408H183V103h272.5c4.687,0,8.5,3.813,8.5,8.5
                                V168z M168,248H47v-65h121V248z M32,288H15v-65h17V288z M47,263h121v65H47V263z M263,88V71h137v17H263z M248,88H111V71h137V88z
                                M168,103v65H47v-56.5c0-4.687,3.813-8.5,8.5-8.5H168z M32,208H15v-65h17V208z M15,303h17v65H15V303z M47,343h121v65H55.5
                                c-4.687,0-8.5-3.813-8.5-8.5V343z M248,423v17H111v-17H248z M263,423h137v17H263V423z M343,408v-65h121v56.5
                                c0,4.687-3.813,8.5-8.5,8.5H343z M479,303h17v65h-17V303z M496,111.5V128h-17v-16.5c0-12.958-10.542-23.5-23.5-23.5H415V71h40.5
                                C477.832,71,496,89.168,496,111.5z M55.5,71H96v17H55.5C42.542,88,32,98.542,32,111.5V128H15v-16.5C15,89.168,33.168,71,55.5,71z
                                M15,399.5V383h17v16.5c0,12.958,10.542,23.5,23.5,23.5H96v17H55.5C33.168,440,15,421.832,15,399.5z M455.5,440H415v-17h40.5
                                c12.958,0,23.5-10.542,23.5-23.5V383h17v16.5C496,421.832,477.832,440,455.5,440z"/>
                            </svg>
                        </div>
                        
                        <div className={style.masterCard_main_container_card_front_number}>{data.cardNumber || "0000 0000 0000 0000"}</div>
                        <div className={style.masterCard_main_container_card_front_info}>
                            <div className={style.masterCard_main_container_card_front_info_holder}>{data.cardHolder || "NAME SURNAME"}</div>
                            <div className={style.masterCard_main_container_card_front_info_date}>{data.cardDate || "MM/YY"}</div>
                        </div>
                    </div>

                    <div className={style.masterCard_main_container_card_back}>
                        {/* Arxa Tərəf */}
                        <div className={style.masterCard_main_container_card_back_strip}></div>
                        <div className={style.masterCard_main_container_card_back_cvv}>
                            <div className={style.masterCard_main_container_card_back_cvv_head}>CVV</div>
                            <div className={style.masterCard_main_container_card_back_cvv_code}>{data.cardCvv || "***"}</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        
    </div>
  )
}

export default MasterCard
