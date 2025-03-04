import React from 'react';
import { IoMdHome } from 'react-icons/io';
import { IoQrCode } from 'react-icons/io5';
import { TiShoppingCart, TiUser } from 'react-icons/ti';
import { FaUser } from "react-icons/fa";

import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className={`bg-white w-full h-16  bg-center border-t-2 bg-cover fixed bottom-0 left-0 z-20 flex justify-around items-center`}>
			<Link to={"/dashboard"}>
				<div className="flex flex-col items-center text-fuchsia-800">
					<IoMdHome size={30} />
					<p className="font-medium">Home</p>
				</div>
			</Link>
			<Link to={"/product"}>
				<div className="flex flex-col items-center justify-center text-fuchsia-800 relative">
					<span className="w-16 h-16 bg-white flex justify-center items-center rounded-full shadow-lg absolute bottom-[30px]">
						<TiShoppingCart size={30} />
					</span>
					<p className="font-medium relative mt-6">Products</p>
				</div>
			</Link>
			{/* <div className="flex flex-col items-center text-fuchsia-800 relative">
				<span className="w-16 h-16 bg-white flex justify-center items-center rounded-full shadow-lg -left-[8px] absolute bottom-[30px]">
					<IoQrCode size={30} />
				</span>
				<p className="font-medium relative mt-6">Qr Code</p>
			</div> */}
			<Link
				to={"/profile"}
				className="flex flex-col items-center text-fuchsia-800"
			>
				<FaUser size={24} />
				<p className="font-medium">Profile</p>
			</Link>
		</div>
	);
}

export default Footer;