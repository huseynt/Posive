import QRCode from "qrcode.react";
import style from "./qrcode.module.scss";
import React, { useEffect } from "react";

interface IQRCodeComponentProps {
  setQrOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const QRCodeComponent: React.FC<IQRCodeComponentProps> = (props) => {
  const { setQrOpen } = props;
  const [code, setCode] = React.useState<string>("");
  // const id: string = "LK21-121KL-12UI-78HY-FGA8";

// --------------------for test--------------------------
  const generateRandomCode = (): void => {
    const segments = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < 4; i++) {
      let segment = '';
      for (let j = 0; j < 4; j++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        segment += characters[randomIndex];
      }
      segments.push(segment);
    }
  
    setCode(segments.join('-'));
  };
  useEffect(() => {
    generateRandomCode();
    const intervalId = setInterval(() => {
      generateRandomCode();
    }, 7000); 
    return () => {
      clearInterval(intervalId);
    }
  }, []);
// ----------------------------




  return (
    <div className={style.qrcode}>
      <div className={style.qrcode_bg} onClick={() => setQrOpen(false)}></div>

      <div className={style.qrcode_block}>
        <h3 className={style.qrcode_block_head}>Scan QR Code</h3>
        <p className={style.qrcode_block_information}>
          Waiting for payment from customers
        </p>
        <div className={style.qrcode_block_qr}>
          <QRCode value={code} size={224} fgColor={"#d4733b"} />
        </div>

        <div className={style.qrcode_block_or}>
          <p className={style.qrcode_block_or_p}>or</p>
        </div>

        <p className={style.qrcode_block_label}>Manualy enter the code below</p>

        <div className={style.qrcode_block_manual}>
          <p className={style.qrcode_block_manual_id}>{code}</p>
          <div className={style.qrcode_block_manual_copy}
          onClick={() => navigator.clipboard.writeText(code)}
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1663 8.60016V11.4002C11.1663 13.7335 10.233 14.6668 7.89967 14.6668H5.09967C2.76634 14.6668 1.83301 13.7335 1.83301 11.4002V8.60016C1.83301 6.26683 2.76634 5.3335 5.09967 5.3335H7.89967C10.233 5.3335 11.1663 6.26683 11.1663 8.60016Z"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.1663 4.60016V7.40016C15.1663 9.7335 14.233 10.6668 11.8997 10.6668H11.1663V8.60016C11.1663 6.26683 10.233 5.3335 7.89967 5.3335H5.83301V4.60016C5.83301 2.26683 6.76634 1.3335 9.09967 1.3335H11.8997C14.233 1.3335 15.1663 2.26683 15.1663 4.60016Z"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className={style.qrcode_block_actions}>
          <div className={style.qrcode_block_actions_option}
          onClick={() => setQrOpen(false)}
          >Change Method</div>
          <div className={style.qrcode_block_actions_option}
          onClick={generateRandomCode}
          >Send QR</div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeComponent;
