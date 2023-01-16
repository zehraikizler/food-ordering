import Image from "next/image";
import { useState } from "react";
import Accounts from "../../components/profile/Account";
import Order from "../../components/profile/Order";
import Password from "../../components/profile/Password";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="min-h-[calc(100vh_-_433px)] flex flex-col lg:flex-row px-10 mt-10">
      <div className="flex-shrink-0 lg:w-80 w-100">
        <div className="relative flex flex-col items-center border border-b-0 rounded-t-md">
          <Image
            src="/images/profile/profile-photo.jpg"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full mt-10"
          />
          <b className="text-2xl mt-1 px-10 py-5">Zehra İkizler</b>
        </div>
        <ul className="font-semibold">
          <li
            onClick={() => setTabs(0)}
            className={`border border-b-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 0 && "bg-primary text-white"
            }`}
          >
            <i className="fa fa-home mx-2"></i>
            <button>Account</button>
          </li>
          <li
            onClick={() => setTabs(1)}
            className={`border border-b-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}
          >
            <i className="fa fa-key mx-2"></i>
            <button>Password</button>
          </li>
          <li
            onClick={() => setTabs(2)}
            className={`border border-b-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}
          >
            <i className="fa fa-motorcycle mx-2"></i>
            <button>Orders</button>
          </li>
          <li
            onClick={() => setTabs(3)}
            className={`border rounded-b-md w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 3 && "bg-primary text-white"
            }`}
          >
            <i className="fa fa-sign-out mx-2"></i>
            <button>Exit</button>
          </li>
        </ul>
      </div>

      {tabs == 0 && <Accounts />}
      {tabs == 1 && <Password />}
      {tabs == 2 && <Order />}
    </div>
  );
};

export default Profile;
