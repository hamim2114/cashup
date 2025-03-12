import React, { useState } from "react";
import { Avatar, Box, Card, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Typography } from "@mui/material";

// Import Images
import educationImg from "../../../assets/paybill/graduation.png";
import electricityImg from "../../../assets/paybill/electrical-energy.png";
import gasImg from "../../../assets/paybill/gas.png";
import tapImg from "../../../assets/paybill/tap.png";
import vatImg from "../../../assets/paybill/government.png";
import internetImg from "../../../assets/paybill/internet.png";
import insuranceImg from "../../../assets/paybill/healthcare.png";
import cableTv from "../../../assets/paybill/cable-tv.png";
import CDialog from "../../../common/CDialog";
import CashupOwingBalance from "./cashupOwingBalance/CashupOwingBalance";
import apiReq from "../../../utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const cashupDeposite = [
  { id: 1, titleKey: "owing_loan_balance", img: educationImg, type: "balance" },
  { id: 2, titleKey: "daily_profit", img: electricityImg, type: "daily_profit" },
  { id: 3, titleKey: "monthly_profit", img: gasImg, type: "monthly_profit" },
  { id: 4, titleKey: "compound_profit", img: tapImg, type: "compounding_profit" },
  { id: 5, titleKey: "daily_compound", img: vatImg, type: "daily_compounding_profit" },
  { id: 6, titleKey: "monthly_compound", img: internetImg, type: "monthly_compounding_profit" },
  { id: 7, titleKey: "product_profit", img: cableTv, type: "product_profit" },
  { id: 8, titleKey: "cashup_withdraw", img: insuranceImg, type: "cashup_withdraw" },
];

const CashupOwingDeposite = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { data: cashupBalance } = useQuery({
    queryKey: ['cashupOwingDeposit'],
    queryFn: () => apiReq.get('/api/cashup-owing-deposit/',)
  })

  const { t } = useTranslation('dashboard');

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };


  const handleClose = () => {
    setOpenDialog(false);
    // setSelectedItem(null);
  };

  return (
    <Box sx={{ bgcolor: "white", pb: 5, px: 2 }}>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        {t('cashup_deposit_owing_loan')}
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={2}>
        {cashupDeposite.map((service) => (
          <Grid item xs={6} sm={6} md={6} key={service.id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 2,
                cursor: "pointer",
                boxShadow: 3,
                border: '1px solid coral',
                borderRadius: 2,
                "&:hover": { boxShadow: 6 },
              }}
              onClick={() => handleOpen(service)}
            >
              <img src={service.img ?? ''} style={{ width: 50, height: 50, marginBottom: 1 }} alt={t(service.titleKey)} />
              <Typography fontSize={14} fontWeight="bold" textAlign="center">
                {t(service.titleKey)}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog Component */}
      <CDialog open={openDialog} onClose={handleClose} title={t(selectedItem?.titleKey)}>
        <Avatar src={selectedItem?.img} sx={{ width: 80, borderRadius: 0, height: 80, mb: 2, mx: "auto" }} alt={selectedItem?.title} />
        {selectedItem?.type === "balance" && <CashupOwingBalance />}
        {
          [
            { labelKey: 'daily_profit', value: cashupBalance?.data[0]?.daily_profit, key: 'daily_profit' },
            { labelKey: 'monthly_profit', value: cashupBalance?.data[0]?.monthly_profit, key: 'monthly_profit' },
            { labelKey: 'compound_profit', value: cashupBalance?.data[0]?.compounding_profit, key: 'compounding_profit' },
            { labelKey: 'daily_compound', value: cashupBalance?.data[0]?.daily_compounding_profit, key: 'daily_compounding_profit' },
            { labelKey: 'monthly_compound', value: cashupBalance?.data[0]?.monthly_compounding_profit, key: 'monthly_compounding_profit' },
            { labelKey: 'product_profit', value: cashupBalance?.data[0]?.product_profit, key: 'product_profit' },
          ]
            ?.filter((item) => selectedItem?.type == item.key)
            ?.map((item, id) => (
              <Box key={id}>
                <Typography
                  sx={{ textAlign: 'center', mb: 1, fontSize: '25px', color: 'purple' }}
                >
                  {t(item.labelKey)} : {/* Translate label */}
                </Typography>
                <Typography
                  sx={{ textAlign: 'center', mb: 4, fontSize: '25px', color: 'green' }}
                >
                  {item.value} BDT
                </Typography>
                <DialogActions>
                  <Link className="text-blue-500" to='/cashup-owing-profit-history'>See Full History</Link>
                </DialogActions>
              </Box>
            ))
        }

        {selectedItem?.type === "cashup_withdraw" &&
          <Box>
            <Typography
              sx={{ textAlign: 'center', mb: 1, fontSize: '25px', color: 'purple' }}
            >
              WithDraw : {' '}
              <span style={{ textAlign: 'center', fontSize: '25px', color: 'green' }}>
                {cashupBalance?.data[0]?.withdraw} BDT
              </span>
            </Typography>
            <Typography sx={{ textAlign: 'center', color: 'coral', mt: 2 }}>you must have to pay your cash in main balance</Typography>
          </Box>
        }

      </CDialog>
    </Box>
  );
};

export default CashupOwingDeposite;
