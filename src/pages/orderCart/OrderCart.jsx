import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiReq from "../../utils/axiosInstance";
import Loader from "../../common/Loader";
import ErrorMsg from "../../common/ErrorMsg";
import { Button, DialogActions, IconButton, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Close } from "@mui/icons-material";
import CDialog from "../../common/CDialog";
import toast from "react-hot-toast";
import CButton from "../../common/CButton";
import Checkout from "../Checkout/Checkout";

const OrderCart = () => {
  const [removeCartData, setRemoveCartData] = useState({})
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false)
  const [checkOutDialogOpen, setCheckOutDialogOpen] = useState(false)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['carted-products'],
    queryFn: () => apiReq.get('/api/carted-products/')
  })

  // Calculate the total value of all items in the cart
  const totalValue = data?.data?.reduce((sum, item) => sum + Number(item.total_price), 0) || 0;
  console.log(totalValue)
  const queryClient = useQueryClient()

  const removeMutation = useMutation({
    mutationFn: () => apiReq.delete(`/api/remove_carted_products/${removeCartData?.id}/`),
    onSuccess: (res) => {
      toast.success("Remove Successfull");
      queryClient.invalidateQueries(['carted-products'])
      setRemoveCartData({})
      setRemoveDialogOpen(false)
    },
    onError: (err) => {
      console.log(err);
    },
  });


  const handleRemove = () => {
    removeMutation.mutate()
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="card w-full bg-base-100 shadow-xl p-4 md:p-6">
        <ListItem mb={2}>
          <Link to="/product">
            <FaArrowLeft size={30} />
          </Link>
          <Typography variant="h5" ml={2} >Shopping Cart</Typography>
        </ListItem>
        <div className="overflow-x-auto">
          {
            isLoading ? <Loader /> : isError ? <ErrorMsg /> :
              data?.data?.length == 0 ? <Typography sx={{ p: 4, color: 'coral' }}>Shoping Cart Empty</Typography> :

                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      {/* <th>Quantity</th> */}
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data?.map((item) => (
                      <tr key={item.id}>
                        <td className="flex flex-col md:flex-row items-start md:items-center gap-3">
                          <img
                            src={item?.item?.item_image}
                            alt={item?.item?.name}
                            className="w-12 h-12"
                          />
                          <div>
                            <p className="font-semibold">{item?.item?.name}</p>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center gap-2">
                            x<Typography >{item.quantity}</Typography>
                          </div>
                          <Typography>
                            ৳ {item?.item?.price}
                          </Typography>
                        </td>
                        {/* <td>
                          <div className="flex items-center gap-2">
                            x<Typography >{item.quantity}</Typography>
                          </div>
                        </td> */}
                        <td>৳ {item?.total_price}</td>
                        <td>
                          <IconButton onClick={() => {
                            setRemoveCartData(item)
                            setRemoveDialogOpen(true)
                          }}>
                            <Close />
                          </IconButton>
                        </td>
                      </tr>
                    ))}
                    {/* Total Value Row */}
                    <tr>
                      <td></td>
                      <td className="text-right font-semibold">
                        Total:
                      </td>
                      <td className="font-semibold">৳ {totalValue}</td>
                    </tr>
                  </tbody>
                </table>
          }
        </div>

        <CDialog title={`Confirm Remove (${removeCartData?.item?.name}) ?`} open={removeDialogOpen} onClose={() => setRemoveDialogOpen(false)} >
          <DialogActions>
            <Button onClick={() => setRemoveDialogOpen(false)}>Cancel</Button>
            <CButton onClick={handleRemove} loading={removeMutation.isPending} variant="contained" color="warning">Remove</CButton>
          </DialogActions>
        </CDialog>

        <div className="divider"></div>
        <Button onClick={() => setCheckOutDialogOpen(true)} disabled={data?.data?.length == 0} variant="contained" style={{ width: '100%' }}>
          CONTINUE CHECKOUT
        </Button>
      </div>

      <CDialog disableOutsideClick title='CheckOut' open={checkOutDialogOpen} onClose={() => setCheckOutDialogOpen(false)}>
        <Checkout onClose={() => setCheckOutDialogOpen(false)} />
      </CDialog>

    </div >
  );
};

export default OrderCart;
