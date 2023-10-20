import React from "react";
import QrReader from "react-weblineindia-qrcode-scanner";
import styles from "./Scanner.module.css";
import { scanUser } from "../../apis/api";

const Scanner = () => {
  const scanHandler = async (data) => {
    if(data){
        try{
          const qrdata = JSON.parse(data);
          console.log(qrdata, "Qr Data")
          if (qrdata.email) {
            const res = await scanUser({ email: qrdata.email });
            console.log(res.data.validation);
          }
        } catch(err){
            console.log("Invalid QR code");
        }
    }
  };

  return (
    <>
      <div className={styles.qrreader_container}>
        <QrReader
          className={styles.qrscanner}
          delay={300}
          constraints={{ facingMode: "environment" }}
          style={{ height: 300 }}
          onScan={(data) => scanHandler(data)}
        />
        <h3 className={`${styles.scannertitle}`}>Scan Your Qr Code</h3>
      </div>
    </>
  );
};

export default Scanner;
