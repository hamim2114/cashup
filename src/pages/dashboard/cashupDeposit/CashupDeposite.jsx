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
import MainBalance from "./mainBalance/MainBalance";

const cashupDeposite = [
  { id: 1, title: "মেইন ব্যালেন্স", img: educationImg, type: "balance" },
  { id: 2, title: "দৈনিক লাভ", img: electricityImg, type: "profit" },
  { id: 3, title: "মাসিক লাভ", img: gasImg, type: "profit" },
  { id: 4, title: "চক্রবৃদ্ধি লাভ", img: tapImg, type: "profit" },
  { id: 5, title: "দৈনিক চক্রবৃদ্ধি", img: vatImg, type: "compound" },
  { id: 6, title: "মাসিক চক্রবৃদ্ধি", img: internetImg, type: "compound" },
  { id: 7, title: "উইথড্র", img: insuranceImg, type: "withdraw" },
  { id: 8, title: "পণ্যের লাভ", img: cableTv, type: "profit" },
];

const CashupDeposite = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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
        ক্যাশআপ ডিপোজিট
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
                "&:hover": { boxShadow: 6 },
              }}
              onClick={() => handleOpen(service)}
            >
              <Avatar src={service.img} sx={{ width: 50, height: 50, mb: 1 }} alt={service.title} />
              <Typography fontSize={14} fontWeight="bold" textAlign="center">
                {service.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog Component */}
      <CDialog open={openDialog} onClose={handleClose} title={selectedItem?.title}>
        <Avatar src={selectedItem?.img} sx={{ width: 80, height: 80, mb: 2, mx: "auto" }} alt={selectedItem?.title} />
        {selectedItem?.type === "balance" && <MainBalance />}
      </CDialog>
    </Box>
  );
};

export default CashupDeposite;
