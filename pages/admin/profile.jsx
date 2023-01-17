import Image from "next/image";
import { useState } from "react";
import Products from "../../components/admin/Products";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="min-h-[calc(100vh_-_433px)] flex flex-col lg:flex-row px-10 my-10">
      <div className="flex-shrink-0 lg:w-80 w-100">
        <div className="relative flex flex-col items-center border border-b-0 rounded-t-md">
          <Image
            src="/images/admin/admin.png"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full mt-10"
          />
          <b className="text-2xl mt-1 px-10 py-5">Admin</b>
        </div>
        <ul className="font-semibold">
          <li
            onClick={() => setTabs(0)}
            className={`border border-b-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 0 && "bg-primary text-white"
            }`}
          >
            <i className="fa fa-cutlery mx-2"></i>
            <button>Products</button>
          </li>
          <li
            onClick={() => setTabs(1)}
            className={`border border-b-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}
          >
            <i className="fa fa-motorcycle mx-2"></i>
            <button>Orders</button>
          </li>
          <li
            onClick={() => setTabs(2)}
            className={`border border-b-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}
          >
            <i className="fa-solid fa-list mx-2"></i>
            <button>Categories</button>
          </li>
          <li
            onClick={() => setTabs(3)}
            className={`border border-b-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 3 && "bg-primary text-white"
            }`}
          >
            <i className="fa-solid fa-bookmark mx-2"></i>
            <button>Footer</button>
          </li>
          <li
            onClick={() => setTabs(4)}
            className={`border rounded-b-md w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 4 && "bg-primary text-white"
            }`}
          >
            <i className="fa fa-sign-out mx-2"></i>
            <button>Exit</button>
          </li>
        </ul>
      </div>

      {tabs == 0 && <Products />}
    </div>
  );
};

export default Profile;
