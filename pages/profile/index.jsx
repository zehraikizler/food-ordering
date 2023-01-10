import Image from "next/image";

const Profile = () => {
  return (
    <div className="min-h-[calc(100vh_-_433px)] flex px-10 mt-10">
      <div>
        <div className="border rounded-md w-80">
          <div className="relative flex flex-col items-center">
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
            <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
              <i className="fa fa-home mx-2"></i>
              <button>Account</button>
            </li>
            <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
              <i className="fa fa-key mx-2"></i>
              <button>Password</button>
            </li>
            <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
              <i className="fa fa-motorcycle mx-2"></i>
              <button>Orders</button>
            </li>
            <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
              <i className="fa fa-sign-out mx-2"></i>
              <button>Exit</button>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
