import React, { useState } from "react";
import { Avatar, Box, Card, DialogContent, DialogTitle, Grid, IconButton, Typography } from "@mui/material";

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

const cashupDeposite = [
  { id: 1, title: "ওউইং/ঋণ ব্যালেন্স", img: educationImg, type: "balance" },
  { id: 2, title: "দৈনিক লাভ", img: electricityImg, type: "daily_profit" },
  { id: 3, title: "মাসিক লাভ", img: gasImg, type: "monthly_profit" },
  { id: 4, title: "চক্রবৃদ্ধি লাভ", img: tapImg, type: "compounding_profit" },
  { id: 5, title: "দৈনিক চক্রবৃদ্ধি", img: vatImg, type: "daily_compounding_profit" },
  { id: 6, title: "মাসিক চক্রবৃদ্ধি", img: internetImg, type: "monthly_compounding_profit" },
  { id: 8, title: "পণ্যের লাভ", img: cableTv, type: "product_profit" },
  { id: 7, title: "উইথড্র", img: insuranceImg, type: "withdraw" },
];

const CashupOwingDeposite = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { data: cashupBalance } = useQuery({
    queryKey: ['cashupOwingDeposit'],
    queryFn: () => apiReq.get('/api/cashup-owing-deposit/',)
  })
  console.log(cashupBalance)

  // Open Dialog
  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  // Close Dialog
  const handleClose = () => {
    setOpenDialog(false);
    // setSelectedItem(null);
  };

  return (
    <Box sx={{ bgcolor: "white", py: 5, px: 2 }}>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        ক্যাশআপ ডিপোজিট (ওউইং / ঋণ)
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={2}>
        {cashupDeposite.map((service) => (
          <Grid item xs={6} sm={4} md={3} key={service.id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 2,
                cursor: "pointer",
                boxShadow: 3,
                borderRadius: 2,
                border: '1px solid coral',
                "&:hover": { boxShadow: 6 },
              }}
              onClick={() => handleOpen(service)}
            >
              <img src={service.img ?? ''} style={{ width: 50, height: 50, marginBottom: 1 }} alt={service.title} />
              <Typography fontSize={14} fontWeight="bold" textAlign="center">
                {service.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog Component */}
      <CDialog open={openDialog} onClose={handleClose} title={selectedItem?.title}>
        <Avatar src={selectedItem?.img} sx={{ width: 80, borderRadius: 0, height: 80, mb: 2, mx: "auto" }} alt={selectedItem?.title} />
        {selectedItem?.type === "balance" && <CashupOwingBalance />}
        {
          [
            { label: 'Daily Profit', value: cashupBalance?.data[0]?.daily_profit ?? '0.00', key: 'daily_profit' },
            { label: 'Monthly Profit', value: cashupBalance?.data[0]?.monthly_profit ?? '0.00', key: 'monthly_profit' },
            { label: 'Compounding Profit', value: cashupBalance?.data[0]?.compounding_profit ?? '0.00', key: 'compounding_profit' },
            { label: 'Daily Compounding Profit', value: cashupBalance?.data[0]?.daily_compounding_profit ?? '0.00', key: 'daily_compounding_profit' },
            { label: 'Monthly Compounding Profit', value: cashupBalance?.data[0]?.monthly_compounding_profit ?? '0.00', key: 'monthly_compounding_profit' },
            { label: 'Product Profit', value: cashupBalance?.data[0]?.product_profit, key: 'product_profit' },
          ]
            ?.filter((item) => selectedItem?.type == item.key)
            ?.map((item, id) => (
              <Box key={id}>
                <Typography
                  sx={{ textAlign: 'center', mb: 1, fontSize: '25px', color: 'purple' }}
                >
                  {item.label} :
                </Typography>
                <Typography
                  sx={{ textAlign: 'center', mb: 4, fontSize: '25px', color: 'green' }}
                >
                  {item.value} BDT
                </Typography>
              </Box>
            ))
        }

        {selectedItem?.type === "withdraw" &&
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
